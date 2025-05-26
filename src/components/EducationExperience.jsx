import React from "react";

export default function EducationExp(props) {
  const handleChange = (e) => {
    props.setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <h2>Educational Experience </h2>
        <input
          name="schoolName"
          value={props.form.schoolName}
          placeholder="School Name"
          type="text"
          onChange={handleChange}
        />

        <input
          name="titleOfStudy"
          value={props.form.titleOfStudy}
          placeholder="Title of Study"
          type="text"
          onChange={handleChange}
        />
        <input
          name="dateofStudy"
          value={props.form.dateofStudy}
          placeholder="Date"
          type="date"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
