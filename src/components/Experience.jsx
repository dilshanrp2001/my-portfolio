import { userData } from '../data/userContent';
import './Experience.css';

const Experience = () => {
    const { experience } = userData;

    return (
        <section id="experience" className="experience-section">
            <div className="container experience-container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-list">
                    {experience.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <div className="exp-role">{exp.role}</div>
                            <div className="exp-org">{exp.organization}</div>
                            <div className="exp-period">{exp.period}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
