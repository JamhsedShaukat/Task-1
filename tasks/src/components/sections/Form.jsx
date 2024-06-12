import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    business: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">
        Request a <span className="gradient">Proposal</span>
      </h1>
      <form className="proposal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jhon Doe"
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="What's your email?"
            />
          </div>
        </div>
        <div className="form-group slection">
          <div className="form-field">
            <label htmlFor="budget">Marketing Budget</label>
            <select
              className="selection-box"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select annual Budget
              </option>
              <option value="low">Below $10,000</option>
              <option value="medium">$10,000 - $50,000</option>
              <option value="high">Above $50,000</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="business">About Business</label>
            <textarea
              id="business"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Write your Business"
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
