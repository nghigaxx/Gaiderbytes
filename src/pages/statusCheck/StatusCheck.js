import React from 'react'
import { useState, useEffect } from "react";
import './statusCheck.css'
import checkIcon from './../../images/icons/check.svg'


const StatusCheck = () => {

    const [userType, setUserType] = useState(1);
    const [email, setEmail] = useState('');

    const handleUserType = (type) => {
        setUserType(type);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, User Type: ${userType}`);
    };

    return (
        <div>
            <div className='w-full h-auto bg-[#E2E8F0] mt-[64px] flex flex-col items-center rounded-[64px]'>
                <h1 className="font-[800] text-[40px] leading-[150%] pt-[32px]">Already Have an Account?</h1>
                <h2 className="pt-[32px] font-[700] text-[25px]">Check Your Match Status Here By Entering your Email and Account Type!</h2>
                <form className="pb-[32px] w-[450px] flex flex-col items-center" onSubmit={handleSubmit}>
                    <input className="h-[45px] w-full rounded-[6px] mt-[32px] px-[14px]" type="email" placeholder="Enter your email" value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
                    <input className="hidden" id="user_type_input" value={userType}></input>
                    <p className="text-start w-full py-[16px] font-[600] text-[16px] leading-[21.79px]">I am a...</p>
                    <div className="flex flex-row gap-[16px]">
                        <div className="w-full flex flex-row justify-center items-center w-[217px] px-[16px] py-[8px] font-[600] text-[24px] border border-black rounded-[4px] hover:border-[#34345c] hover:text-white hover:bg-[#34345c] transition-colors cursor-pointer text-center" onClick={()=>handleUserType(1)} id="student-button">
                            Student
                            {userType === 1 && <img src={checkIcon} className="ml-[8px]" alt="check icon"></img>}
                        </div>
                        <div className="flex flex-row justify-center items-center w-[217px] px-[16px] py-[8px] font-[600] text-[24px] border border-black rounded-[4px] hover:border-[#34345c] hover:text-white hover:bg-[#34345c] transition-colors  cursor-pointer text-center" onClick={()=>handleUserType(2)} id="coach-button">
                            Coach
                            {userType === 2 && <img src={checkIcon} className="ml-[8px]" alt="check icon"></img>}
                        </div>
                    </div>
                    <button className="mt-[32px] rounded-[4px] py-[8px] px-[16px] bg-red-400 hover:bg-red-200" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default StatusCheck