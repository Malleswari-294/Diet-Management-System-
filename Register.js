import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    target: "",
    healthProblem: "",
  });

  const [hasHealthProblem, setHasHealthProblem] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registered successfully!");
  };

  const handleNoHealthProblem = () => {
    navigate("/dashboard");
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age (years)"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="height"
          placeholder="Height (inches)"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="weight"
          placeholder="Weight (kgs)"
          onChange={handleChange}
          required
        />

        {/* Gender */}
        <div className="radio-group">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            /> Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            /> Female
          </label>
        </div>

        {/* Target */}
        <select name="target" onChange={handleChange} required>
          <option value="">Select Target Duration</option>
          <option value="3 months">3 Months</option>
          <option value="6 months">6 Months</option>
          <option value="1 year">1 Year</option>
          <option value="2 years">2 Years</option>
        </select>

        {/* Health Problem */}
        <div className="health-section">
          <p>Do you have any health problems?</p>
          <button
            type="button"
            onClick={() => setHasHealthProblem(true)}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={handleNoHealthProblem}
          >
            No
          </button>
        </div>

        {/* Description box */}
        {hasHealthProblem && (
          <textarea
            name="healthProblem"
            placeholder="Describe your health problem"
            onChange={handleChange}
            required
          />
        )}

        {hasHealthProblem && <button type="submit">Register</button>}
      </form>
    </div>
  );
}

export default Register;
