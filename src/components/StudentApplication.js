import {useState, React} from "react";
import {useForm, useController} from "react-hook-form"
import Select from "react-select"
import {zodResolver} from "@hookform/resolvers/zod";
import  {z, string} from "zod";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";



    const StudentApplication = ({onSave}) => {

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
            institution_name: z.string().min(1),
            program_name: z.string().min(1),
            emergency_contact_first_name: z.string().regex(/^[A-Za-z]+$/).min(2).max(20),
            emergency_contact_last_name: z.string().regex(/^[A-Za-z]+$/).min(2).max(20),
            emergency_contact_phone: z.string().regex(/^[0-9]+$/).length(10),
            emergency_contact_relation: z.string().min(1)
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
            onSave(formValues)
        };

        return (
            <div>
                <div className="m-2 shadow-lg bg-red-700 text-white rounded-md p-3">
                <h1 class="text-3xl"> Student Application Form</h1>
                    <p>Thank you for your interest. Please fill out the form below to apply to receive coaching.</p>
                </div>
                <div className="shadow-lg bg-slate-200 p-3 rounded-md m-2">
                <div className="studentApplicationForm">
                    
                    <form onSubmit={handleSubmit(handleSave)}>
                        <div>
                            <h1 className="text-xl">Personal Information</h1>
                            <label htmlFor="first_name">First Name: </label>
                            <input type="text" className="rounded-md p-3 ml-5 w-50" type="text"  placeholder="Enter first name"
                                   {...register("first_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.first_name?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last_name">Last Name:</label>
                            <input type="text" className="rounded-md p-3 m-1 ml-7 w-50" placeholder="Enter last name"
                                   {...register("last_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.last_name?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" placeholder="name@example.com" className="p-3 m-1 w-50 rounded-md"
                                   {...register("email")}
                            />
                            <div style={{color: "red"}}>
                                {errors.email?.message}
                            </div>
                        </div>
                        <div>
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
                                <input type="text" className="p-3 m-1 ml-20 w-60 rounded-md" placeholder="City"
                                       {...register("city")}
                                />
                                <div style={{color: "red"}}>
                                    {errors.city?.message}
                                </div>
                            </div>
                            <label htmlFor="address">Street Address:</label>
                            <input type="text" className="p-3 m-1 w-60 rounded-md" placeholder="123 street name"
                                   {...register("address")}
                            />
                            <div style={{color: "red"}}>
                                {errors.address?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="postal_code">Postal Code:</label>
                            <input type="text" className="p-3 m-1 ml-5 w-60 rounded-md" placeholder="A4B1A1"
                                   {...register("postal_code")}
                            />
                            <div style={{color: "red"}}>
                                {errors.postal_code?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="date_of_birth">Date of Birth:</label>
                            <input type="date" className="p-3 m-1 ml-4 w-60 rounded-md"
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
                        </div>
                        <div>
                            <h1 className="text-xl">Institution Information</h1>
                            <label htmlFor="institution_name">Name of Post-secondary institution:</label>
                            <input type="text"className="p-3 m-1 w-60 rounded-md"  placeholder="Enter name of school"
                                   {...register("institution_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.institution_name?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="program_name">Program Name:</label>
                            <input type="text"className="p-3 m-1 w-60 rounded-md" placeholder="Enter name of program"
                                   {...register("program_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.program_name?.message}
                            </div>
                        </div>
                        <h1 className="text-xl">Emergency Contact</h1>
                        <div>
                            <label htmlFor="emergency_contact_first_name">First Name:</label>
                            <input type="string" className="p-3 m-1 w-60 rounded-md"placeholder="Enter contact's first name"
                                   {...register("emergency_contact_first_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.emergency_contact_first_name?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_last_name">Last Name:</label>
                            <input type="string" className="p-3 m-1 w-60 rounded-md"placeholder="Enter contact's last name"
                                   {...register("emergency_contact_last_name")}
                            />
                            <div style={{color: "red"}}>
                                {errors.emergency_contact_last_name?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_phone">Phone Number:</label>
                            <input type="string" className="rounded-md p-3 m-1" placeholder="1234567890"
                                   {...register("emergency_contact_phone")}
                            />
                            <div style={{color: "red"}}>
                                {errors.emergency_contact_phone?.message}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="emergency_contact_relation">Emergency Contact Relation:</label>
                            <input type="string" className="rounded-md p-3 m-1" placeholder="Contact's relation to you"
                                   {...register("emergency_contact_relation")}
                            />
                            <div style={{color: "red"}}>
                                {errors.emergency_contact_relation?.message}
                            </div>
                        </div>
                        <button className="bg-red-400 p-3 rounded-md hover:bg-red-200 m-2 ml-2" type="submit">Apply</button>
                    </form>
                </div>
                </div>
            </div>

        );
    }

export default StudentApplication
