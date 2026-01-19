import { userData } from '../data/userContent';
import { FaTrophy } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
    const { achievements } = userData;

    return (
        <section id="achievements" className="achievements-section">
            <div className="container achievements-container">
                <h2 className="section-title">Achievements</h2>
                <div className="achievements-list">
                    {achievements.map((item, index) => (
                        <div key={index} className="achievement-card">
                            <FaTrophy className="achievement-icon" />
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
