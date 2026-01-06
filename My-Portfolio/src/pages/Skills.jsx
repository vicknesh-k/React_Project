import React from 'react'

const Skills = () => {
  return (
    <section className="page fullscreen">
      <h2>Tech Stack</h2>
      <div className="skills">
        <div className="skill-box">
          <h4>Frontend</h4>
          <p>HTML, CSS, JavaScript, React.js</p>
        </div>

        <div className="skill-box">
          <h4>Backend</h4>
          <p>Java (OOP, Collections), Spring Boot, REST APIs
</p>
        </div>

        <div className="skill-box">
          <h4>Database</h4>
          <p>MySQL (Joins, SQL Queries, Constraints)
</p>
        </div>

        <div className="skill-box">
          <h4>Tools</h4>
          <p>Spring MVC, JPA/Hibernate, Maven,
Git, GitHub, VS Code, Eclipse, IntelliJ IDEA</p>
        </div>
      </div>
    </section>
  )
}

export default Skills