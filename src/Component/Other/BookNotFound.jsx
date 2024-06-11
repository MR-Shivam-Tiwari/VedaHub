import React from 'react'
import NotFound from '../Image/BookNotFound.png'
function BookNotFound() {
    return (
        <div>
            <div class="flex flex-col h-screen w-full bg-gradient-to-br from-[#4ECDC4] to-[#556270]">

                <main class="flex-1 flex items-center justify-center relative">
                    <div class="absolute flex flex-col items-center">
                        <div class="relative">
                            <img
                                src={NotFound}
                                alt="Robot holding book"
                                class="w-40 h-40 md:w-60 md:h-60 rounded-lg"
                                width="200"
                                height="200"
                                style={{ aspectRatio: "200/200", objectFit: "cover", filter: "brightness(70%)" }}
                            />
                            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-[#2C3E50]">
                                
                            </div>
                        </div>
                        <h1 class="text-4xl lg:text-7xl text-center  font-bold text-[#2C3E50] mt-6">Book Not Available</h1>
                        <p class="text-2xl md:text-4xl font-bold text-[#2C3E50] mt-4">Coming Soon</p>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default BookNotFound
