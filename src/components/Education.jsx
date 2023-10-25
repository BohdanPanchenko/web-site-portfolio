import React from "react";
import useProjectsStore from "../zustand/store";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import nixLogo from "../icons/logo-nix.svg";
import universityLogo from "../icons/university-logo.jpg";
import "./education.css";
const Education = () => {
  const educationElement = React.useRef(null);
  const setActiveNavLink = useProjectsStore((state) => state.setActiveNavLink);
  const scrollPositionY = useProjectsStore((state) => state.scrollPositionY);

  React.useEffect(() => {
    setActiveNavLink(educationElement, "education");
  }, [scrollPositionY]);
  return (
    <section ref={educationElement} className="education" id="education">
      <div className="education__container container">
        <h3 className="education__title">Education</h3>
        <VerticalTimeline className="education__list">
          <VerticalTimelineElement
            className="vertical-timeline-element--work education__item "
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2013-2017"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            intersectionObserverProps={{ triggerOnce: false, threshold: 0.1 }}
          >
            <img className="education__item-logo" src={universityLogo} />
            <h3 className="vertical-timeline-element-title">
              Kremenchuk Mykhailo Ostrohradskyi National University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Computer engineering.
            </h4>
            <p>Bachelor's degree</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work education__item "
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="September 2022 - January 2023 "
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            intersectionObserverProps={{ triggerOnce: false }}
          >
            <img className="education__item-logo" src={nixLogo} />
            <h3 className="vertical-timeline-element-title">Nix-solutions</h3>
            <h4 className="vertical-timeline-element-subtitle">Online</h4>
            <p>Front-end course</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work education__item "
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            intersectionObserverProps={{ triggerOnce: false }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};
export default Education;
