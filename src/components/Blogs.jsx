import { useState } from 'react';
import { userData } from '../data/userContent';
import { FaMedium, FaLinkedin } from 'react-icons/fa';
import './Blogs.css';

const Blogs = () => {
    const { blogs } = userData;
    const [filter, setFilter] = useState('All');

    const filteredBlogs = filter === 'All'
        ? blogs
        : blogs.filter(blog => blog.platform === filter);

    return (
        <section id="blogs" className="blogs-section">
            <div className="container blogs-container">
                <h2 className="section-title">Technical Blogs</h2>

                <div className="blog-filters">
                    {['All', 'LinkedIn', 'Medium'].map(f => (
                        <button
                            key={f}
                            className={`filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="blogs-grid">
                    {filteredBlogs.map((blog, index) => (
                        <a key={index} href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-card">
                            <div className="blog-meta">
                                <span className={`platform-badge ${blog.platform.toLowerCase()}`}>
                                    {blog.platform === 'Medium' ? <FaMedium /> : <FaLinkedin />} {blog.platform}
                                </span>
                                <span className="blog-date">{blog.date}</span>
                            </div>
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-excerpt">{blog.excerpt}</p>
                            <span className="read-more">Read Article &rarr;</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
