import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
export default function PreviewInfo(props) {
  return (
    <div>
      <h1>Resume Preview</h1>
      <h2>
        {props.form.firstName} {props.form.lastName}
      </h2>
      <h3>{props.form.email}</h3>
      <h3>{props.form.phoneNumber}</h3>
      <h3>Education</h3>
      <p>{props.form.schoolName}</p>
      <p>{props.form.titleOfStudy}</p>
      <p>{props.form.dateofStudy}</p>
    </div>
  );
}
