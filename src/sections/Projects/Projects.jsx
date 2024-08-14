import React from 'react'
import styles from "./ProjectsStyle.module.css";
import viber from "../../assets/viberr.png";
import ProjectCard from '../../common/ProjectCard';
import freshBurger from "../../assets/fresh-burger.png";
import hisster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
        src={viber} link="#" 
        h3="Viber" 
        p="Streaming App" />
        <ProjectCard 
        src={freshBurger} link="#" 
        h3="Freshburger"  
        p="Hamburger Restaurant" />
        <ProjectCard 
        src={hisster} link="#" 
        h3="Hisster" 
        p="Glasses Shop" />
        <ProjectCard 
        src={fitlift} link="#" 
        h3="Fitlift" 
        p="Fitness App" />
      </div>
    </section>
  );
}

export default Projects