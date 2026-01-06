import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className='page fullscreen'>
      <h2>Projects</h2>
      <div className="project-grid">
        <ProjectCard
  title="ShopEZ – E-Commerce Web Application"
  tech="React | JavaScript | React Router | Context API"
  desc="E-commerce app with product listing, filters, cart, authentication, and checkout flow."
  link="https://github.com/vicknesh-k/ShopEZ"
 />

        <ProjectCard
  title="Employee Management System"
  tech="React | Spring Boot | MySQL"
  desc="Full-stack CRUD system with validations and REST APIs."
  frontend="https://github.com/vicknesh-k/employee-frontend"
  backend="https://github.com/vicknesh-k/employee-backend"
/>

<ProjectCard
  title="Real Estate Management System (SQL Project)"
  tech="MySQL | SQL Queries | Database Design"
  desc="Database-driven system to manage agents, clients, properties, and transactions. Implemented SQL queries for sales tracking, commissions, property availability, top-performing agents, profitable cities, and unsold properties."
  link="https://github.com/vicknesh-k/real-estate-management-sql"
/>


      </div>
      
    </section>
  )
}

export default Projects