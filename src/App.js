import appHeader from './appHeader'
import './App.css';
import StudentApplication from "./pages/StudentApplication";


function App() {
    const student = {
        firstName: String,
        lastName: String,
        email: String,
        province: String,
        city: String,
        address: String,
        postalCode: String,
        dateOfBirth: Date,
        pronoun: String,
        institutionName: String,
        programName: String,
        password: String,
        emergencyContactFirstName: String,
        emergencyContactLastName: String,
        emergencyContactPhone: String,
        emergencyContactRelation: String
    }

    let ActivePage
    const handleSave = (values) => {
        console.log({values})
    };
    switch (window.location.pathname) {
        case "/":
            break
        case "/studentApplication":
            ActivePage = <StudentApplication onSave={handleSave} {...(student)}/>
            break
    }



  return (
      <div>
          {appHeader()}
          {ActivePage}
      </div>

  );
}

export default App;
