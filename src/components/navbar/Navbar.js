import React from 'react'
import logo from './../../images/logo.jpg';
import { useNavigate  } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="px-[10%] h-[75px] w-full bg-white fixed top-0 z-10 shadow-md">
        <div className="flex flex-row items-center h-full justify-between">
            <div className="flex flex-row items-center">
                <img src={logo} className="w-[135px] mr-[64px] cursor-pointer" alt="Comapny Logo" onClick={()=>{navigate("/")}}/>
                <div className="flex flex-row font-[600] text-[16px] leading-[22px] gap-[32px]">
                    <div onClick={()=>{navigate("/")}} className="cursor-pointer">
                        Home
                    </div>
                    <div onClick={()=>{navigate("/about-us")}} className="cursor-pointer">
                        About Us
                    </div>
                    <div onClick={()=>{navigate("/contact-us")}} className="cursor-pointer">
                        Contact Us
                    </div>
                    <div onClick={()=>{navigate("/coaches")}} className="cursor-pointer">
                        Coaches
                    </div>
                    <div onClick={()=>{navigate("/students")}} className="cursor-pointer">
                        Students
                    </div>
                    <div onClick={()=>{navigate("/donate")}} className="cursor-pointer">
                        Donate
                    </div>
                </div>
            </div>
            <button className="btn_primary h-[42px] px-[16px] bg-[#E2E8F0] font-[600] text-[16px] text-[#172E38] rounded-[4px] hover:bg-[#34345c] hover:text-white transition-colors duration-300" onClick={()=>{navigate("/student-application")}}>
                Apply Now
            </button>
        </div>
    </div>
  )
}

export default Navbar