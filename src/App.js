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
    const url = "https://test-server-eosin-rho.vercel.app";
    fetch(url);
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
