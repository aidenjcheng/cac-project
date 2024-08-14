from flask import Flask, render_template, request, redirect, url_for, session, flash, send_file
import pyrebase
from flask_cors import CORS
from functools import wraps
from google.cloud.exceptions import NotFound
from datetime import timedelta
import os
from flask import jsonify
from flask import send_from_directory
import firebase_admin
from firebase_admin import credentials, firestore
from flask import make_response

from firebase_admin import firestore
from google.cloud.firestore_v1.base_query import FieldFilter
#START INITIALIZE FIRESTORE DB
current_dir = os.path.dirname(os.path.abspath(__file__))
service_account_path = os.path.join(current_dir, 'serviceAccKey.json')
cred = credentials.Certificate(service_account_path)
firebase_admin.initialize_app(cred)

db = firestore.client()

#END OF INITIALIZING FIRESTORE DB
app = Flask(__name__, static_folder='dist', static_url_path='')
#CORS(app, supports_credentials=True)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "https://stingray-app-7i9ac.ondigitalocean.app/"]}}, supports_credentials=True)

config = {
    "apiKey": os.environ.get("FIREBASE_API_KEY"),
    "authDomain": os.environ.get("FIREBASE_AUTH_DOMAIN"),
    "projectId": os.environ.get("PROJECT_ID"),
    "storageBucket": os.environ.get("STORAGE_BUCKET"),
    "messagingSenderId": os.environ.get("MESSAGING_SENDER_ID"),
    "appId": os.environ.get("APP_ID"),
    "measurementId": os.environ.get("MEASUREMENT_ID"),
    "databaseURL": os.environ.get("DATABASE_URL", '')  # Default to empty string if not set
}
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()

app.secret_key = "secretkeynocapChangeThisLater"
app.config['SESSION_COOKIE_SECURE'] = False  # For HTTPS
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'  # Required for cross-site requests
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=7)

#user has to be logged in to access this page
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        print(f"Checking login. Session: {dict(session)}")
        if 'user' not in session:
            return jsonify({"success": False, "message": "Please log in to access this page"}), 401
        return f(*args, **kwargs)
    return decorated_function
#go to upload page while having login required
@app.route("/upload")
@login_required
def upload():
    print(f"Accessing upload route. Session: {dict(session)}")
    return send_from_directory('.', 'upload.html')

#check login
@app.route("/api/check_login")
def check_login():
    if 'user' in session:
        return jsonify({"logged_in": True})
    else:
        return jsonify({"logged_in": False})

@app.route("/api/login", methods=['POST'])
def api_login():
    print("login route accessed")
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')
        if not email or not password:
            return jsonify({"success": False, "message": "Email and password are required"}), 400
        user = auth.sign_in_with_email_and_password(email, password)
        session.permanent = True
        session['user'] = email
        session.modified = True
        print("USER LOGGED IN SUCCESS")
        print(f"Session contents: {dict(session)}")

        return jsonify({
            "success": True, 
            "message": "Login successful", 
            "redirect": "/upload",  # This is now handled by React Router
            "user": {
                "email": email,
                "displayName": email.split('@')[0]
            }
        })
    except Exception as e:
        print(f"Error during login: {str(e)}")
        return jsonify({"success": False, "message": "Please check your credentials"}), 401



@app.route('/api/user')
def get_user():
    # Get the ID token from the request headers
    id_token = request.headers.get('Authorization')
    try:
        # Verify the token
        user = auth.get_account_info(id_token)
        return jsonify({
            'email': user['users'][0]['email'],
            'displayName': user['users'][0].get('displayName', 'User')
        })
    except:
        return jsonify({'error': 'Invalid token'}), 401
pass


