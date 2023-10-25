import "./projects.css";
import Filter from "./Filter";
import useProjectsStore from "../zustand/store";
import React from "react";

const Projects = () => {
  const projectsElement = React.useRef(null);
  const setActiveNavLink = useProjectsStore((state) => state.setActiveNavLink);
  const scrollPositionY = useProjectsStore((state) => state.scrollPositionY);

  const selectedTags = useProjectsStore((state) => state.selectedTags);
  const projectsToShow = useProjectsStore((state) => state.projectsToShow);
  const applyFilter = useProjectsStore((state) => state.applyFilter);

  React.useEffect(() => {
    applyFilter();
  }, [selectedTags]);
  React.useEffect(() => {
    setActiveNavLink(projectsElement, "projects");
  }, [scrollPositionY]);
  return (
    <section ref={projectsElement} className="projects" id="projects">
      <div className="projects__container container">
        <h3 className="projects__title">Projects</h3>
        <Filter />
        <ul className="projects__list">
          {projectsToShow.map((el, idx) => {
            return (
              <li key={idx} className="projects__item project">
                <div className="project__image">
                  <img
                    src={require("../images/" + el.image)}
                    width="128"
                    alt="racoon"
                  />
                </div>
                <div className="project__info">
                  <h4 className="project__name">{el.name}</h4>
                  <p className="project__description">{el.description}</p>
                  <a className="project__link" href={el.link} target="blank">
                    deploy
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
