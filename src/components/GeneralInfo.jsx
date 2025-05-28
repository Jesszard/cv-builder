import { useState } from "react";
import styles from "../styles/GeneralInfo.module.css";
export default function GeneralInfo(props) {
  const handleChange = (e) => {
    props.setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.box}>
      <h2>General Information</h2>
      <form onSubmit={handleSubmit} className={styles.inputs}>
        <label for="firstName">First Name</label>
        <input
          name="firstName"
          id="firstName"
          value={props.form.firstName}
          placeholder="First Name"
          type="text"
          onChange={handleChange}
        />
        <label for="lastName">Last Name</label>
        <input
          name="lastName"
          id="lastName"
          value={props.form.lastName}
          placeholder="Last Name"
          type="text"
          onChange={handleChange}
        />
        <label for="email">Email</label>
        <input
          name="email"
          id="email"
          value={props.form.email}
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
        <label for="phoneNumber">Phone Number</label>
        <input
          name="phoneNumber"
          id="phoneNumber"
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
