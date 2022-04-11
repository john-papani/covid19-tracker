import React from "react";
import photo from "../images/mask-icon-removebg-preview.png";
import gitphoto from "../images/github-logo.png"
import clickhere from "../images/PngItem_5152966.png"
const About = () => {
  return (
    <div className="About">
      <div className="infocovid-about">
        <h2 className="title-covid">Covid-19 General Information</h2>
        <p className="text-covid-about">
          Coronavirus disease (COVID-19) is an infectious disease caused by the
          SARS-CoV-2 virus. Most people who fall sick with COVID-19 will
          experience mild to moderate symptoms and recover without special
          treatment. However, some will become seriously ill and require medical
          attention.
        </p>
        </div>
        <img src={photo} alt="wearmasklogo"></img>


        <footer className="about-footer">
            <a href="www.google.com" >
            <img  src={clickhere} alt="github logo"></img>
                <img src={gitphoto} alt="github logo"></img>
            </a>
        </footer>
      </div>
    
  );
};
export default About;
