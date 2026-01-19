import { userData } from '../data/userContent';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const { projects } = userData;

    return (
        <section id="projects" className="projects-section">
            <div className="container projects-container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-role">{project.role}</p>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                {/* <div className="project-links">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaExternalLinkAlt /> Demo
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
