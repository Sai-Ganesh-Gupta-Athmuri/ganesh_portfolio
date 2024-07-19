import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className='edu-container'>
      <h1 className="section-heading3 mb75px">
        <span>
          <i className="fa-solid fa-graduation-cap fa-1x"></i>
        </span>
        <span>Education </span>
      </h1>

      <div className="timeline">
        <div className="timeline-box">
          <div className="timeline-details1">
            <h5 className="timeline-heading">10<sup>th</sup> Standard</h5>
            <p className="timeline-para">Durga Prasad School</p>
            <p className="timeline-para2">Jun 2018 - Apr 2019</p>
          </div>
          <p className="timeline-para3">🎓 Studied my 10th standard in Kakinada. I was honored with academic excellence in my 10th standard and secured 10.0 Grade points💪 in my public examinations 🌟.</p>
        </div>
        <div className="timeline-box">
          <div className="timeline-details2">
            <h5 className="timeline-heading">Intermediate</h5>
            <p className="timeline-para">Aditya Junior College</p>
            <p className="timeline-para2">May 2019 - Mar 2021</p>
          </div>
          <p className="timeline-para3">📘 Studied my +1 and +2 in Kakinada too. I was good in maths in my intermediate💪. I secured 86 percentile in JEE Mains and 78 marks with 7198 rank in EAMCET 📊.</p>
        </div>
        <div className="timeline-box">
          <div className="timeline-details1">
            <h5 className="timeline-heading">Bachelor Of Technology</h5>
            <p className="timeline-para">Vishnu Institute Of Technology</p>
            <p className="timeline-para2">Jun 2021 - Mar 2025</p>
          </div>
          <p className="timeline-para3">🎓 Currently pursuing my B.Tech in Bhimavaram. Honored with academic excellence in 2nd year of my B.Tech and maintaining a current CGPA of 9.5 🏆💪.</p>
        </div>

        <div className="timeline-divider1">
          <div className="timeline-traveller">
            <i className="fa-solid fa-plane fa-2x"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
