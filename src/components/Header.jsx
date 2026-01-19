import { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blogs', href: '#blogs' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <a href="#home"></a>
                </div>

                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-actions">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>

                    </div>
                </nav>

                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </header>
    );
};

export default Header;
