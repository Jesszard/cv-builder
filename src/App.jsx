import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import PreviewInfo from "./components/PreviewInfo";
import EducationExp from "./components/EducationExperience";
function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    schoolName: "",
    titleOfStudy: "",
    date: "",
  });

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <GeneralInfo form={form} setForm={setForm} />
      <EducationExp form={form} setForm={setForm} />

      <PreviewInfo form={form} />
    </div>
  );
}

export default App;
