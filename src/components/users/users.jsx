import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { PiUserLight } from "react-icons/pi";



const Users = ({ users, deleteUser }) => {
    console.log(users);
    return (
        <section className='users_wrapper container mx-auto w-full grid grid-cols-5 gap-[16px] bg-[#02040a]'>
            {
                users?.map((user) => (
                    <div key={user.id} className='users_card text-white rounded-[10px] flex flex-col bg-[#0d1116] border border-[#3d444d]'>
                        <div className='flex items-center justify-between p-[12px] text-[#8b919a] border-b border-[#3d444d] '>
                            <PiUserLight className='cursor-pointer size-[26px]' />
                            <AiOutlineDelete className='cursor-pointer size-[18px]' onClick={() => deleteUser(user.id)} />
                        </div>
                        <p className='p-[12px] text-[14px] text-[#8b919a] border-b border-[#3d444d] line-clamp-1 truncate'>ID: <span className='text-white'>{user.id}</span></p>
                        <p className='p-[12px] text-[14px] text-[#8b919a] border-b border-[#3d444d] line-clamp-1 truncate'>Full Name: <span className='text-white'>{user.fullName}</span></p>
                        <p className='p-[12px] text-[14px] text-[#8b919a] border-b border-[#3d444d] line-clamp-1 truncate'>Email: <span className='text-white'>{user.email}</span></p>
                        <p className='p-[12px] text-[14px] text-[#8b919a] border-b border-[#3d444d] line-clamp-1 truncate'>Number: <span className='text-white'>{user.number}</span></p>
                    </div>
                ))
            }
        </section>
    )
}

export default React.memo(Users);