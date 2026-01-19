import { userData } from '../data/userContent';
import './Hero.css';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/resume.pdf';

const Hero = () => {
    const { name, role, tagline, intro } = userData.personal;

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="hero-name">{name}</h1>
                    <h2 className="hero-role">{role}</h2>
                    <p className="hero-tagline">{tagline}</p>
                    <p className="hero-intro">{intro}</p>

                    <div className="hero-actions">
                        {/* <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#blogs" className="btn btn-outline">Read Blogs</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a> */}
                        <a href={resumePdf} className="btn btn-outline" download="Pramoth_Dilshan_Resume.pdf">Download CV</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="blob"></div>
                    <div className="profile-wrapper">
                        <img src={profileImg} alt={name} className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
