import React from "react";
import styles from "../styles/EducationExperience.module.css";
export default function EducationExp(props) {
  const handleChange = (e) => {
    props.setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.box}>
      <form onSubmit={handleSubmit}>
        <h2>Education</h2>
        <label htmlFor="schoolName">School's Name</label>
        <input
          name="schoolName"
          id="schoolName"
          value={props.form.schoolName}
          placeholder="School Name"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="titleOfStudy">Field of Study</label>
        <input
          name="titleOfStudy"
          id="titleOfStudy"
          value={props.form.titleOfStudy}
          placeholder="Title of Study"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="educationStartDate">Start Date</label>
        <input
          name="educationStartDate"
          value={props.form.educationStartDate}
          type="date"
          onChange={handleChange}
        />
        <input
          name="educationEndDate"
          value={props.form.educationEndDate}
          type="date"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
