import React, { useRef, useState } from 'react'
import { IoAddSharp } from "react-icons/io5";


const Form = ({ addNewUser }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const id = useRef(null);
    const number = useRef(null);
    const confirmPassword = useRef(null);

    const handleFormData = (event) => {
        event.preventDefault();
        if (fullName.trim() === "" || email.trim() === "" || password.trim() === "" || id.current.value.trim() === "" || number.current.value.trim() === "" || confirmPassword.current.value.trim() === "") {
            return null;
        }
        addNewUser(fullName, email, password, id.current.value, number.current.value, confirmPassword.current.value);
        setFullName("");
        setEmail("");
        setPassword("");
        id.current.value = "";
        number.current.value = "";
        confirmPassword.current.value = "";
    }
    return (
        <div className='w-full py-[40px] flex flex-col items-center gap-[16px] justify-center bg-[#02040a]'>
            <h1 className='text-white text-[24px]'>Registration</h1>
            <form onSubmit={handleFormData} className='min-w-[550px] bg-[#0d1116] p-[20px] border border-[#3d444d] rounded-[12px] flex flex-col items-center gap-[10px]'>
                <div className='flex items-start gap-[10px] w-full'>
                    <div className='flex flex-col items-start gap-[10px] w-full'>
                        <input value={fullName} onChange={(e) => setFullName(e.target.value)} className='outline-none text-[14px] placeholder:text-[#8b919a] border border-[#3d444d] text-white px-[14px] py-[10px] rounded-[4px] w-full h-full' type="text" placeholder='Full name' required />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none text-[14px] placeholder:text-[#8b919a] border border-[#3d444d] text-white px-[14px] py-[10px] rounded-[4px] w-full h-full' type="email" placeholder='Email' required />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='outline-none text-[14px] placeholder:text-[#8b919a] border border-[#3d444d] text-white px-[14px] py-[10px] rounded-[4px] w-full h-full' type="password" placeholder='Password' required />
                    </div>
                    <div className='flex flex-col gap-[10px] w-full'>
                        <input ref={id} className='outline-none text-[14px] placeholder:text-[#8b919a] border border-[#3d444d] text-white px-[14px] py-[10px] rounded-[4px] w-full h-full' type="text" placeholder='ID' required />
                        <input ref={number} className='outline-none text-[14px] placeholder:text-[#8b919a] border border-[#3d444d] text-white px-[14px] py-[10px] rounded-[4px] w-full h-full' type="tel" placeholder='Phone Number' required />
                        <input ref={confirmPassword} className='outline-none text-[14px] placeholder:text-[#8b919a] border border-[#3d444d] text-white px-[14px] py-[10px] rounded-[4px] w-full h-full' type="password" placeholder='Confirm Password' required />
                    </div>
                </div>
                <button type='submit' className='w-full h-full flex items-center justify-center gap-[4px] rounded-[4px] text-white bg-[#238636] py-[10px] cursor-pointer'><span className='text-[14px] font-bold'>Create</span> <span><IoAddSharp /></span></button>
            </form>
        </div>
    )
}

export default React.memo(Form);