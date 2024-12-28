import React from 'react';
import './Blogs.css';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import { FaRegClock } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title: "Mastering Cybersecurity: Strategies to Protect Your Business Data",
      description:
        "In today’s digital age, cloud-based productivity suites have become essential tools for businesses of all sizes...",
      date: "12th Sept, 2023",
      time: "6:08 pm",
      author: "Nwokedi Justina",
    },
    {
      id: 2,
      image: blog2,
      title: "Mastering Cybersecurity: Strategies to Protect Your Business Data",
      description:
        "In today’s digital age, cloud-based productivity suites have become essential tools for businesses of all sizes...",
      date: "12th Sept, 2023",
      time: "6:08 pm",
      author: "Nwokedi Justina",
    },
    {
      id: 3,
      image: blog3,
      title: "Mastering Cybersecurity: Strategies to Protect Your Business Data",
      description:
        "In today’s digital age, cloud-based productivity suites have become essential tools for businesses of all sizes...",
      date: "12th Sept, 2023",
      time: "6:08 pm",
      author: "Nwokedi Justina",
    },
  ];

  return (
    <section className="blog-section">
         <div className="blog-header">
        <h2>Blog & Latest news</h2>
        <p>Stay informed with our informative blog posts and industry updates.</p>
      </div>
      <div className="containers">
        <div className="blogs">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt="Blog" className="blog-img" />
              <div className="blog-content">
                <div className="blog-meta">
                  <span>
                    <FaRegCalendarAlt /> {blog.date}
                  </span>
                  <span>
                    <FaRegClock /> {blog.time}
                  </span>
                  <span>By: {blog.author}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a href="#" className="read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="explore-btn1">
        <button>Explore Blog Posts</button>
      </div>
    </section>
  );
};

export default BlogSection;
