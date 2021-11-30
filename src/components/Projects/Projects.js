import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import shredder from "../../Assets/Projects/shredder.png";
import spam from "../../Assets/Projects/spam.png";
import house from "../../Assets/Projects/house.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import face from "../../Assets/Projects/face.jpg";
import flight from "../../Assets/Projects/flight.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="This project deals with the implementation of a real-time chat group based on socket programming. The chat group is based on a client-server model.
              The Implementation of the application was based on a new but effective set up of socket, CSS, HTML, etc. where socket programming was for the app structure."
              link="https://github.com/iamharsh1312/Real-Time-Chat-application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shredder}
              isBlog={false}
              title="Shredder Machine Hand Detection"
              description="The main aim of this project is to avoid the accidents in shredding ( Waste Recycling Industry) . The Basic function of this project is to draw the virtual safety line ( Blue & Red ) as per the Safety Guidelines as well as Considering the Orientation of Machineand Continiosly detect the Hand of Worker as the Hand Crosses the Safety line , Alarm Will raise and Machine will Turned OFF with the Help of Relay & Electrical Circuit."
              link="https://github.com/iamharsh1312/Shredder-Machine-Project/tree/master"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Fare Prediction System"
              description="Created a web application in which users will get the price of the flight of different airlines company based on their date of journey,Source and destination etc.Used Hyperparameter tuning technique and found out the Random forest (82 % accuracy) machine-learning algorithm giving the best accuracy to predict the prices of the flight."
              link="https://github.com/iamharsh1312/Flight-Fare-Prediction-System"
            />
            </Col>
        

     

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Mask detection"
              description="Using python libraries namely Tensorflow, Keras and OpenCV. The
              model used is the MobileNetV2 of convolutional neural
              network to classify whether the person is wearning mask or not and FaceNet model is used to extract high-quality features from faces, called face embeddings, that can then be used to train a face identification system  "
              link="https://github.com/iamharsh1312/Face-mask-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spam}
              isBlog={false}
              title="Spam Classifier"
              description="Made a Spam Clasifier web application by Extracting the features of the test using TF-IDF vectorizer for the Input features.Splitted the skewed data into shuffled sets using stratified shuffle split in sklearn library & applied Naive Baye's Classifier to classify the data into spam or ham.HTML,CSS & Flask is used."
              link="https://github.com/iamharsh1312/Spam-Classifier"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="Bengaluru House Price Prediction"
              description="Created a web app using Linear Regression (82% accuracy)
              machine learning algorithms to predict the prices of the houses in
              Bangalore based on their locations, no. rooms etc.
              Used HTML, CSS, Javascript and Flask for the web app."
              link="https://github.com/iamharsh1312/House-price-prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
