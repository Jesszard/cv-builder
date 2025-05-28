import React from "react";
import styles from "../styles/PracticalExperience.module.css";

export default function Experience(props) {
  const handleChange = (e) => {
    props.setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.box}>
      <h2>Experience</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="companyName"
          value={props.form.companyName}
          placeholder="Company Name"
          type="text"
          onChange={handleChange}
        />

        <input
          name="position"
          value={props.form.position}
          placeholder="Position"
          type="text"
          onChange={handleChange}
        />
        <textarea
          name="responsibilities"
          value={props.form.responsibilities}
          placeholder="responsibilities"
          type="text"
          onChange={handleChange}
        />
        <input
          name="educationStartDate"
          value={props.form.educationStartDate}
          placeholder="Start Date"
          type="date"
          onChange={handleChange}
        />
        <input
          name="educationEndDate"
          value={props.form.educationEndDate}
          placeholder="End Date"
          type="date"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
