import React from "react";
import "./about.css";
import useProjectsStore from "../zustand/store";
const About = () => {
  const aboutElement = React.useRef(null);
  const setActiveNavLink = useProjectsStore((state) => state.setActiveNavLink);
  const scrollPositionY = useProjectsStore((state) => state.scrollPositionY);

  React.useEffect(() => {
    if (aboutElement) setActiveNavLink(aboutElement, "about");
  }, [scrollPositionY]);

  return (
    <>
      <section ref={aboutElement} className="about-me" id="about">
        <div className="about-me__container container">
          <h3 className="about-me__title">ABOUT ME</h3>
          <div className="about-me__content">
            <div className="about-me__image">
              <img
                src={require("../images/main-image.png")}
                alt="software engineer"
              />
            </div>
            <div className="about-me__text">
              <div className="about-me__top">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h4 className="about-me__greetings">{"Hi! :)"}</h4>
              <p className="about-me__info">
                "👋 I'm Bohdan, and I'm on an exciting journey to become a
                proficient front-end developer. My educational background
                includes a degree in computer engineering, which provided me
                with a solid understanding of programming fundamentals and
                problem-solving techniques." <br />
                <br />
                While I may not have extensive experience, I am eager to apply
                my knowledge and skills to real-world projects. I believe that
                one of the most valuable qualities I bring to the table is my
                unwavering dedication to continuous learning.
                <br /> <br />I am constantly seeking opportunities to enhance my
                skills, whether through online courses, coding challenges, or
                collaborating with experienced developers. I am also a firm
                believer in the significance of teamwork and open communication
                in the development process. Thank you 💜"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
