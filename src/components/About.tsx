import React from 'react';
import shelf from '../assets/shelf.png';
import desktop from '../assets/desktop.png';
import bulb from '../assets/bulb.png';
import SplitText from './SplitText';

const About = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section id="about">
      <div className="container-fluid">
        <div className="row overflow-hidden">
          {/* Left visual column */}
          <div className="col-12 col-lg-5 about-left position-relative min-vh-100">
            <img src={bulb} alt="bulb"
                 className="position-absolute img-fluid about-bulb" />
            <img src={shelf} alt="shelf"
                 className="position-absolute img-fluid about-shelf" />
            <img src={desktop} alt="desktop"
                 className="img-fluid about-desktop" />
          </div>

          {/* Right content column */}
          <div className="col-12 col-lg-7 about-right d-flex align-items-center justify-content-center min-vh-100">
            <div className="about-card shadow-lg rounded-5 border border-4">
              <SplitText
                text={`Hi, I'm Madhu!👋 
I used to be the super hero fixing everyone's tech problems as an Application Support Engineer. 
Now, I've decided to upgrade my powers and become a Full Stack Developer - basically, I'm building the stuff I used to fix.`}
                className="about-text text-center fw-semibold m-0"
                delay={20}
                duration={0.4}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
