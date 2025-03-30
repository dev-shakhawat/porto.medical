import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='py-3'>
        <div className="container">
            <div className="flex py-3 justify-between  ">
                <img src="./images/logo.png" alt="logo" />
                <div className="flex items-center  gap-7 ">
                    <ul className="flex gap-7 ">
                        <li><a href="#" className='navLink'>home</a></li>
                        <li><a href="#" className='navLink'>about us</a></li>
                        <li><a href="#" className='navLink'>our doctors</a></li>
                        <li><a href="#" className='navLink'>departments</a></li>
                        <li><a href="#" className='navLink'>blog</a></li>
                        <li><a href="#" className='navLink'>contact us</a></li>
                    </ul>
                    <button type="button"><IoSearchOutline /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar