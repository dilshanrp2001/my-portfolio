import { userData } from '../data/userContent';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const { education } = userData;

    return (
        <section id="education" className="education-section">
            <div className="container education-container">
                <h2 className="section-title">Education</h2>
                <div className="education-list">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card">
                            <div className="edu-icon">
                                <FaGraduationCap />
                            </div>
                            <div className="edu-content">
                                <h3>{edu.degree}</h3>
                                <h4>{edu.institution}</h4>
                                <span className="edu-period">{edu.period}</span>
                                <ul className="edu-details">
                                    {edu.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
