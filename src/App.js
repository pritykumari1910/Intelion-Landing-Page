import React from 'react';
import './App.css';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Intelion</h1>
        <p>Empowering Businesses with Innovative Solutions</p>
      </header>

      <nav className="navbar">
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-item">
            <h3>FinTech Solutions</h3>
            <p>Providing innovative financial solutions to streamline your business.</p>
          </div>

          <div className="service-item">
            <h3>Consultancy Services</h3>
            <p>Expert guidance to boost your business performance.</p>
          </div>

          <div className="service-item">
            <h3>AI & ML Integration</h3>
            <p>Enhancing your business with the power of Artificial Intelligence.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-item">
          <p>"Intelion helped us scale our business with innovative solutions. Highly recommended!"</p>
          <h4>- John Doe, CEO of XYZ Corp</h4>
        </div>
        <div className="testimonial-item">
          <p>"Their consultancy service is top-notch. We saw a 40% increase in our revenue."</p>
          <h4>- Sarah Smith, Director of ABC Ltd</h4>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Our Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-item">
            <h3>Basic</h3>
            <p>$99/month</p>
            <p>Basic consultancy services</p>
            <button>Get Started</button>
          </div>

          <div className="pricing-item">
            <h3>Standard</h3>
            <p>$199/month</p>
            <p>Consultancy + FinTech Solutions</p>
            <button>Get Started</button>
          </div>

          <div className="pricing-item">
            <h3>Premium</h3>
            <p>$299/month</p>
            <p>All services + AI & ML Integration</p>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

     
      <footer className="footer">
        <p>&copy; 2025 Intelion. All rights reserved.</p>
        <div className="social-icons">
          <FaLinkedin />
          <FaTwitter />
          <FaInstagram />
        </div>
      </footer>
    </div>
  );
};

export default App;