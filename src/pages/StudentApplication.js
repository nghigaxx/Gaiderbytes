import {useState} from "react";

function StudentApplication() {
    const [firstName, setFirstName] = useState("");

    return (
        <div>
            <h1> Student Application</h1>

            <div className="studentApplicationForm">
                <h2>Canadian HigherEd Coaches Student Application</h2>
                <form>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text"
                               name="firstName"
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type = "text" name="lastName" value="lastName"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" name="email" value="email"/>
                    </div>
                    <div>
                        <label htmlFor="address">Home Address:</label>
                        <input type="text" name="address" value="address"/>
                    </div>
                    <div>
                        <label htmlFor="postalCode">Postal Code:</label>
                        <input type="text" name="postalCode" value="postalCode"/>
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input type="date" name="dateOfBirth" value="dateOfBirth"/>
                    </div>
                    <div>
                        {/*change to a dropdown*/}
                        <label htmlFor="preferredPronoun">Preferred Pronoun:</label>
                        <input type="text" name="preferredPronoun" value="preferredPronoun"/>
                    </div>
                    <div>
                        <label htmlFor="institutionName">Name of Post-secondary institution:</label>
                        <input type="text" name="institutionName" value="institutionName"/>
                    </div>
                    <div>
                        <label htmlFor="programName">Program Name:</label>
                        <input type="text" name="programName" value="programName"/>
                    </div>
                    <div>
                        <label htmlFor="password">Account Password:</label>
                        <input type="password" name="password" value="password"/>
                    </div>
                    <h2>Emergency Contact</h2>
                    <div>
                        <label htmlFor="emergencyContactFirstName">First Name:</label>
                        <input type="string" name="emergencyContactFirstName" value="emergencyContactFirstName"/>
                    </div>
                    <div>
                        <label htmlFor="emergencyContactLastName">Last Name:</label>
                        <input type="string" name="emergencyContactLastName" value="emergencyContactLastName"/>
                    </div>
                    <div>
                        <label htmlFor="emergencyContactPhone">Phone Number:</label>
                        <input type="string" name="emergencyContactPhone" value="emergencyContactPhone"/>
                    </div>
                    <div>
                        <label htmlFor="emergencyContactRelation">Emergency Contact Relation:</label>
                        <input type="string" name="emergencyContactRelation" value="emergencyContactRelation"/>
                    </div>
                    <button type="submit">Apply</button>
                </form>
                <p>{firstName}</p>
            </div>
        </div>

    );
}

export default StudentApplication