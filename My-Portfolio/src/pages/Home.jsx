import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="page fullscreen home">
      <h1 className="name">Vicknesh K</h1>

      <h2 className="role">Java Full-Stack Developer</h2>

      <p className="stack">React • Spring Boot • MySQL</p>

      <p className="intro">
        I build production-style full-stack web applications with clean UI,
        secure REST APIs, and proper database design.
      </p>

      <div className="home-actions">
        <Link to="/projects" className="btn">
          View Projects
        </Link>

        <a
          href="/resume.pdf"
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