@app.route('/api/current_user')
@login_required
def get_current_user():
    print("sesson contents: ", dict(session) )
    print("Request cookies:", request.cookies)
    try:
        email = session['user']
        # You might want to fetch more user info from Firebase here if needed
        user_data = {
            'email': email,
            'displayName': email.split('@')[0]  # Using part of email as display name
        }
        return jsonify(user_data), 200
    except KeyError:
        # This shouldn't happen due to @login_required, but just in case
        return jsonify({'error': 'User not found in session'}), 401
    except Exception as e:
        # Log the error on the server side
        app.logger.error(f"Error in get_current_user: {str(e)}")
        return jsonify({'error': 'An unexpected error occurred'}), 500
    

@app.route('/api/get_total_stats', methods=['GET'])
def get_total_stats():
    print("accessing get total stats route")
    data = request.args  # For GET requests, use request.args instead of request.json
    print("Received data:", data)
    user_email = data.get("email")

    if not user_email:
        return jsonify({"error": "Email is required"}), 400

    db = firestore.client()
    user_ref = db.collection('users').document(user_email)

    try:
        doc = user_ref.get()
        if doc.exists:
            user_data = doc.to_dict()
            return jsonify(user_data), 200
        else:
            return jsonify({"error": "User not found"}), 404
    except Exception as e:
        print(f"Error retrieving user data: {e}")
        return jsonify({"error": "Internal server error"}), 500



@app.route('/api/update_stats', methods=['POST'])
def update_stats():
    data = request.json
    print("Received data:", data)  # Log the received data
    user_email = data.get('email')
    stats = data.get('statistics')

    print(f"Updating stats for user: {user_email}")
    print("Stats:", stats)

    if not user_email or not stats:
        print("Error: Missing email or statistics")
        return jsonify({"success": False, "message": "Email and statistics are required"}), 400

    db = firestore.client()
    user_ref = db.collection('users').document(user_email)

    try:
        user_doc = user_ref.get()
        if user_doc.exists:
            current_stats = user_doc.to_dict()
        else:
            current_stats = {}
            print(f"Creating new document for user: {user_email}")

        stat_fields = [
            'total_gun_occurrences',
            'total_knife_occurrences',
            'total_seconds_gun_detected',
            'total_seconds_knife_detected',
            'total_seconds_nothing_detected'
        ]

        updates = {}
        for field in stat_fields:
            if field not in stats:
                print(f"Warning: {field} not found in provided statistics")
            if field not in current_stats:
                updates[field] = stats.get(field, 0)
            else:
                updates[field] = current_stats.get(field, 0) + stats.get(field, 0)

        print("Updating with:", updates)
        user_ref.set(updates, merge=True)

        return jsonify({'success': True})

    except Exception as e:
        print(f"Error updating stats: {str(e)}")
        return jsonify({"success": False, "message": "An error occurred while updating stats"}), 500

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path.startswith('api/'):
        # For API routes, let Flask handle it
        return app.view_functions[request.endpoint](**request.view_args)
    elif path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')
        
# Keep the existing /api/current_user route to fetch the user's email
@app.route("/api/signup", methods=['POST'])
def api_signup():
    print("signup route accessed")
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')
        if not email or not password:
            return jsonify({"success": False, "message": "Email and password are required"}), 400
        # Your signup logic here
        print(f"Attempting to create account for email: {email}")
        user = auth.create_user_with_email_and_password(email, password)

        user_id = user['localId']  # Get the UID of the newly created user
        user_data = {
            'email': email,
            'created_at': firestore.SERVER_TIMESTAMP
        }
        db.collection('users').document(user_id).set(user_data)
        print(f"User added to Firestore with ID: {user_id}")
        return jsonify({"success": True, "message": "Account created successfully"})
    except Exception as e:
        print(f"Error during signup: {str(e)}")
        import traceback
        traceback.print_exc()
        return jsonify({"success": False, "message": str(e)}), 500
pass

@app.route('/logout')
def logout():
    session.pop('user')
    return redirect('/')
    
    
    
    
    
    
  


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
    
    
    
    
    