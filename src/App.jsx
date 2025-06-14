import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import PreviewInfo from "./components/PreviewInfo";
import EducationExp from "./components/EducationExperience";
import Experience from "./components/PracticalExperience";
import styles from "./styles/App.module.css";
function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    schoolName: "",
    titleOfStudy: "",
    educationStartDate: "",
    educationEndDate: "",
    companyName: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });
  const [submitted, setSubmitted] = useState({
    generalInfo: false,
    education: false,
    experience: false,
  });
  return (
    <div className={styles.container}>
      <h1>CV Builder</h1>
      <GeneralInfo form={form} setForm={setForm} setSubmitted={setSubmitted} />
      <EducationExp form={form} setForm={setForm} setSubmitted={setSubmitted} />
      <Experience form={form} setForm={setForm} setSubmitted={setSubmitted} />
      <PreviewInfo form={form} submitted={submitted} />
    </div>
  );
}

export default App;
