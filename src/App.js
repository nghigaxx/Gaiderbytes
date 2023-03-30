import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentApplication from "./pages/StudentApplication";
import ApplicationSuccess from "./pages/ApplicationSuccess";
import ApplicationFail from "./pages/ApplicationFail";
import ServerError from "./pages/ServerError";
import Home from './pages/Home'
import { useState } from "react";
import Navbar from './components/navbar/Navbar';
import CoachApplication from "./pages/CoachApplication";

function App() {
  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
    email: "",
    province: "",
    city: "",
    address: "",
    postal_code: "",
    date_of_birth: "",
    pronoun: "",
    institution_name: "",
    program_name: "",
    emergency_contact_first_name: "",
    emergency_contact_last_name: "",
    emergency_contact_phone: "",
    emergency_contact_relation: "",
  });

  const [coach, setCoach] = useState({
    first_name: "",
    last_name: "",
    email: "",
    province: "",
    city: "",
    address: "",
    postal_code: "",
    date_of_birth: "",
    pronoun: "",
    years_of_experience:"",
    self_identification: "",
    gen_status: "",
    languages: "",
    institutions: "",
    availability: "",
    introduction: "",
    reside_in_canada: "",
    post_secondary_exp: "",
    post_secondary_program: ""

  });

  const handleSave = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/studentApplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.status === 201) {
        console.log("Application submitted successfully");
        setStudent(values);
        window.location.pathname = "/success";
      } else if (response.status === 400) {
        console.log("Student has already applied");
        window.location.pathname = "/fail";
      } else if (response.status === 500) {
        console.log("Server Error");
        window.location.pathname = "/serverError"
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSaveCoach = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/coachApplication", {
        method: "POST",
        body: formData,
      });
      if (response.status === 201) {
        console.log("Application submitted successfully");
        setCoach(formData);
        window.location.pathname = "/success";
      } else if (response.status === 400) {
        console.log("Coach has already applied");
        window.location.pathname = "/fail";
      } else if (response.status === 500) {
        console.log("Server Error");
        window.location.pathname = "/serverError";
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <BrowserRouter>
      <Navbar/>
        <div className="pt-[75px] px-[10%]">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/student-application" element={<StudentApplication onSave={handleSave} student={student} />} />
            <Route exact path="/coach-application" element={<CoachApplication onSave={handleSaveCoach} coach={coach}/>} />
            <Route exact path="/success" element={<ApplicationSuccess/>} />
            <Route exact path="/fail" element={<ApplicationFail/>} />
            <Route exact path="/serverError" element={<ServerError/>} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
