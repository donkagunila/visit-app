const HomePage = () => {
    return (
        <div>
            <div className="bg-gradient-to-b from-[#101212] relative to-[#08201D]">
                <header className="absolute inset-x-0 top-0 z-10 w-full">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 lg:h-20 md:px-[180px]">
                            <div className="flex-shrink-0 mr-3">
                                <a href="#" title="" className="flex text-white items-center gap-2 text-lg">
                                    <img className="w-auto h-8"
                                         src="/img/logo.svg"
                                         alt=""/>
                                    Moyo Safi Farms
                                </a>
                            </div>


                            <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">


                                <a href="/auth/login" title=""
                                   className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-primary hover:bg-white/40 focus:bg-white/40 rounded-lg"
                                   role="button"> Login </a>
                            </div>

                            <button type="button"
                                    className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800">
                                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>

                                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                <section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
                    <div className="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
                        <img className="hidden w-full lg:block"
                             src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png"
                             alt=""/>
                        <img className="block w-full lg:hidden"
                             src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards-mobile.png"
                             alt=""/>
                    </div>

                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
                        <div className="max-w-xl mx-auto text-center">
                            <h1 className="text-4xl font-bold sm:text-6xl">
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white"> Simplified Farm Management</span>
                            </h1>
                            <p className="mt-5 text-base text-white sm:text-xl">Streamline operations, track
                                productivity, and boost profitability with our all-in-one poultry farm management
                                solution.</p>

                            <a href="#" title=""
                               className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-primary rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
                               role="button">
                                Request a Demo
                                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </a>

                            <div
                                className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0" width="31" height="25" viewBox="0 0 31 25"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                                            stroke="#28CC9D"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                                            stroke="#28CC9D"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z"
                                            fill="#0B1715"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z"
                                            fill="#0B1715"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <p className="ml-3 text-sm text-white">Over 12,000 students joined</p>
                                </div>

                                <div className="flex items-center">
                                    <svg className="flex-shrink-0" width="23" height="23" viewBox="0 0 23 23"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M7 12.6667L9.25 15L16 8" stroke="#28CC9D" stroke-width="1.5"
                                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className="ml-3 text-sm text-white">No yearly charges, maximum limits</p>
                                </div>

                                <div className="flex items-center">
                                    <svg className="flex-shrink-0" width="20" height="24" viewBox="0 0 20 24"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17 11H3C1.89543 11 1 11.8954 1 13V21C1 22.1046 1.89543 23 3 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11Z"
                                            stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path
                                            d="M10 19C11.1046 19 12 18.1046 12 17C12 15.8954 11.1046 15 10 15C8.89543 15 8 15.8954 8 17C8 18.1046 8.89543 19 10 19Z"
                                            stroke="#28CC9D" stroke-width="1.5" stroke-miterlimit="10"
                                            stroke-linecap="round" stroke-linejoin="round"/>
                                        <path
                                            d="M15 7V6C15.0131 4.68724 14.5042 3.42303 13.5853 2.48539C12.6664 1.54776 11.4128 1.01346 10.1 1H10C8.68724 0.986939 7.42303 1.4958 6.48539 2.41469C5.54776 3.33357 5.01346 4.58724 5 5.9V7"
                                            stroke="#28CC9D"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <p className="ml-3 text-sm text-white">Secured & safe online payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
                        <div>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-blue-100" width="72" height="75" viewBox="0 0 72 75"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z"/>
                                </svg>
                                <svg className="absolute text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                    />
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-black">Task Management</h3>
                            <p className="mt-4 text-base text-gray-600">Organize and automate daily tasks like feeding,
                                cleaning, and health checks.</p>
                        </div>

                        <div>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-orange-100" width="62" height="64" viewBox="0 0 62 64"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"/>
                                </svg>
                                <svg className="absolute text-orange-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-black">Feed Inventory</h3>
                            <p className="mt-4 text-base text-gray-600">Track feed levels, manage orders, and avoid
                                shortages with real-time inventory tracking.</p>
                        </div>

                        <div>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-green-100" width="66" height="68" viewBox="0 0 66 68"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z"/>
                                </svg>
                                <svg className="absolute text-green-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>

                        <div>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-purple-100" width="66" height="68" viewBox="0 0 66 68"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z"/>
                                </svg>
                                <svg className="absolute text-purple-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-black">Production Tracking</h3>
                            <p className="mt-4 text-base text-gray-600">Monitor egg production, sales, and expenses to
                                optimize productivity.</p>
                        </div>

                        <div>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-gray-100" width="65" height="70" viewBox="0 0 65 70"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z"/>
                                </svg>
                                <svg className="absolute text-gray-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-black">Reports & Analytics</h3>
                            <p className="mt-4 text-base text-gray-600">Gain insights with detailed reports and
                                analytics to make informed decisions</p>
                        </div>

                        <div>
                            <div className="relative flex items-center justify-center mx-auto">
                                <svg className="text-yellow-100" width="78" height="78" viewBox="0 0 78 78"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.49996 28.0002C4.09993 47.9554 14.1313 66.7885 35.5 71.5002C56.8688 76.2119 68.0999 58.4553 72.5 38.5001C76.9 18.5449 68.3688 12.711 47 7.99931C25.6312 3.28759 12.9 8.04499 8.49996 28.0002Z"/>
                                </svg>
                                <svg className="absolute text-yellow-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                    />
                                </svg>
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-black">Multi-User Access</h3>
                            <p className="mt-4 text-base text-gray-600">Allow multiple users to collaborate and manage
                                the farm from anywhere.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
                        <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                            <div className="overflow-hidden aspect-w-3 aspect-h-4">
                                <img className="object-cover object-top origin-top scale-150"
                                     src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                                     alt=""/>
                            </div>

                            <div className="relative">
                                <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                                    <img className="object-cover scale-150 lg:origin-bottom-right"
                                         src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
                                         alt=""/>
                                </div>

                                <div className="absolute inset-0 grid w-full h-full place-items-center">
                                    <button type="button"
                                            className="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20">
                                        <svg className="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="absolute -translate-x-1/2 left-1/2 -top-16">
                                <img className="w-32 h-32"
                                     src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
                                     alt=""/>
                            </div>
                        </div>

                        <div className="flex flex-col items-start xl:px-16">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow
                                business with Celebration.</h2>
                            <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                            <a href="/contact-us" title=""
                               className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-primary to-cyan-600"
                               role="button">
                                Contact Us
                                <svg className="w-5 h-5 ml-8 -mr-1" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-10 bg-gradient-to-r from-primary to-cyan-600 sm:py-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center sm:flex sm:items-center sm:justify-center sm:text-left">
                        <h2 className="text-4xl font-bold text-white">Want to see how the platform works?</h2>

                        <a href="#" title=""
                           className="inline-flex items-center justify-center flex-shrink-0 px-4 py-4 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-white rounded-md sm:mt-0 sm:ml-8 lg:ml-16 hover:bg-yellow-400 focus:bg-yellow-400"
                           role="button">
                            Request a Demo
                        </a>
                    </div>
                </div>
            </section>


            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell
                            our story</h2>

                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                        <div>
                            <h3 className="font-bold text-7xl">
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600"> 12+ </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Farms Managed</p>
                            <p className="text-base mt-0.5 text-gray-500">Trusted by over 12 poultry farms to
                                streamline their operations and increase productivity."</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-7xl">
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600"> 30 % </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Increase in Productivity</p>
                            <p className="text-base mt-0.5 text-gray-500">Farmers using Farm Brain have reported an
                                average of 30% increase in productivity.</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-7xl">
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600"> 5,000+ </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Batches Tracked</p>
                            <p className="text-base mt-0.5 text-gray-500">Accurately tracking over 5,000 Batches every
                                month to ensure optimal production of eggs</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">Trusted by world
                            class companies, design teams & popular designers</h2>
                    </div>

                    <div
                        className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
                        <div>
                            <img className="object-contain w-full h-6 mx-auto"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png"
                                 alt=""/>
                        </div>

                        <div>
                            <img className="object-contain w-full h-8 mx-auto"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
                                 alt=""/>
                        </div>

                        <div>
                            <img className="object-contain w-full h-8 mx-auto"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
                                 alt=""/>
                        </div>

                        <div>
                            <img className="object-contain w-full mx-auto h-7"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
                                 alt=""/>
                        </div>

                        <div className="hidden md:block">
                            <img className="object-contain w-full h-8 mx-auto"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png"
                                 alt=""/>
                        </div>

                        <div className="hidden md:block">
                            <img className="object-contain w-full h-8 mx-auto"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png"
                                 alt=""/>
                        </div>

                        <div className="hidden md:block">
                            <img className="object-contain w-full h-8 mx-auto"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png"
                                 alt=""/>
                        </div>

                        <div className="hidden md:block">
                            <img className="object-contain w-full h-8 mx-auto"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png"
                                 alt=""/>
                        </div>

                        <div className="hidden md:block">
                            <img className="object-contain w-full h-8 mx-auto"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png"
                                 alt=""/>
                        </div>

                        <div className="hidden md:block">
                            <img className="object-contain w-full mx-auto h-7"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png"
                                 alt=""/>
                        </div>

                        <div className="hidden md:block">
                            <img className="object-contain w-full h-8 mx-auto"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png"
                                 alt=""/>
                        </div>

                        <div className="hidden md:block">
                            <img className="object-contain w-full h-8 mx-auto"
                                 src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png"
                                 alt=""/>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                    </div>

                    <p className="mt-10 text-base text-center text-gray-500 md:mt-20">and, 1000+ more companies</p>
                </div>
            </section>


            <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                        <div>
                            <p className="text-base text-gray-500">Company</p>

                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="/about-us" title="about-us"
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> About
                                        Us </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Features </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Works </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Career </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base text-gray-500">Help</p>

                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Customer
                                        Support </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Delivery
                                        Details </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms
                                        & Conditions </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Privacy
                                        Policy </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base text-gray-500">Resources</p>

                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Free
                                        eBooks </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Development
                                        Tutorial </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> How
                                        to - Blog </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> YouTube
                                        Playlist </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base text-gray-500">Extra Links</p>

                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="#" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Customer
                                        Support </a>
                                </li>
                                <li>
                                    mail:
                                    <a href="mailto:donkagunila@gmail.com" target="_blank" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        donkagunila@gmail.com
                                    </a>
                                </li>
                                <li>
                                    Tel:
                                    <a href="tel:+255652441424" title=""
                                       className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                        0652441424
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <hr className="mt-16 mb-10 border-gray-800"/>

                    <div className="flex flex-wrap items-center justify-between">
                        <img className="h-8 auto md:order-1"
                             src="/img/logo.svg" alt=""/>

                        <ul className="hidden items-center space-x-3 md:order-3">
                            <li>
                                <a href="#" title=""
                                   className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor">
                                        <path
                                            d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title=""
                                   className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor">
                                        <path
                                            d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="" title=""
                                   className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor">
                                        <path
                                            d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path
                                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>


                        </ul>

                        <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">©
                            Copyright 2024, All Rights Reserved by Farm Brain</p>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default HomePage;