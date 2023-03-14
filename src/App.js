import appHeader from "./appHeader";
import "./App.css";
import StudentApplication from "./pages/StudentApplication";
import ApplicationSuccess from "./pages/ApplicationSuccess";
import ApplicationFail from "./pages/ApplicationFail";
import ServerError from "./pages/ServerError";
import { useState } from "react";

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

  let ActivePage = <div> </div>;

  switch (window.location.pathname) {
    case "/":
      break;
    case "/studentApplication":
      ActivePage = <StudentApplication onSave={handleSave} student={student} />;
      break;
    case "/success":
      ActivePage = <ApplicationSuccess/>;
      break;
    case "/fail":
      ActivePage = <ApplicationFail />;
      break;
    case "/serverError":
      ActivePage = <ServerError/>;
      break;
    default:
      break;
  }

  return (
    <div>
      {appHeader()}
      {ActivePage}
    </div>
  );
}

export default App;
