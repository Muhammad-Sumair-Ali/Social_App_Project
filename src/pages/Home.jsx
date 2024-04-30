import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import Hero from "./hero-img.png";

const Home = () => {
  return (
    <div>
      <Layout>
        <section id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
                <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Ant Design & Bootstrap</h2>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <Link to="about" spy={true} smooth={true} duration={500} className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Get Started</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                <img src={Hero} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
