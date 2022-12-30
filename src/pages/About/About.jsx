import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Developer</h2>
            <p className='fs-17'>I am self-motivated, ambitious, and enthusiastic web designer and developer with highly interested in JavaScript, HTML5, CSS3, Bootstrap, SAAS and front-end web development with modern web tech like React.js , . to work in the software industry with modern web technologies of different local and multinational software/IT agencies and grow rapidly with increasing skills and responsibilities.</p>
            <p className='fs-17'>--------------------------------------------------------------------------------------------------------------------------</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
