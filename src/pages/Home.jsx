import React, { useEffect } from 'react';
import './Home.css';  // Ensure the CSS file is correctly linked

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      const scrollPos = window.pageYOffset;
      hero.style.backgroundPosition = `center ${scrollPos * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Bella Lane Designs</h1>
          <p>Crafting Beautiful Designs for Every Occasion</p>
          <button>Explore Our Designs</button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <h2>Discover Our Latest Creations</h2>
        <p>Explore the world of handmade patterns and prints, perfect for any project.</p>
        <div className="intro-gallery">
          <div className="image-item">
            <img src="your-image1.jpg" alt="Craft Design 1" />
          </div>
          <div className="image-item">
            <img src="your-image2.jpg" alt="Craft Design 2" />
          </div>
        </div>
      </section>

      {/* Designs Preview Section */}
      <section className="designs-preview">
        <h3>Browse Our Categories</h3>
        <div className="categories">
          <a href="/designs/craft-hobby" className="category-item">
            <h4>Craft & Hobby</h4>
          </a>
          <a href="/designs/patterns-prints" className="category-item">
            <h4>Patterns & Prints</h4>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
