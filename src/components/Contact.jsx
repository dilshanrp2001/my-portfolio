import { userData } from '../data/userContent';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const { email, phone, location, social } = userData.personal;

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info-card">
                        <h3>Contact Information</h3>
                        <p className="contact-desc">
                            Feel free to reach out to me for collaboration or any opportunities.
                        </p>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                        <div className="info-item">
                            <FaPhoneAlt className="info-icon" />
                            <a href={`tel:${phone}`}>{phone}</a>
                        </div>
                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <span>{location}</span>
                        </div>

                        <div className="contact-socials">
                            <a href={social.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href={social.hackerrank} target="_blank" rel="noopener noreferrer"><FaHackerrank /></a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <h3>Send a Message</h3>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
