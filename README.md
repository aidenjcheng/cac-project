READ ME
CREATORS: KEVIN X, AIDEN C

Slideshow presentation: https://docs.google.com/presentation/d/1rtrg6qfZIpdFEVYc58orDBPIE5OBfNNoxAHStnx0f1w/edit?usp=sharing
Video walkthrough of slideshow + Project Demo In Action: [[https://youtu.be/uNfa967-aRo](https://youtu.be/iLhWfBh2cLk)](https://youtu.be/iLhWfBh2cLk)

Aegis is an advanced AI-powered website that analyzes security camera feeds to identify weapons and depth charts, improving public safety and streamlining threat detection for schools and communities.

Problem: School violence and safety issues (felt firsthand)

Solution: Aegis - using AI to identify weapons

Impact: Making schools and communities safer

To use, go to our website
: https://cac-project-l5nu9.ondigitalocean.app/

YOLOv8

We used YOLOv8 on our modified custom dataset of over 9k images to train our ML model on Google Colab. Experimenting with the accuracy, we managed to achieve an accuracy of 0.93 at 48 epochs before the accuracy appeared to stagnate. 
A little bit about YOLO: YOLOv8 is designed with a strongly modified CSPDarknet backbone, PANet neck for aggregating features at different scales, and a decoupled head. It takes the anchor-free detection approach and predicts object centers and box sizes. The model uses the Feature Pyramid Network (FPN) for multi-scale detections and applies Non-Maximum Suppression (NMS) in post-processing to clean up duplicates from detections. High-performance inference is optimized by YOLOv8 and is trained using a combination of classification, localization, objectness, and IoU losses.

Depth Anything V2

We used the 's' model of Depth Anything V2 (source: https://github.com/DepthAnything/Depth-Anything-V2) in our project. 
A little bit about DAv2: Depth Anything V2 is a foundational model for monocular depth estimation that is better in terms of fine-grained details, more robust, and faster in inferencing with fewer parameters than the previous state of the art and SD-based models while making it ready for deployment across platforms such as Transformers and Apple Core ML.




Contact: 
Kevin - kevinx8017@gmail.com
Aiden - aidenjcheng12@gmail.com

Bio:
Kevin - Incoming 10th grader at WWHS. Was the backend dude for this project. Knows Python Flask, Nodejs w Expressjs. Check out our slideshow for the tech stack we used. Trained a custom YOLOv8 model for this project and integrated Depth Anything V2. 

Aiden - Incoming 10th grader at WWHS too. Frontend dude for this project. Mainly uses React JS with tailwind css. Enjoys design and finding cool css libraries. 
