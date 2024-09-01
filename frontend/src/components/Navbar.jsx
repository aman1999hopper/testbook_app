import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <nav class="sticky top-0 z-50 py-3 backdrop-blur-lg border-b boder-netural-700/80">

            <div class="container px-4 mx-auto realtive text-sm">
            <div class="flex justify-between items-center">
                <div class="flex items-center flex-shrink-0">
                <span class="text-xl tracking-tight font-bold">TestBook</span>
                </div>
                <ul class="hidden  sm:flex space-x-4">
                <li class="flex gap-4 md:gap-11 font-semibold ">
                    <a class="px-2 hover:underline decoration-red-400">Home</a>
                    <a class="px-2 hover:underline decoration-red-400">Pricing</a>
                    <a class="px-2 hover:underline decoration-red-400">Intro</a>
                    <a class="px-2 hover:underline decoration-red-400">About</a>
                </li>
                </ul>
                <div class="hidden sm:flex space-x-4">
                <a class="py-1 px-1 border rounded-md hover:bg-gray-800 hover:text-white">
                    SignUp
                </a>  
                <a class="bg-gradient-to-r from-blue-500 to-blue-800 py-1 px-2 text-nowrap rounded-md text-white">Create an account</a>
                </div>
            </div>
            </div>
        </nav>
    </div>
  )
}
