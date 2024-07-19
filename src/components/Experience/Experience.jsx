import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className='exp-container'>
      <h1 className="section-heading2 mb75px">
        <span>
          <i className="fa-solid fa-graduation-cap fa-1x"></i>
        </span>
        <span>Experience </span>
      </h1>

      <div className="timeline">
        <div className="timeline-box">
          <div className="timeline-details1">
            <h5 className="timeline-heading">Bharat Intern</h5>
            <p className="timeline-para">Web Development</p>
            <p className="timeline-para2">Oct 2023 - Nov 2023</p>
          </div>
          <p className="timeline-para3">🌡️ This Virtual internship included two projects: one was a temperature converter (Celsius to Fahrenheit and vice versa), and the other was a Netflix home page clone. Tech stack: HTML, CSS, and JS. 🎥</p>
        </div>
        <div className="timeline-box">
          <div className="timeline-details2">
            <h5 className="timeline-heading">AWS Internship</h5>
            <p className="timeline-para">Machine Learning</p>
            <p className="timeline-para2">Sep 2023 - Nov 2023</p>
          </div>
          <p className="timeline-para3">🤖 This Virtual Internship delved into the deep concepts of machine learning, artificial intelligence, and cloud computing. The tech stack used was Python and ML. 📊</p>
        </div>
        <div className="timeline-box">
          <div className="timeline-details1">
            <h5 className="timeline-heading">CMI Workshop</h5>
            <p className="timeline-para">Machine Learning</p>
            <p className="timeline-para2">Jul 2023 - Aug 2023</p>
          </div>
          <p className="timeline-para3">🧮 A 5-day ML workshop at Chennai Mathematical Institute in Chennai. Learned many ML concepts and the mathematics behind them, such as 3D geometry and vector spaces. Worked on a project involving training a machine with images and performing vectorization to generate all trained images. 🖼️</p>
        </div>

        <div className="timeline-divider">
          <div className="timeline-traveller">
            <i className="fa-solid fa-bicycle fa-2x"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
