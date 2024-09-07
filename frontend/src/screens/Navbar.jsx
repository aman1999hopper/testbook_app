import React from 'react'
import Button from '../components/button'

export const Navbar = () => {
  return (
    <div>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b boder-netural-700/80">

            <div className="container px-4 mx-auto realtive text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                <span className="text-xl tracking-tight font-bold">TestBook</span>
                </div>
                <ul className="hidden  sm:flex space-x-4">
                <li className="flex gap-4 md:gap-11 font-semibold ">
                    <a className="px-2 hover:underline decoration-red-400">Home</a>
                    <a className="px-2 hover:underline decoration-red-400">Pricing</a>
                    <a className="px-2 hover:underline decoration-red-400">Intro</a>
                    <a className="px-2 hover:underline decoration-red-400">About</a>
                </li>
                </ul>
                <div className="hidden sm:flex space-x-4">
                <div className='py-1 px-1 border rounded-md hover:bg-gray-800 hover:text-white'><Button value={"Signup"} /></div>
                <div className='bg-gradient-to-r from-blue-500 to-blue-800 py-1 px-2 text-nowrap rounded-md text-white'><Button value={"Get Started"} /></div>
                </div>
            </div>
            </div>
        </nav>
    </div>
  )
}
