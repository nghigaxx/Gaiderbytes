import {useState} from "react";
import {useForm, useController} from "react-hook-form"
import Select from "react-select"



    const StudentApplication = ({onSave, student={} }) => {
        const [userData, setUserData] = useState(student);

        const pronouns = [
            {value: "he/him", label: "He/Him"},
            {value: "she/her", label: "She/Her"},
            {value: "They/Them", label: "They/Them"},
        ]

        const {register, control, handleSubmit} = useForm();
        const {field} = useController({name: 'pronoun', control})

        const handlePronounSelectChange = (option) => {
            field.onChange(option.value)
        }

        const handleSave = (formValues) => {

            console.log(register("firstName"))
            onSave(formValues)
        }





        return (
            <div>
                <h1> Student Application</h1>

                <div className="studentApplicationForm">
                    <h2>Canadian HigherEd Coaches Student Application</h2>
                    <form onSubmit={handleSubmit(handleSave)}>
                        <div>
                            <label htmlFor="firstName">First Name: </label>
                            <input type="text"
                                   {...register("firstName")}

                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text"
                                   {...register("lastName")}

                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email"
                                   {...register("email")}

                            />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="province">Province:</label>
                                <input type="text"
                                       {...register("province")}

                                />
                            </div>
                            <div>
                                <label htmlFor="city">City:</label>
                                <input type="text"
                                       {...register("city")}

                                />
                            </div>
                            <label htmlFor="address">Street Address:</label>
                            <input type="text"
                                   {...register("address")}

                            />
                        </div>
                        <div>
                            <label htmlFor="postalCode">Postal Code:</label>
                            <input type="text"
                                   {...register("postalCode")}

                            />
                        </div>
                        <div>
                            <label htmlFor="dateOfBirth">Date of Birth:</label>
                            <input type="date"
                                   {...register("dateOfBirth")}/>

                        </div>
                        <div>
                            {/*change to a dropdown*/}
                            <Select
                                value ={pronouns.find(({value}) => value ===field.value)}
                                onChange={handlePronounSelectChange}
                                options={pronouns}
                            />

                        </div>
                        <div>
                            <label htmlFor="institutionName">Name of Post-secondary institution:</label>
                            <input type="text"
                                   {...register("institutionName")}
                                   />
                        </div>
                        <div>
                            <label htmlFor="programName">Program Name:</label>
                            <input type="text"
                                   {...register("programName")}

                            />
                        </div>
                        <div>
                            <label htmlFor="password">Account Password:</label>
                            <input type="password"
                                   {...register("password")}

                            />
                        </div>
                        <div>
                            <label htmlFor="passwordConfirm">Confirm Password:</label>
                            <input type="password"
                                   name="passwordConfirm"


                            />
                        </div>
                        <h2>Emergency Contact</h2>
                        <div>
                            <label htmlFor="emergencyContactFirstName">First Name:</label>
                            <input type="string"
                                   {...register("emergencyContactFirstName")}

                            />
                        </div>
                        <div>
                            <label htmlFor="emergencyContactLastName">Last Name:</label>
                            <input type="string"
                                   {...register("emergencyContactLastName")}
                                   />
                        </div>
                        <div>
                            <label htmlFor="emergencyContactPhone">Phone Number:</label>
                            <input type="string"
                                   {...register("emergencyContactPhone")}
                            />
                        </div>
                        <div>
                            <label htmlFor="emergencyContactRelation">Emergency Contact Relation:</label>
                            <input type="string"
                                   {...register("emergencyContactRelation")}
                            />
                        </div>
                        <button type="submit">Apply</button>
                    </form>
                </div>
            </div>

        );
    }

export default StudentApplication