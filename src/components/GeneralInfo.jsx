import { useState } from "react";
import styles from "../styles/GeneralInfo.module.css";
export default function GeneralInfo(props) {
  const handleChange = (e) => {
    props.setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSubmitted((prev) => ({ ...prev, generalInfo: true }));
  };
  return (
    <div className={styles.box}>
      <h2>General Information</h2>
      <form onSubmit={handleSubmit} className={styles.inputs}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          id="firstName"
          value={props.form.firstName}
          placeholder="First Name"
          type="text"
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          id="lastName"
          value={props.form.lastName}
          placeholder="Last Name"
          type="text"
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          value={props.form.email}
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          name="phoneNumber"
          id="phoneNumber"
          value={props.form.phoneNumber}
          placeholder="Phone Number"
          type="tel"
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
