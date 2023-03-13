import appHeader from "./appHeader";
import "./App.css";
import StudentApplication from "./pages/StudentApplication";
import ApplicationSuccess from "./pages/ApplicationSuccess";
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
      const data = await response.json();
      console.log(data.message);
      setStudent(values);
      window.location.pathname = "/success";
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
