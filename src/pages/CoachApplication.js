import React,{useState} from "react";
import { string, z} from "zod";
import {useController, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Select from "react-select";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";


const CoachApplication = () => {
    const [checked, setChecked] = useState(null);
    const [expChecked, setExpChecked] = useState(false);
    const [expOtherChecked, setExpOtherChecked] = useState(false);

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
        years_of_experience: z.string().default("0"),
        resume_url: z.any(),
        self_identification: z.string(),
        gen_status: z.string(),
        languages: z.string(),
        institutions: z.string(),
        availability: z.string(),
        introduction: z.string(),
        reside_in_canada: z.boolean(),
        post_secondary_exp: z.string().min(1),
        post_secondary_program: z.string()
    });

    const {register, handleSubmit, formState, control} = useForm({resolver: zodResolver(schema)});

    const {errors} = formState;

    const {field: field} = useController({name: 'province', control});
    const {field: field1} = useController({name: 'pronoun', control});
    const {field: genStatusInput} = useController({name: 'gen_status', control});
    const {field: yearsOfExp} = useController({name: 'years_of_experience', control});
    const {field: postSecondaryExp} = useController({name: 'post_secondary_exp', control});
    const {field: selfIdentification} = useController({name: 'self_identification', control});
    const {field: resideInCanada} = useController({name: 'reside_in_canada', control});

    const handleProvinceSelectChange = (option) => {
        field.onChange(option.value)
    }

    const handlePronounSelectChange = (option) => {
        field1.onChange(option.target.value)
    }
    const handleGenStatusSelectChange = (option) => {
        genStatusInput.onChange(option.target.value)
    }
    const handleYearsOfExpSelectChange = (option) => {
        yearsOfExp.onChange(option.target.value)
    }
    const handlePostSecondaryExpSelectChange = (option) => {
        postSecondaryExp.onChange(option.target.value)
    }
    const handleIdentificationSelectChange = (option) => {
        selfIdentification.onChange(option.target.value)
    }
    const handleResidencySelectChange = (option) => {
        let result;
        if (option.target.value && typeof option.target.value === "string") {
            if (option.target.value.toLowerCase() === "true") result = true;
            if (option.target.value.toLowerCase() === "false") result = false;
        }
        resideInCanada.onChange(result)
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
                        <RadioGroup onChange={handleResidencySelectChange}>
                            <div>
                                <Radio value={true}></Radio>
                                <label>Yes</label>
                            </div>
                            <div>
                                <Radio value={false}></Radio>
                                <label>No</label>
                            </div>

                        </RadioGroup>
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
                            <label>Do you self identify as:</label>
                            <RadioGroup onChange={handleIdentificationSelectChange}>
                                <div>
                                    <Radio value={"black"}></Radio>
                                    <label>Black</label>
                                </div>
                                <div>
                                    <Radio value={"indigenous"}></Radio>
                                    <label>Indigenous</label>
                                </div>
                                <div>
                                    <Radio value={"person of colour"}></Radio>
                                    <label>Person of Colour</label>
                                </div>
                                <div>
                                    <Radio value={"none of the above"}></Radio>
                                    <label>None of the above</label>
                                </div>
                            </RadioGroup>
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
                            <RadioGroup onChange={handlePostSecondaryExpSelectChange}>
                                <FormControlLabel
                                    control={
                                    <Radio
                                        onClick={() => {
                                            setExpChecked(true);
                                            setExpOtherChecked(false);
                                        }}
                                        value="yes"
                                        label="other"
                                    />

                                    }
                                    label={
                                        expChecked ? (
                                            <input
                                                type="number"
                                                className="p-3 m-1 w-60 rounded-md"
                                                placeholder="Years of experience"
                                                onChange={handleYearsOfExpSelectChange}/>
                                        ) : ("Yes")
                                    }
                                    />
                                <div style={{color: "red"}}>
                                    {errors.years_of_experience?.message}
                                </div>
                                <FormControlLabel
                                    control={
                                        <Radio
                                            onClick={() => {
                                                setExpChecked(false);
                                                setExpOtherChecked(false);
                                            }}
                                            value="No"
                                        />
                                    }
                                    label={"No"}/>
                                <FormControlLabel
                                    control={
                                        <Radio
                                            onClick={() => {
                                                setExpChecked(false);
                                                setExpOtherChecked(true);
                                            }}
                                            value=""
                                            label="other"
                                        />
                                    }
                                    label={
                                          expOtherChecked ?(
                                            <input
                                                className="p-3 m-1 w-60 rounded-md"
                                                placeholder="Please Specify"
                                                onChange={handlePostSecondaryExpSelectChange}
                                            />
                                        ): ("Other")
                                    }/>
                            </RadioGroup>
                        <div style={{color: "red"}}>
                            {errors.post_secondary_exp?.message}
                        </div>
                    </div>
                    <div>
                        <label>Resume URL:</label>
                        <input type="file"
                               className="p-3 m-1 ml-4 w-60 rounded-md"
                               accept={".pdf, .docx, .doc"}
                               {...register("resume_url")}
                        />
                        <div style={{color: "red"}}>
                            {errors.resume_url?.message}
                        </div>
                    </div>
                    <div>
                        <label>Were you:</label>
                        <RadioGroup onChange={handleGenStatusSelectChange}>
                            <div>
                                <Radio value={"first member of my family"}></Radio>
                                <label>The first person in your family to attend post-secondary education in Canada</label>
                            </div>
                            <div>
                                <Radio value={"first generation of my family"}></Radio>
                                <label>The first generation of your family to attend post-secondary education in Canada</label>
                            </div>
                            <div>
                                <Radio value={"Neither"}></Radio>
                                <label>Neither</label>
                            </div>
                        </RadioGroup>
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
                               {...register("availability")}
                        />
                        <div style={{color: "red"}}>
                            {errors.availability?.message}
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