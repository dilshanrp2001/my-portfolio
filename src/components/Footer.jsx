import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Pramoth Dilshan. All rights reserved.</p>
                </div>
                <div className="social-links">
                    <a href="https://github.com/dilshanrp2001" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/pramoth-dilshan-687039267/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.hackerrank.com/profile/pramothdilshan21" target="_blank" rel="noopener noreferrer" aria-label="HackerRank">
                        <FaHackerrank />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
