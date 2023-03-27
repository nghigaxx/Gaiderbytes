import {React, useState} from "react";
import {string, z} from "zod";
import {useController, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Select from "react-select";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";


const CoachApplication = () => {
    const [checked, setChecked] = useState(null);

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
        last_name: z.string().regex(/^[A-Za-z]+$/).min(2).max(20),
        email: string().email(),
        province: z.string(),
        city: string().regex(/^[A-Za-z]+$/).min(2).max(40),
        address: string().min(5),
        postal_code: string().length(6),
        date_of_birth: string(),
        pronoun: z.string().min(1),
        years_of_experience: z.string().regex(/^[0-9]+$/).min(1).max(2),
        resume_url: z.string(),
        self_identification: z.string(),
        gen_status: z.string(),
        languages: z.string(),
        institutions: z.string(),
        availability: z.string(),
        introduction: z.string(),
        reside_in_canada: z.boolean(),
        post_secondary_exp: z.string(),
        post_secondary_program: z.string()
    });

    const {register, handleSubmit, formState, control} = useForm({resolver: zodResolver(schema)});

    const {errors} = formState;

    const {field: field} = useController({name: 'province', control});

    const {field: field1} = useController({name: 'pronoun', control})

    const handleProvinceSelectChange = (option) => {
        field.onChange(option.value)
    }

    const handlePronounSelectChange = (option) => {
        field1.onChange(option.target.value)
    }

    //function to save form values
    const handleSave = (formValues) => {
        console.log(formValues)
    };

    return (
        <div>
            <div className="m-2 shadow-lg bg-red-700 text-white rounded-md p-3">
                <h1 className="text-3xl"> Coach Application Form</h1>
                <p>Thank you for your interest. Please fill out the form below to apply to be a coach!.</p>
            </div>
            <div className="shadow-lg bg-slate-200 p-3 rounded-md m-2 coachApplicationForm">
                <form onSubmit={handleSubmit(handleSave)}>
                    <div>
                        <h1 className="text-xl">Personal Information</h1>
                        <label htmlFor="first_name">First Name: </label>
                        <input type="text"
                               className="rounded-md p-3 ml-5 w-50"
                               placeholder="Enter first name"
                               {...register("first_name")}
                        />
                        <div style={{color: "red"}}>
                            {errors.first_name?.message}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name:</label>
                        <input type="text"
                               className="rounded-md p-3 m-1 ml-7 w-50"
                               placeholder="Enter last name"
                               {...register("last_name")}
                        />
                        <div style={{color: "red"}}>
                            {errors.last_name?.message}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email"
                               className="p-3 m-1 w-50 rounded-md"
                               placeholder="name@example.com"
                               {...register("email")}
                        />
                        <div style={{color: "red"}}>
                            {errors.email?.message}
                        </div>
                    </div>
                    <div>
                        <label>Do you reside in Canada?</label>
                        <input type="text"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("reside_in_canada")}
                        />
                        <div style={{color: "red"}}>
                            {errors.reside_in_canada?.message}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="province">Province:</label>
                        <Select className="m-1 w-60 rounded-md"
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
                               className="p-3 m-1 ml-20 w-60 rounded-md"
                               placeholder="City"
                               {...register("city")}
                        />
                        <div style={{color: "red"}}>
                            {errors.city?.message}
                        </div>
                    </div>
                    <label htmlFor="address">Street Address:</label>
                    <input type="text"
                           className="p-3 m-1 w-60 rounded-md"
                           placeholder="123 street name"
                           {...register("address")}
                    />
                    <div style={{color: "red"}}>
                        {errors.address?.message}
                    </div>
                    <div>
                        <label htmlFor="postal_code">Postal Code:</label>
                        <input type="text"
                               className="p-3 m-1 ml-5 w-60 rounded-md"
                               placeholder="A4B1A1"
                               {...register("postal_code")}
                        />
                        <div style={{color: "red"}}>
                            {errors.postal_code?.message}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="date_of_birth">Date of Birth:</label>
                        <input type="date"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("date_of_birth")}
                        />
                        <div style={{color: "red"}}>
                            {errors.date_of_birth?.message}
                        </div>
                    </div>
                    <div>
                        <RadioGroup onChange={handlePronounSelectChange}>
                            <label>Pronouns:</label>
                            <FormControlLabel
                                control={
                                    <Radio
                                        value={"he/him"}
                                        onClick={() => setChecked(false)}
                                    />
                                }
                                label={"He/Him"}/>
                            <FormControlLabel
                                control={
                                    <Radio
                                        value={"she/her"}
                                        onClick={() => setChecked(false)}
                                    />} label={"She/Her"}/>
                            <FormControlLabel
                                control={
                                    <Radio

                                        onClick={() => setChecked(true)}
                                        value=""
                                        label="other"
                                    />
                                }
                                label={
                                    checked ? (
                                        <input
                                            disabled={!checked}
                                            label="Please Specify"
                                            name="other"
                                            className="p-3 m-1 w-60 rounded-md"
                                            placeholder="Enter Pronoun"
                                            onChange={handlePronounSelectChange}
                                        />
                                    ) : (
                                        "Other"
                                    )
                                }
                            />
                        </RadioGroup>
                        <div style={{color: "red"}}>
                            {errors.pronoun?.message}
                        </div>
                        <div>
                            <label>Self-Identification:</label>
                            <input type="text"
                                   className="p-3 m-1 ml-4 w-60 rounded-md"
                                   {...register("self_identification")}
                            />
                            <div style={{color: "red"}}>
                                {errors.self_identification?.message}
                            </div>
                        </div>
                    </div>
                    <h1 className="text-xl">Post-Secondary Experience</h1>
                    <div>
                        <label>Post-secondary institution(s) attended:</label>
                        <input type="text"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("institutions")}
                        />
                        <div style={{color: "red"}}>
                            {errors.institutions?.message}
                        </div>
                    </div>
                    <div>
                        <label>Name of the program you attended:</label>
                        <input type="text"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("post_secondary_program")}
                        />
                        <div style={{color: "red"}}>
                            {errors.post_secondary_program?.message}
                        </div>
                    </div>
                    <div>
                        <label>Have you ever worked at a publicly-funded post-secondary institution:</label>
                        <input type="text"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("post_secondary_exp")}
                        />
                        <div style={{color: "red"}}>
                            {errors.post_secondary_exp?.message}
                        </div>
                    </div>
                    <div>
                        <label>Years of experience:</label>
                        <input type="number"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("years_of_experience")}
                        />
                        <div style={{color: "red"}}>
                            {errors.years_of_experience?.message}
                        </div>
                    </div>
                    <div>
                        <label>Resume URL:</label>
                        <input type="text"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("resume_url")}
                        />
                        <div style={{color: "red"}}>
                            {errors.resume_url?.message}
                        </div>
                    </div>
                    <div>
                        <label>are you the first/first generation of your family to attend post-secondary:</label>
                        <input type="text"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("gen_status")}
                        />
                        <div style={{color: "red"}}>
                            {errors.gen_status?.message}
                        </div>
                    </div>
                    <div>
                        <label>Languages spoken:</label>
                        <input type="text"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("languages")}
                        />
                        <div style={{color: "red"}}>
                            {errors.languages?.message}
                        </div>
                    </div>
                    <div>
                        <label>Availability:</label>
                        <input type="text"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("languages")}
                        />
                        <div style={{color: "red"}}>
                            {errors.languages?.message}
                        </div>
                    </div>
                    <div>
                        <label>Why do you think you would be a great CHEC Coach?</label>
                        <input type="text"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               {...register("introduction")}
                        />
                        <div style={{color: "red"}}>
                            {errors.introduction?.message}
                        </div>
                    </div>
                    <button className="bg-red-400 p-3 rounded-md hover:bg-red-200 m-2 ml-2" type="submit">Apply</button>
                </form>
            </div>
        </div>
    );
}
export default CoachApplication