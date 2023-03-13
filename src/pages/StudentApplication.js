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

            console.log(register("first_name"))
            onSave(formValues)
        }





        return (
            <div>
                <h1> Student Application</h1>

                <div className="studentApplicationForm">
                    <h2>Canadian HigherEd Coaches Student Application</h2>
                    <form onSubmit={handleSubmit(handleSave)}>
                        <div>
                            <label htmlFor="first_name">First Name: </label>
                            <input type="text"
                                   {...register("first_name")}

                            />
                        </div>
                        <div>
                            <label htmlFor="last_name">Last Name:</label>
                            <input type="text"
                                   {...register("last_name")}

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
                            <label htmlFor="postal_code">Postal Code:</label>
                            <input type="text"
                                   {...register("postal_code")}

                            />
                        </div>
                        <div>
                            <label htmlFor="date_of_birth">Date of Birth:</label>
                            <input type="date"
                                   {...register("date_of_birth")}/>

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
                            <label htmlFor="institution_name">Name of Post-secondary institution:</label>
                            <input type="text"
                                   {...register("institution_name")}
                                   />
                        </div>
                        <div>
                            <label htmlFor="program_name">Program Name:</label>
                            <input type="text"
                                   {...register("program_name")}

                            />
                        </div>
                        <h2>Emergency Contact</h2>
                        <div>
                            <label htmlFor="emergency_contact_first_name">First Name:</label>
                            <input type="string"
                                   {...register("emergency_contact_first_name")}

                            />
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_last_name">Last Name:</label>
                            <input type="string"
                                   {...register("emergency_contact_last_name")}
                                   />
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_phone">Phone Number:</label>
                            <input type="string"
                                   {...register("emergency_contact_phone")}
                            />
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_relation">Emergency Contact Relation:</label>
                            <input type="string"
                                   {...register("emergency_contact_relation")}
                            />
                        </div>
                        <button type="submit">Apply</button>
                    </form>
                </div>
            </div>

        );
    }

export default StudentApplication