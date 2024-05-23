import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    return (
        <div>
            <header class="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-gray-300">
                <a class="mr-6 gap-1 hidden lg:flex items-center" href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-8 w-8 text-[#8b4513]"
                    >
                        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                    </svg>
                    <span class="text-[#8b4513] font-bold text-xl">VedicHub</span>
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
                            class="group flex flex-1 list-none items-center justify-center space-x-1"
                            dir="ltr"
                        >
                            <a
                                class="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                data-radix-collection-item=""
                                href="/"
                            >
                                Home
                            </a>

                            <a
                                class="group inline-flex h-9 w-max items-center bg-gray-300 justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                data-radix-collection-item=""
                                href="/scriptures"
                            >
                                Scriptures
                            </a>
                            <a
                                class="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                data-radix-collection-item=""
                                href="/about"
                            >
                                About Us
                            </a>
                            <a
                                class="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                data-radix-collection-item=""
                                href="/contact"
                            >
                                Contact Us
                            </a>
                        </ul>
                    </div>
                    <div class="absolute left-0 top-full flex justify-center"></div>
                </nav>
                <div class="ml-auto flex gap-2">
                    <button class="inline-flex items-center bg-white justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-lg font-semibold">
                        Sign In
                    </button>
                    <button class="inline-flex items-center bg-black text-white justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-lg font-semibold">
                        Sign Up
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar
