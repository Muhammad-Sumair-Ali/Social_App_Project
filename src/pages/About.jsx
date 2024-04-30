import React from "react";
import Layout from "../components/layout/Layout";
import { Row, Col } from 'react-bootstrap';
import { HeartOutlined, ToolOutlined } from '@ant-design/icons';

const About = () => {
  return (
    <div>
      <Layout>
        <div className="aboutus-section">
          <div className="container">
            <Row>
              <Col md={3} sm={6} xs={12}>
                <div className="aboutus">
                  <h2 className="aboutus-title">About Us</h2>
                  <p className="aboutus-text">Welcome to our dashboard! We're here to provide you with the best services and support for your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className="aboutus-text">Our team works with passion and dedication to ensure your satisfaction. We strive to deliver reliable services and exceptional support to all our users.</p>
                  <a className="aboutus-more" href="#">Read more</a>
                </div>
              </Col>
              <Col md={3} sm={6} xs={12}>
                <div className="aboutus-banner">
                  {/* <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt="About Us Banner" /> */}
                </div>
              </Col>
              <Col md={5} sm={6} xs={12}>
                <div className="feature">
                  <div className="feature-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <HeartOutlined className="icon" />
                      </div>
                      <div className="feature-content">
                        <h4>Work with heart</h4>
                        <p>Our team works with heart and soul to bring you the best solutions. We believe in going above and beyond to meet your needs and exceed your expectations.</p>
                      </div>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <ToolOutlined className="icon" />
                      </div>
                      <div className="feature-content">
                        <h4>Reliable services</h4>
                        <p>We provide reliable services that you can count on. Whether it's technical support or product offerings, you can trust us to deliver excellence every time.</p>
                      </div>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="clearfix">
                      <div className="iconset">
                        <ToolOutlined className="icon" />
                      </div>
                      <div className="feature-content">
                        <h4>Great support</h4>
                        <p>Our dedicated support team is here to assist you whenever you need help. We prioritize your satisfaction and are committed to providing great support every step of the way.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default About;
