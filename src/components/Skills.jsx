import React from "react";
import useProjectsStore from "../zustand/store";
import { Icon } from "@iconify/react";
import "./skills.css";
const Skills = () => {
  const skillsElement = React.useRef(null);
  const setActiveNavLink = useProjectsStore((state) => state.setActiveNavLink);
  const scrollPositionY = useProjectsStore((state) => state.scrollPositionY);

  React.useEffect(() => {
    setActiveNavLink(skillsElement, "skills");
  }, [scrollPositionY]);
  return (
    <section ref={skillsElement} className="skills" id="skills">
      <h3 className="skills__title">Skills</h3>
      <ul className="skills__list">
        <li className="skills__item">
          <Icon
            icon="akar-icons:html-fill"
            color="white"
            width="40"
            height="40"
          />
          <p className="skills__capture">HTML 5</p>
        </li>
        <li className="skills__item">
          <Icon
            icon="akar-icons:css-fill"
            color="white"
            width="40"
            height="40"
          />
          <p className="skills__capture">CSS 3</p>
        </li>
        <li className="skills__item">
          <Icon
            icon="ri:javascript-fill"
            color="white"
            width="40"
            height="40"
          />
          <p className="skills__capture">JavaScript</p>
        </li>
        <li className="skills__item">
          <Icon
            icon="teenyicons:react-outline"
            color="white"
            width="40"
            height="40"
          />
          <p className="skills__capture">React.js</p>
        </li>
        <li className="skills__item">
          <Icon
            icon="akar-icons:redux-fill"
            color="white"
            width="40"
            height="40"
          />
          <p className="skills__capture">Redux</p>
        </li>
        <li className="skills__item">
          <Icon
            icon="mingcute:figma-line"
            color="white"
            width="40"
            height="40"
          />
          <p className="skills__capture">Figma</p>
        </li>
        <li className="skills__item">
          <Icon icon="ion:logo-sass" color="white" width="40" height="40" />
          <p className="skills__capture">Sass</p>
        </li>
      </ul>
    </section>
  );
};
export default Skills;
