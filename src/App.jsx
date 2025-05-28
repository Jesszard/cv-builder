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

  return (
    <div className={styles.container}>
      <h1>CV Builder</h1>
      <GeneralInfo form={form} setForm={setForm} />
      <EducationExp form={form} setForm={setForm} />
      <Experience form={form} setForm={setForm} />
      <PreviewInfo form={form} />
    </div>
  );
}

export default App;
