import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import React from "react";
import useProjectsStore from "./zustand/store";

function App() {
  const intervalId = React.useRef();
  const [activeNavLink, setActiveNavLink] = React.useState("home");
  const setScrollPositionY = useProjectsStore((state) => state.setPositionY);
  const [ticking, setTicking] = React.useState(false);
  function checkVisiters() {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((res) => {
        const url = "https://test-server-eosin-rho.vercel.app";
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(res),
        });
      });
  }
  function onScrollHandler() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrollPositionY(window.scrollY);
        setTicking((prev) => false);
      });

      setTicking((prev) => true);
    }
  }
  function checkScrollPosition() {
    intervalId.current = setInterval(() => {
      setScrollPositionY(window.scrollY);
    }, 200);
  }
  React.useEffect(() => {
    checkVisiters();
    checkScrollPosition();
    console.log("Component did mount");
    // document.addEventListener("scroll", onScrollHandler);

    return () => {
      console.log("Component will unmount");
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
