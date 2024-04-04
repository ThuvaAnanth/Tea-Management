import React from 'react'
import Logo from '../src/assets/Logo.png'

export default function Navbar() {
  return (
    <div className='flex justify-between  mt-4 px-14 '>
        <div>
            <img  className='w-[120px] h-[48px] ' src={Logo} alt='Logo'/>
        </div>
        <div>
            <ul className='flex gap-6'>
              
                <li className='hover:text-[#75d705] text-green-900 hover:border-solid cursor-pointer text-xl font-serif'>Home</li>
                <li className='hover:text-[#75d705] text-green-900 hover:border-solid cursor-pointer text-xl font-serif'>About</li>
                <li className='hover:text-[#75d705] text-green-900 hover:border-solid cursor-pointer text-xl font-serif'>Product</li>
                <li className='hover:text-[#75d705] text-green-900 hover:border-solid cursor-pointer text-xl font-serif'>Contact</li>
            
            </ul>
        </div>
        <div>
            <h1 className='Navbart_btn'>Log Out</h1>
        </div>
    </div>
  )
}
