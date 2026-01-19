import { userData } from '../data/userContent';
import './Skills.css';

const Skills = () => {
    const { skills } = userData;
    const categories = Object.keys(skills);

    return (
        <section id="skills" className="skills-section">
            <div className="container skills-container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {categories.map((category) => (
                        <div key={category} className="skills-category-card">
                            <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            <div className="skills-list">
                                {skills[category].map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
