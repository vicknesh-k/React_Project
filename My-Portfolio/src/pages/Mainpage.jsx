import {useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Mainpage() {
  const location = useLocation();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const map = {
      "/": homeRef,
      "/about": aboutRef,
      "/skills": skillsRef,
      "/projects": projectsRef,
      "/contact": contactRef,
    };

    const section = map[location.pathname];
    section?.current?.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <>
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default Mainpage;

