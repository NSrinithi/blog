import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (

        <footer className="mt-20 px-6 md:px-10 pb-6">

            <div className="
                max-w-6xl
                mx-auto
                border-t
                border-[#DCD8D1]
                pt-10
            ">

                <div className="
                    flex
                    flex-col
                    md:flex-row
                    items-start
                    md:items-center
                    justify-between
                    gap-8
                ">

                    {/* BRAND */}

                    <div>

                        <Link
                            to="/home"
                            className="
                                text-2xl
                                font-bold
                                tracking-tight
                                text-[#292943]
                                hover:text-[#5B5BD6]
                                transition
                                duration-300
                            "
                        >
                            YourBlog
                        </Link>

                        <p className="
                            mt-2
                            text-sm
                            text-[#77737D]
                            max-w-xs
                        ">
                            A little space for stories, ideas
                            and everything in between.
                        </p>

                    </div>


                    {/* LINKS */}

                    <div className="
                        flex
                        items-center
                        gap-6
                        text-sm
                        font-medium
                    ">

                        <Link
                            to="/home"
                            className="
                                text-[#65616B]
                                hover:text-[#5B5BD6]
                                transition
                            "
                        >
                            Home
                        </Link>

                        <Link
                            to="/blogs"
                            className="
                                text-[#65616B]
                                hover:text-[#5B5BD6]
                                transition
                            "
                        >
                            Blogs
                        </Link>

                        <Link
                            to="/about"
                            className="
                                text-[#65616B]
                                hover:text-[#5B5BD6]
                                transition
                            "
                        >
                            About
                        </Link>

                    </div>

                </div>


                {/* BOTTOM */}

                <div className="
                    mt-10
                    pt-5
                    border-t
                    border-[#E7E3DD]
                    flex
                    flex-col
                    md:flex-row
                    items-start
                    md:items-center
                    justify-between
                    gap-3
                ">

                    <p className="
                        text-xs
                        text-[#8B8790]
                    ">
                        © 2026 YourBlog. All rights reserved.
                    </p>

                    <p className="
                        text-xs
                        text-[#8B8790]
                    ">
                        Made with curiosity.
                    </p>

                </div>

            </div>

        </footer>

    )
}

export default Footer