import {useState} from "react";
import {useForm, useController} from "react-hook-form"
import Select from "react-select"
import {zodResolver} from "@hookform/resolvers/zod";
import  {z, string} from "zod";
import { FormControlLabel, Radio, TextField } from "@mui/material";



    const StudentApplication = ({onSave}) => {
        const [checked, setChecked] = useState(false);



        const provinces = [
            {value: "alberta", label: "Alberta"},
            {value: "british columbia", label: "British Columbia"},
            {value: "manitoba", label: "Manitoba"},
            {value: "new brunswick", label: "New Brunswick"},
            {value: "newfoundland and labrador", label: "Newfoundland and Labrador"},
            {value: "northwest territories", label: "Northwest Territories"},
            {value: "nova scotia", label: "Nova Scotia"},
            {value: "nunavut", label: "Nunavut"},
            {value: "ontario", label: "Ontario"},
            {value: "prince edward island", label: "Prince Edward Island"},
            {value: "quebec", label: "Quebec"},
            {value: "saskatchewan", label: "Saskatchewan"},
            {value: "yukon", label: "Yukon"},
        ];

        //outlining requirements for input (validation)
        const schema = z.object({
            first_name: z.string().regex(/^[A-Za-z]+$/).min(2).max(20),
            last_name: z.string().min(1).max(20),
            email: string().email(),
            province: z.string(),
            city: string().regex(/^[A-Za-z]+$/).min(2).max(20),
            address: string().min(5),
            postal_code: string().length(6),
            date_of_birth: string(),
            pronoun: z.string().min(1),
            institution_name: z.string().min(1),
            program_name: z.string().min(1),
            emergency_contact_first_name: z.string().regex(/^[A-Za-z]+$/).min(2).max(20),
            emergency_contact_last_name: z.string().regex(/^[A-Za-z]+$/).min(2).max(20),
            emergency_contact_phone: z.string().regex(/^[0-9]+$/).length(10),
            emergency_contact_relation: z.string().min(1)
        });

        const {register, handleSubmit, formState, control} = useForm({resolver: zodResolver(schema)});
        const {errors} = formState;
        const {field} = useController({name: 'province', control});

        const handleProvinceSelectChange = (option) => {
            field.onChange(option.value)
        }



        //function to save form values
        const handleSave = (formValues) => {
            console.log(formValues)
            onSave(formValues)
        };


        return (
            <div>
                <h1> Student Application</h1>
                <div className="studentApplicationForm">
                    <form onSubmit={handleSubmit(handleSave)}>
                        <div>
                            <label htmlFor="first_name">First Name: </label>
                            <input type="text"
                                   {...register("first_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.first_name?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last_name">Last Name:</label>
                            <input type="text"
                                   {...register("last_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.last_name?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email"
                                   {...register("email")}
                            />
                            <div style={{color: "red"}}>
                                {errors.email?.message}
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="province">Province:</label>
                                <Select
                                    value ={provinces.find(({value}) => value ===field.value)}
                                    onChange={handleProvinceSelectChange}
                                    options={provinces}
                                />
                                <div style={{color: "red"}}>
                                    {errors.province?.message}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="city">City:</label>
                                <input type="text"
                                       {...register("city")}
                                />
                                <div style={{color: "red"}}>
                                    {errors.city?.message}
                                </div>
                            </div>
                            <label htmlFor="address">Street Address:</label>
                            <input type="text"
                                   {...register("address")}
                            />
                            <div style={{color: "red"}}>
                                {errors.address?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="postal_code">Postal Code:</label>
                            <input type="text"
                                   {...register("postal_code")}
                            />
                            <div style={{color: "red"}}>
                                {errors.postal_code?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="date_of_birth">Date of Birth:</label>
                            <input type="date"
                                   {...register("date_of_birth")}
                            />
                            <div style={{color: "red"}}>
                                {errors.date_of_birth?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="pronoun">Pronoun:</label>
                            <input type="text"
                                   {...register("pronoun")}
                            />
                            <div style={{color: "red"}}>
                                {errors.pronoun?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="institution_name">Name of Post-secondary institution:</label>
                            <input type="text"
                                   {...register("institution_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.institution_name?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="program_name">Program Name:</label>
                            <input type="text"
                                   {...register("program_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.program_name?.message}
                            </div>
                        </div>
                        <h2>Emergency Contact</h2>
                        <div>
                            <label htmlFor="emergency_contact_first_name">First Name:</label>
                            <input type="string"
                                   {...register("emergency_contact_first_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.emergency_contact_first_name?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_last_name">Last Name:</label>
                            <input type="string"
                                   {...register("emergency_contact_last_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.emergency_contact_last_name?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_phone">Phone Number:</label>
                            <input type="string"
                                   {...register("emergency_contact_phone")}
                            />
                            <div style={{color: "red"}}>
                                {errors.emergency_contact_phone?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_relation">Emergency Contact Relation:</label>
                            <input type="string"
                                   {...register("emergency_contact_relation")}
                            />
                            <div style={{color: "red"}}>
                                {errors.emergency_contact_relation?.message}
                            </div>
                        </div>
                        <button type="submit">Apply</button>
                    </form>
                </div>
            </div>

        );
    }

export default StudentApplication
