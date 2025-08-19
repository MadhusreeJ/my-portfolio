import React from 'react'
import { Code2, Server, Database, Zap, Terminal } from 'lucide-react';
import myself from '../assets/myself.png';

const skills = [
  {
    name: 'React',
    icon: Code2,
    description: 'Built cool UI stuff with React – from interactive forms to dashboards. Basically turned boring data into something people actually want to click on. 🚀',
    className: 'react-card',
    url : "https://github.com/MadhusreeJ/react-router-guvi-task"
  },
  {
    name: 'JavaScript',
    icon: Zap,
    description: 'Wrote a bunch of JS to make the web less static and more fun. DOM manipulation, event handling, and all that jazz – the usual “make it alive” magic. ✨',
    className: 'javascript-card',
    url:"https://github.com/MadhusreeJ/weather-forecast"
  },
  {
    name: 'Node.js',
    icon: Server,
    description: 'Used Node.js to handle the backend hustle – APIs, server logic and making sure things don’t break when too many people show up at once. ⚡',
    className: 'node-card',
    url:"https://github.com/MadhusreeJ/file-system-task-nodeJs"
  },
  {
    name: 'Express',
    icon: Terminal,
    description: 'Built routes, handled requests, and served data like a waiter with attitude. Express makes backend work way less messy. 🍔➡️💻',
    className: 'express-card',
    url:"https://github.com/MadhusreeJ/hall-booking-api"
  },
  {
    name: 'MongoDB',
    icon: Database,
    description: 'Stored all the important stuff in MongoDB – users, tasks, even random test data. Basically, if it needed saving, Mongo was my vault. 📦',
    className: 'mongodb-card',
    url : "https://github.com/MadhusreeJ/zen-class-DB-model-sql"
  },
];

const Skills = () => {
    
  return (
     <section id="skills">
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12' style={{backgroundColor:'rgb(205, 193, 255)'}}>
                <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Skills</h2>
          </div>
        </div>
        
        <div className="row g-4" style={{marginBottom:'3rem'}}>
          {skills.map((skill, index) => (
            <div key={skill.name} className="col-lg-4 col-md-6 col-12">
              <div className={`skill-card ${skill.className}`} onClick={() => window.open(skill.url, '_blank')}>
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            </div>
          ))}
          <div className="col-lg-4 col-md-6 col-12 my-img">
    <div className="skill-card">
      <div className="skill-icon">
        <img
          src={myself}   // put your image path here
          alt="My Profile"
          style={{ width: "320px", height: "300px"
          }}
          
        />
      </div>
    </div>
  </div>
        </div>

        
      </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Skills