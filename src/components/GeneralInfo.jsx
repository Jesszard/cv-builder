import { useState } from "react";

export default function GeneralInfo(props) {
  const handleChange = (e) => {
    props.setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={props.form.firstName}
          placeholder="First Name"
          type="text"
          onChange={handleChange}
        />
        <input
          name="lastName"
          value={props.form.lastName}
          placeholder="Last Name"
          type="text"
          onChange={handleChange}
        />
        <input
          name="email"
          value={props.form.email}
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
        <input
          name="phoneNumber"
          value={props.form.phoneNumber}
          placeholder="Phone Number"
          type="tel"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
