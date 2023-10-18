import "./filter.css";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import useProjectsStore from "../zustand/store";

const Filter = () => {
  const ref = useRef();
  const { events } = useDraggable(ref); //
  const tags = [
    "All",
    "HTML/CSS",
    "vanilla js",
    "react.js",
    "redux",
    "landing page",
    "game",
    "responsive",
    "angular",
    "api",
  ];
  const addTag = useProjectsStore((state) => state.addTag);
  const removeTag = useProjectsStore((state) => state.removeTag);
  const selectedTags = useProjectsStore((state) => state.selectedTags);
  function onChangeHandler(e) {
    const tag = e.target;
    if (tag) {
      if (!tag.checked) {
        removeTag(tag.value);
      } else {
        addTag(tag.value);
      }
    }
  }

  return (
    <div className="projects__filter filter ">
      <div className="filter__wrapper">
        <ul className="filter__list" {...events} ref={ref}>
          {tags.map((el, idx) => {
            return (
              <li key={idx} className="filter__item">
                <label htmlFor={"checkbox" + (idx + 1)}>
                  <input
                    id={"checkbox" + (idx + 1)}
                    type="checkbox"
                    value={el}
                    // defaultChecked={el === "All"}
                    checked={selectedTags.includes(el) ? true : false}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                  />
                  <span>{el}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
