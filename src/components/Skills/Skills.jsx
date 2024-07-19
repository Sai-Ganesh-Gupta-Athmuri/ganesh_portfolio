import React from 'react';
import './Skills.css';
import SkillsBar from './SkillsBar.jsx';

const Skills = () => {
  const skills = [
    { skill: 'Java', level: 90 },
    { skill: 'Python', level: 80 },
    { skill: 'C', level: 80 },
    { skill: 'ReactJs', level: 70 },
    { skill: 'HTML', level: 95 },
    { skill: 'CSS', level: 90 },
    { skill: 'JavaScript', level: 70 },
    { skill: 'NodeJs', level: 65 },
    { skill: 'MongoDB', level: 75 },
    { skill: 'SQL', level: 80 },
    { skill: 'SnowFlake', level: 70 },
    { skill: 'Tableau', level: 75 },
    { skill: 'Git', level: 60 },
    { skill: 'GitHub', level: 65 },
    { skill: 'ML', level: 80 },
  ];

  return (
    <section id='skills-content' className='skills-content'>
      <div id="header">
        <h2 id='heading3'>
          <span>
              <i class="fas fa-chalkboard-teacher"></i>
          </span>
          <span> Skills </span>
        </h2>
      </div>
      <div className="skills-container" id='skills-container'>
        {skills.map((skill, index) => (
          <div className="skills-list" key={index}>
            <div className="skills-list-inner">
              <div className="skills-list-front">
                <img className="icons" src={`./assets/images/${skill.skill.toLowerCase()}.png`} alt={skill.skill} />
              </div>
              <div className="skills-list-back">
                <SkillsBar skill={skill.skill} level={skill.level} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
