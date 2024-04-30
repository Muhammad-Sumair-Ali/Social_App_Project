import Layout from "../components/layout/Layout.jsx";
import React, { useState } from "react";
import "./style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    txtName: "",
    txtEmail: "",
    txtPhone: "",
    txtMsg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Messege has been sent")
    console.log(formData);
  };
  return (
    <div>
      <Layout>
        <div className="container contact-form ">
          <div className="contact-image">
    
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Drop Us a Message</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="txtName"
                    className="form-control"
                    placeholder="Your Name *"
                    value={formData.txtName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtEmail"
                    className="form-control"
                    placeholder="Your Email *"
                    value={formData.txtEmail}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtPhone"
                    className="form-control"
                    placeholder="Your Phone Number *"
                    value={formData.txtPhone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="btnSubmit"
                    className="btn btn-primary"
                    value="Send Message"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    name="txtMsg"
                    className="form-control"
                    placeholder="Your Message *"
                    style={{ width: "100%", height: "150px" }}
                    value={formData.txtMsg}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
