import { userData } from '../data/userContent';
import './About.css';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const About = () => {
    const { intro } = userData.personal;

    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>{intro}</p>
                        <p className="additional-info">
                            My journey in technology started at University of Moratuwa, where I discovered my passion for building scalable software solutions.
                            I thrive in collaborative environments and enjoy solving complex problems.
                            My goal is to leverage my full-stack expertise to create impactful digital experiences.
                        </p>
                    </div>

                </div>

                {/* Integrated Sections */}
                <Education />
                <Experience />
                <Skills />
            </div>
        </section>
    );
};

export default About;
