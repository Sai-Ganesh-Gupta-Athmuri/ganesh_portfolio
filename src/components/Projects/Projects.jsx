import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';

const Projects = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projectData = [
    {
      imgSrc: './assets/images/Netflix-home-page.png',
      imgAlt: 'Netflix Home Page',
      description: [
        '🎥 This project involves creating a Netflix home page clone.',
        'The page is designed with a sleek, user-friendly interface that includes movie previews, trending sections, and a dynamic search bar.',
        'Tech stack: HTML, CSS, JS. 🎬',
      ],
    },
    {
      imgSrc: './assets/images/AptiLogicPro.png',
      imgAlt: 'AptiLogicPro',
      description: [
        '📚 This project mainly concentrates on aptitude and reasoning.',
        'It is helpful for those who are preparing for interviews and need to clear their aptitude round.',
        'Tech stack used: React, HTML, CSS, JS, Node, MongoDB. 🧠',
      ],
    },
    {
      imgSrc: './assets/images/my_portfolio.png',
      imgAlt: 'My Portfolio',
      description: [
        '🌐 This project is my personal responsive portfolio which contains a detailed description of my skills, education, experience, projects, etc.',
        'A lot of styling and animations are implemented in this.',
        'Tech stack used: React, HTML, CSS, JS. 🎨',
      ],
    },
    {
      imgSrc: './assets/images/dbthon.jpg',
      imgAlt: 'DBThon',
      description: [
        '🏆 This achievement is about the first prize I won in DBThon (Database Hackathon) at our campus.',
        'There were two rounds: the first round was an MCQ round with 20 medium-level questions on DBMS and SQL concepts, and the final round involved solving queries based on a case study.',
        
      ],
    },
    {
      imgSrc: './assets/images/srkr.jpg',
      imgAlt: 'SRKR College Fest',
      description: [
        '🎉 This achievement is about receiving 3 prizes in SRKR College\'s Annual Fest.I secured 1st place in TechnoThrove, an event conducted as an Android application quiz.',
        'I also secured two 2nd prizes in CodeCraft and TechnoFleet, which consisted of solving 5 coding questions, of which I solved 4 and debugging questions.',
      ],
    },
    {
      imgSrc: './assets/images/annual_day.jpg',
      imgAlt: 'Annual Day',
      description: [
        '🥇 This achievement is about securing a gold medal for the highest overall aggregate grade in my branch with a CGPA of 9.55 at the end of my 2nd year.',
        'I also secured 2nd place for academic excellence in my 2nd year.',
        'I was very honored to receive these awards on Annual Day. 🎓',
      ],
    },
  ];

  const slideRight = () =>{
    sliderRef.current.slickNext();
  };

  const slideLeft = () =>{
    sliderRef.current.slickPrev();
  };

  return (
    <section id='project-container'>
      <h1 className="heading" id='heading'>
        <span>
          <i className="fas fa-th-list fa-1x"></i>
        </span>
        <span>Projects</span><span> & </span>
        <span>
          <i className="fa-solid fa-medal"></i>
        </span>
        <span>Achievements</span>
      </h1>
      <div className="projects-main-container">
        <div className='arrow-right' onClick={slideRight}>
          <span class='material-symbols-outlined'>chevron_right</span>
        </div>
        <div className='arrow-left' onClick={slideLeft}>
          <span class='material-symbols-outlined'>chevron_left</span>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {projectData.map((project, index) => (
            <div className='project-content' key={index}>
              <div className='project-img'>
                <img src={project.imgSrc} alt={project.imgAlt} />
              </div>
              <div className='project-description'>
                {project.description.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
