import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import React from "react";

function App() {
  function checkVisiters() {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((res) => {
        const url = "https://test-server-eosin-rho.vercel.app";
        console.log(res);
        fetch(url, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(res),
        });
      });
  }
  React.useEffect(checkVisiters, []);
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
