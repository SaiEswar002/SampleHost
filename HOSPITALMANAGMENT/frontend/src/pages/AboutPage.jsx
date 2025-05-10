import React from 'react';
import './AboutPage.css';
import hospitalImage from '../assets/images/hospital-building.jpg'; // Save as hospital-building.jpg
import visionImage from '../assets/images/vision.jpg'; // Save as vision.jpg
import servicesImage from '../assets/images/services.jpg'; // Save as services.jpg

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <div className="about-boxes">
        {/* Box 1: Hospital Building */}
        <div className="about-box">
          <img src={hospitalImage} alt="Hospital Building" className="about-box-image" />
          <div className="about-box-content">
            <h2>Our Hospital</h2>
            <p>
              Our hospital is equipped with state-of-the-art facilities to provide the best healthcare services to our community.
            </p>
          </div>
        </div>

        {/* Box 2: Vision */}
        <div className="about-box">
          <img src={visionImage} alt="Our Vision" className="about-box-image" />
          <div className="about-box-content">
            <h2>Our Vision</h2>
            <p>
              To be a leading healthcare provider, recognized for excellence in patient care, innovation, and community service.
            </p>
          </div>
        </div>

        {/* Box 3: Services */}
        <div className="about-box">
          <img src={servicesImage} alt="Our Services" className="about-box-image" />
          <div className="about-box-content">
            <h2>Our Services</h2>
            <p>
              We offer 24/7 emergency care, outpatient and inpatient services, advanced diagnostics, and specialized departments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
