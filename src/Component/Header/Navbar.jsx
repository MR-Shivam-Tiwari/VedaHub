import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo  from '../Image/logopng.png'
function Navbar() {
    const navigate = useNavigate();
    return (
        <div>
            <header class="flex josefin-sans-bold  h-20 w-full shrink-0 items-center px-4 md:px-6 bg-gray-300">
                <a class="mr-6 gap-1  lg:flex flex  items-center cursor-pointer" onClick={() => navigate('/')}>
                    {/* <img src={logo} alt="" className='h-9 w-9 mb-2 border-gray-300 rounded-full' /> */}
                    <span class="text-[#8b4513] font-bold text-xl">ShastraSangrah</span>
                </a>
                <nav
                    aria-label="Main"
                    data-orientation="horizontal"
                    dir="ltr"
                    class="relative z-10 max-w-max flex-1 items-center justify-center hidden lg:flex"
                >
                    <div style={{ position: "relative" }}>
                        <ul
                            data-orientation="horizontal"
                            class="group flex flex-1  list-none items-center justify-center space-x-1"
                            dir="ltr"
                        >
                            <a
                                class="group inline-flex h-9 w-max cursor-pointer items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                data-radix-collection-item=""
                                onClick={() => navigate('/')}
                            >
                                Home
                            </a>

                            <a
                                class="group inline-flex h-9 w-max items-center cursor-pointer bg-gray-300 justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                data-radix-collection-item=""
                                onClick={() => navigate('/scriptures/BhagvadGeeta')}
                            >
                                Scriptures
                            </a>
                            <a
                                class="group inline-flex h-9 w-max items-center cursor-pointer justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                data-radix-collection-item=""
                                onClick={() => navigate('/about')}
                            >
                                About Us
                            </a>
                            <a
                                class="group inline-flex h-9 w-max items-center cursor-pointer justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                data-radix-collection-item=""
                                onClick={() => navigate('/contact')}
                            >
                                Contact Us
                            </a>
                        </ul>
                    </div>
                    <div class="absolute left-0 top-full flex justify-center"></div>
                </nav>
                <div class="ml-auto flex gap-2">
                    <button class="inline-flex items-center bg-white justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-lg font-semibold">
                        Report Bug
                    </button>
                    {/* <button class="inline-flex items-center bg-black text-white justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-lg font-semibold">
                        Sign Up
                    </button> */}
                </div>
            </header>
        </div>
    )
}

export default Navbar
