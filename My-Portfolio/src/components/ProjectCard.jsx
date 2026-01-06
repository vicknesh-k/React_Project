function ProjectCard({ title, tech, desc, link  }){


    const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

    return(
        <div className="card project-card"
        onClick={handleClick}
        >
            <h3>{title}</h3>
            <p><strong>{tech}</strong></p>
            <p>{desc}</p>
            <p>
        <span className="github-link">View on GitHub →</span>
      </p>
        </div>
    )
}

export default ProjectCard;