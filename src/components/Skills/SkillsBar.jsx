import React from 'react';
import './SkillsBar.css';

const SkillsBar = ({ skill, level }) => {
  const getColor = (level) => {
    if (level >= 85) {
      return '#4caf50';
    } else if (level >= 75) {
      return '#ffa500';
    } else {
      return '#f44336';
    }
  };

  return (
    <div className='skills-items'>
        <div className="skill-name">{skill}</div>
            <div className="skill-bar">
                <div className="skill-level" style={{ width: `${level}%`, backgroundColor: getColor(level) }}>
                <div className='skill-value'>{level}%</div>
            </div>
        </div>
    </div>
  );
};
export default SkillsBar