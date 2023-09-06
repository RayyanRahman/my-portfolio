import React from "react";
// import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/rr2.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>
        <a href="#about">About Me</a>
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article> */}
            <a href="#projects">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>10+ Completed Projects</small>
              </article>
            </a>
          </div>
          <p>
            Hi there! I have experience with both front-end and back-end
            development. I enjoy working with HTML, CSS, JavaScript, and
            frameworks like React on the front-end, while also diving into
            server-side languages like Node.js to develop robust back-end
            systems. I'm open to new ideas, perspectives, opportunities and I'm
            always looking to learn as well as improve my skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
