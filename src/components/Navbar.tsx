import React, { useEffect, useState } from 'react'

function Navbar() {
    const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3,
        rootMargin: "-80px 0px 0px 0px"
       } // 60% of section in view
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

    return (
        <nav className="navbar fixed-top shadow-sm"  style={{backgroundColor:'rgb(241, 240, 232)'}}>
            <div className="container-fluid d-flex">
                <span className="navbar-brand mb-0 h1 arizonia-regular">Madhusree</span>
                <div>
                    <ul className="nav nav-underline">
      <li className="nav-item">
        <a className={`nav-link markazi-text-regular ${active === "about" ? "active" : ""}` } href="#about" style={{color:'rgb(62, 189, 243)'}}>About</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link markazi-text-regular ${active === "skills" ? "active" : ""}`} href="#skills" style={{color:'rgb(62, 189, 243)'}}>Skills</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link markazi-text-regular ${active === "projects" ? "active" : ""}`} href="#projects" style={{color:'rgb(62, 189, 243)'}}>Projects</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link markazi-text-regular ${active === "contact" ? "active" : ""}`} href="#contact" style={{color:'rgb(62, 189, 243)'}}>Contact</a>
      </li>
    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar