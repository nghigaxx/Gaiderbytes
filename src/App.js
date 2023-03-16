import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentApplication from "./pages/StudentApplication";
import ApplicationSuccess from "./pages/ApplicationSuccess";
import ApplicationFail from "./pages/ApplicationFail";
import ServerError from "./pages/ServerError";
import Home from './pages/Home'
import { useState } from "react";
import Navbar from './components/navbar/Navbar';

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

  return (
    <BrowserRouter>
      <Navbar/>
        <div className="pt-[75px] px-[10%]">
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/student-application" element={<StudentApplication onSave={handleSave} student={student} />} />
          <Route exact path="/success" element={<ApplicationSuccess/>} />
          <Route exact path="/fail" element={<ApplicationFail/>} />
          <Route exact path="/serverError" element={<ServerError/>} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
