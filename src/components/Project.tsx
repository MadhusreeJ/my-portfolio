import React from 'react'
import myself from '../assets/myself.png'

const Project = () => {
  return (
    <section id="projects">
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-12' style={{backgroundColor:'rgb(255, 246, 227)'}}>
 <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title-projects">Projects</h2>
          </div>
        </div>
        <div className='row' style={{marginBottom:'3rem'}}>
          <div className='col-lg-4'>
           <h4 style={{textAlign:'center'}}>Full Satck</h4>
          </div>
          <div className='col-lg-2'>
            <hr style={{height:'5px', backgroundColor:'black'}}></hr>
          </div>
          <div className='col-lg-6'>
<h3 className='text-justify' style={{marginLeft:50}}>
  ONLINE ASSESSMENT PLATFORM
</h3>
<p className='text-justify' style={{marginLeft:50}}>
  This is a full stack project that I built using React, Node.js, Express.js and MongoDB.
I developed an online exam platform where students can take assessments with mandatory screen sharing to ensure integrity. 
The platform saves videos of each exam, which can be reviewed by the admin.

Admins can create, update, and delete exams, while students can track their progress through interactive graphs. 
Both students and admins can compare performance across subjects and with other students.
  </p>
 <a
  href="https://online-exam-assessment.netlify.app/"
  target="_blank"
 style={{textDecoration:'none', color:'black', fontWeight:'bold', textAlign:'center',marginLeft:50}}>
  View Project -{'>'}
</a> <br/>
<a
  href="https://github.com/MadhusreeJ/online-assessment-platform-FE"
  target="_blank"
 style={{textDecoration:'none', color:'black', fontWeight:'bold', textAlign:'center',marginLeft:50}}>
  Frontend Source Code -{'>'}
</a> <br/>
<a
  href="https://github.com/MadhusreeJ/online-assessment-platform-BE"
  target="_blank"
 style={{textDecoration:'none', color:'black', fontWeight:'bold', textAlign:'center',marginLeft:50}}>
  Backend Source Code -{'>'}
</a>
          </div>
        </div>
                <div className='row' style={{marginBottom:'3rem'}}>
          <div className='col-lg-4'>
           <h4 style={{textAlign:'center'}}>Frontend</h4>
          </div>
          <div className='col-lg-2'>
            <hr style={{height:'5px', backgroundColor:'black'}}></hr>
          </div>
          <div className='col-lg-6'>
<h3 className="text-justify" style={{marginLeft:50}}>
  STUDENT MANAGEMENT APPLICATION
</h3>
<p className='text-justify' style={{marginLeft:50}}>
  Developed a Student Management Application using React and Axios for CRUD operations on student data. 
  Integrated a mock API for simulating database interactions. Designed a responsive UI for adding, editing, and deleting 
  student records.
  </p>
 <a
  href="https://zingy-strudel-554ef6.netlify.app/"
  target="_blank"
 style={{textDecoration:'none', color:'black', fontWeight:'bold', textAlign:'center',marginLeft:50}}>
  View Project -{'>'}
</a> <br/>
<a
  href="https://github.com/MadhusreeJ/react-axios-task"
  target="_blank"
 style={{textDecoration:'none', color:'black', fontWeight:'bold', textAlign:'center',marginLeft:50}}>
  Source Code -{'>'}
</a>
          </div>
        </div>
        <div className='row' style={{marginBottom:'3rem'}}>
          <div className='col-lg-4'>
           <h4 style={{textAlign:'center'}}>Backend</h4>
          </div>
          <div className='col-lg-2'>
            <hr style={{height:'5px', backgroundColor:'black'}}></hr>
          </div>
          <div className='col-lg-6'>
<h3 className="text-justify" style={{marginLeft:50}}>
  MENTORSHIP MANAGEMENT SYSTEM
</h3>
<p className='text-justify' style={{marginLeft:50}}>
 Designed and developed RESTful APIs to manage a mentorship system, enabling the assignment of students to mentors, along with features
  like adding new mentors and students, validation, error handling, and bulk assignments.
  Built using Node.js and utilized MongoDB for efficient data storage and tracking mentor-student relationships.
  </p>
 <a
  href="https://comforting-torrone-295aa6.netlify.app/"
  target="_blank"
 style={{textDecoration:'none', color:'black', fontWeight:'bold', textAlign:'center',marginLeft:50}}>
  View Project -{'>'}
</a> <br/>
<a
  href="https://github.com/MadhusreeJ/assign-mentor-frontend"
  target="_blank"
 style={{textDecoration:'none', color:'black', fontWeight:'bold', textAlign:'center',marginLeft:50}}>
  Frontend Source Code -{'>'}
</a> <br/>
<a
  href="https://github.com/MadhusreeJ/assign-mentor-BE"
  target="_blank"
 style={{textDecoration:'none', color:'black', fontWeight:'bold', textAlign:'center',marginLeft:50}}>
  Backend Source Code -{'>'}
</a>
          </div>
        </div>
        </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Project