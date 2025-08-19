import React from 'react';
import Magnet from './Magnet';
import email from  '../assets/mail-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import github from  '../assets/github-svgrepo-com.svg';
import resume from '../assets/download-svgrepo-com.svg';
import girl from  '../assets/girl.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 vh-100 d-flex flex-column justify-content-center align-items-center contact-bg">
            <div className="contact-card shadow-lg">
              <div className="contact-inner">
                {/* LEFT: Copy + actions */}
                <div className="contact-copy">
                  <h2 className="contact-title">Let&apos;s Connect!</h2>
                  <p className="contact-line">
                    Eager to explore new opportunities.
                  </p>
                  <p className="contact-line">
                    Feel free to reach out to me.
                  </p>

                  <div className="contact-icons">
                    <a href="mailto:madhusreej18@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                      <img src={email} alt="email" className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/madhusree-j-394470169/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <img src={linkedin} alt="LinkedIn" className="icon" />
                    </a>
                    <a href="https://github.com/MadhusreeJ" target="_blank" rel="noreferrer" aria-label="GitHub">
                      <img src={github} alt="GitHub" className="icon small" />
                    </a>
                    <a href="https://drive.google.com/file/d/1apYtmVkznY-ZGSRH_YaegQOlZg3sltjy/view?usp=drive_link" target="_blank" rel="noreferrer" aria-label="Resume">
                      <img src={resume} alt="resume" className="icon mid" />
                    </a>
                  </div>
                  <div className="contact-phone">+91-9790652899</div>
                </div>

                {/* RIGHT: Blob + Girl + Eyes */}
                <div className="contact-visual">
                  <div className="blob" aria-hidden="true"></div>

                  <div className="face-wrap">
                    <Magnet padding={50} disabled={false} magnetStrength={50}>
                      <img src={girl} alt="girl" className="girl-image" />
                    </Magnet>

                    {/* Eyes positioned relative to face-wrap */}
                    <span className="eye eye-left"></span>
                    <span className="eye eye-right"></span>
                  </div>
                </div>
              </div>{/* /contact-inner */}
            </div>{/* /contact-card */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
