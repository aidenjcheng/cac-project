import Blog from "./blog.jsx";
import React from "react";
import Header from "../header/header.jsx";
import Logo1 from "../svg/logowithbg.jsx";

const Mission = () => {
  return (
    <div className="w-screen">
      <div className="fixed w-full flex justify-center">
        <Header />
      </div>
      <Blog>
        {[
          <Logo1 />,
          "The Process",
          "How It Works",
          "Advanced Video Processing Pipeline",
          <div className="w-full text-secondary ">
            Our cutting-edge video processing application leverages
            state-of-the-art deep learning models and cloud GPU infrastructure
            to perform real-time object detection and depth estimation. Here's
            an overview of the key components and technologies:
            <br />
            <br />
            <strong>Core Technologies</strong>
            <ul>
              <li className="text-secondary li">
                <strong>YOLOv8 Model:</strong> Utilizes the latest iteration of
                the YOLO (You Only Look Once) architecture for real-time object
                detection. YOLOv8 employs a single neural network to divide the
                image into regions and predict bounding boxes and probabilities
                for each region, enabling efficient detection of weapons such as
                pistols and knives.
              </li>
              <li className="text-secondary li">
                <strong>YOLOv8 dataset:</strong> We combined a public dataset
                online with our custom-labeled images (using CVAT) to produce
                the best results.
              </li>
              <li className="text-secondary li">
                <strong>Depth Anything V2 Model:</strong> Implements a Vision
                Transformer (ViT) based architecture for monocular depth
                estimation. This model uses a VITS encoder with 64 features and
                generates multi-scale feature maps, providing high-quality depth
                maps from single RGB images.
              </li>
              <li className="text-secondary li">
                <strong>Flask Framework:</strong> Serves as the backend,
                handling HTTP requests and orchestrating the video processing
                pipeline.
              </li>
              <li className="text-secondary li">
                <strong>CUDA-enabled GPU Acceleration:</strong> Harnesses the
                power of NVIDIA GPUs for parallel processing, significantly
                accelerating both object detection and depth estimation tasks.
              </li>
            </ul>
            <br />
            <strong>Processing Pipeline</strong>
            <ul className="text-secondary">
              <li className="li">
                <strong>Video Ingestion:</strong> The application accepts video
                files through a RESTful API endpoint.
              </li>
              <li className="li">
                <strong>Concurrent Processing:</strong>
                <ul className="list-disc ml-6 text-secondary">
                  <li className="li">
                    YOLOv8 processes frames for weapon detection.
                  </li>
                  <li className="li">
                    Depth Anything V2 generates depth maps simultaneously.
                  </li>
                </ul>
              </li>
              <li className="li">
                <strong>Frame-by-Frame Analysis:</strong>
                <ul className="list-disc ml-6 text-secondary">
                  <li className="li">
                    Object detection is performed on every frame.
                  </li>
                  <li className="li">
                    Depth estimation is conducted on every other frame to
                    balance performance and accuracy.
                  </li>
                </ul>
              </li>
              <li className="li">
                <strong>Output Generation:</strong>
                <ul className="list-disc ml-6 text-secondary ">
                  <li className="li">
                    Annotated video with bounding boxes for detected weapons.
                  </li>
                  <li className="li">
                    Depth map video using a spectral color scheme.
                  </li>
                  <li className="li">
                    JSON file containing detection timestamps and statistics.
                  </li>
                </ul>
              </li>
            </ul>
            <br />
            <strong>Deployment Architecture</strong>
            <ul>
              <li className="li">
                <div>
                  <strong>Containerization:</strong> Utilizes Docker for
                  consistent environment management and easy deployment.
                </div>
              </li>
              <li className="li">
                <div>
                  <strong>Cloud GPU Infrastructure:</strong> Deployed on
                  Paperspace, leveraging cloud GPUs for enhanced processing
                  capabilities.
                </div>
              </li>
              <li className="li">
                <div>
                  <strong>Asynchronous Processing:</strong> Employs Python's
                  concurrent.futures for parallel execution of YOLOv8 and Depth
                  Anything V2 models.
                </div>
              </li>
            </ul>
            <br />
            <strong>Performance Optimizations</strong>
            <ul className="list-disc pl-6">
              <li className="li">
                Implements frame skipping for depth estimation to balance
                processing speed and output quality.
              </li>
              <li className="li">
                Utilizes memory-efficient processing by handling video in
                chunks.
              </li>
              <li className="li">
                Incorporates progress bars using tqdm for real-time processing
                feedback.
              </li>
            </ul>
            <br />
            <br />
            This sophisticated pipeline demonstrates the synergy between
            advanced deep learning models, efficient video processing
            techniques, and scalable cloud infrastructure, providing a powerful
            solution for video analysis and weapon detection.
          </div>,
        ]}
      </Blog>
    </div>
  );
};
export default Mission;
