import React from "react";
import Typewriter from "typewriter-effect";
import "./header.css";
import useProjectsStore from "../zustand/store";
const Header = () => {
  const menuItems = ["home", "about", "projects", "skills", "education"];

  const headerElement = React.useRef(null);
  const activeNavLink = useProjectsStore((state) => state.activeNavLink);
  const setActiveNavLink = useProjectsStore((state) => state.setActiveNavLink);
  const scrollPositionY = useProjectsStore((state) => state.scrollPositionY);

  const [burgerActive, setBurgerActive] = React.useState(false);
  // function onMenuClickHandler(link) {
  //   setActiveNavLink(link);
  // }
  function onBurgerClickHandler() {
    setBurgerActive((prev) => !prev);
  }
  React.useEffect(() => {
    setActiveNavLink(headerElement, "home");
  }, [scrollPositionY]);
  React.useEffect(() => {
    if (burgerActive) document.body.classList.add("locked");
    else document.body.classList.remove("locked");
  }, [burgerActive]);
  return (
    <>
      <header ref={headerElement} className="header" id="home">
        <div className="header__container container">
          <div
            className={
              burgerActive
                ? "header__burger burger burger_active"
                : "header__burger burger"
            }
          >
            <button className="burger__btn" onClick={onBurgerClickHandler}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <nav
            className={
              burgerActive
                ? "header__menu menu menu_visible"
                : "header__menu menu"
            }
          >
            <ul className="menu__list">
              {menuItems.map((el, idx) => {
                return (
                  <li
                    key={idx}
                    className={
                      activeNavLink === el
                        ? "menu__item  menu__item_active"
                        : "menu__item"
                    }
                    onClick={() => {
                      // onMenuClickHandler(el);
                    }}
                  >
                    <a
                      href={"#" + el}
                      className="menu__link"
                      onClick={() => {
                        if (burgerActive) setBurgerActive((prev) => false);
                      }}
                    >
                      {el}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="header__link">
            <a
              href="https://github.com/BohdanPanchenko"
              aria-label="View source on GitHub"
              target="blank"
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 250 250"
                style={{
                  fill: "#151513",
                  color: "#fff",
                  position: "absolute",
                  top: 0,
                  border: 0,
                  left: 0,
                  transform: "scale(-1, 1)",
                }}
                aria-hidden="true"
              >
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                <path
                  d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                  fill="currentColor"
                  className="octo-arm"
                  style={{ transformOrigin: " 130px 106px" }}
                ></path>
                <path
                  d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                  fill="currentColor"
                  className="octo-body"
                ></path>
              </svg>
            </a>
          </div>
          <div className="header__content">
            <div className="header__image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="132px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
                style={{ transform: "rotate(360deg)" }}
              >
                <path
                  fill="currentColor"
                  d="M5 6v13.563l-2.281 2.314A2.444 2.444 0 0 0 2 23.594A2.418 2.418 0 0 0 4.406 26h23.188A2.418 2.418 0 0 0 30 23.594a2.45 2.45 0 0 0-.719-1.719L27 19.562V6H5zm2 2h18v11H7V8zm9 1l-1.5 9H16l1.5-9H16zm-3.914 2l-1.719 2.068L10 13.5l.367.432L12.086 16l1.086-.863L11.81 13.5l1.36-1.637L12.087 11zm7.828 0l-1.086.863L20.19 13.5l-1.36 1.637l1.085.863l1.719-2.068L22 13.5l-.367-.432L19.914 11zM6.437 21h19.125l2.313 2.281a.464.464 0 0 1 .125.313a.386.386 0 0 1-.406.406H4.406A.386.386 0 0 1 4 23.594c0-.11.047-.234.125-.313L6.438 21z"
                ></path>
              </svg>
            </div>
            <div className="header__info">
              <h1 className="header__name">Bohdan Panchenko</h1>

              <div className="header__description">
                <Typewriter
                  options={{
                    strings: ["Hello!", "I am a front-end developer!"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="header__action">
            <a className="header__button" href="#about">
              <svg
                stroke="#fff"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
