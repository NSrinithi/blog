import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

function Navbar() {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                setIsLogin(true);

                if (user.uid === "RDXDC00vJybJqXsUOQlERDPhPTL2") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }

            } else {
                setIsLogin(false);
                setIsAdmin(false);
            }

        });

        return () => unsubscribe();

    }, []);


    function handleLogOut() {

        signOut(auth)
            .then(() => {
                console.log("Logged out successfully");

                setIsLogin(false);
                setIsAdmin(false);

                navigate("/login");
            })
            .catch((error) => {
                console.log("Logout error:", error);
            });

    }


    return (

        <nav className="w-full px-6 md:px-10 pt-6">

            <div className="
                max-w-6xl
                mx-auto
                flex
                items-center
                justify-between
                pb-5
                border-b
                border-[#DCD8D1]
            ">

                {/* LOGO */}

                <Link
                    to="/home"
                    className="
                        group
                        flex
                        items-center
                        gap-3
                    "
                >

                  

                    <div className="leading-none">

                        <h1 className="
                            text-xl
                            md:text-2xl
                            font-bold
                            tracking-tight
                            text-[#292943]
                        ">
                            YourBlog
                        </h1>

                        <p className="
                            text-[10px]
                            tracking-[0.25em]
                            uppercase
                            text-[#8B8790]
                            mt-1
                        ">
                            Stories & ideas
                        </p>

                    </div>

                </Link>


                {/* NAVIGATION */}

                <div className="
                    hidden
                    md:flex
                    items-center
                    gap-8
                    text-[15px]
                    font-medium
                ">

                    <Link
                        to="/home"
                        className="
                            relative
                            text-[#454354]
                            hover:text-[#5B5BD6]
                            transition
                            duration-300
                            after:absolute
                            after:left-0
                            after:-bottom-2
                            after:w-0
                            after:h-[2px]
                            after:bg-[#5B5BD6]
                            hover:after:w-full
                            after:transition-all
                            after:duration-300
                        "
                    >
                        Home
                    </Link>


                    <Link
                        to="/blogs"
                        className="
                            relative
                            text-[#454354]
                            hover:text-[#5B5BD6]
                            transition
                            duration-300
                            after:absolute
                            after:left-0
                            after:-bottom-2
                            after:w-0
                            after:h-[2px]
                            after:bg-[#5B5BD6]
                            hover:after:w-full
                            after:transition-all
                            after:duration-300
                        "
                    >
                        Blogs
                    </Link>


                    <Link
                        to="/about"
                        className="
                            relative
                            text-[#454354]
                            hover:text-[#5B5BD6]
                            transition
                            duration-300
                            after:absolute
                            after:left-0
                            after:-bottom-2
                            after:w-0
                            after:h-[2px]
                            after:bg-[#5B5BD6]
                            hover:after:w-full
                            after:transition-all
                            after:duration-300
                        "
                    >
                        About
                    </Link>


                    {/* PROFILE / DASHBOARD */}

                    {isLogin && (

                        <Link
                            to={
                                isAdmin
                                    ? "/adminDash"
                                    : "/userDash"
                            }
                            className="
                                relative
                                text-[#454354]
                                hover:text-[#5B5BD6]
                                transition
                                duration-300
                                after:absolute
                                after:left-0
                                after:-bottom-2
                                after:w-0
                                after:h-[2px]
                                after:bg-[#5B5BD6]
                                hover:after:w-full
                                after:transition-all
                                after:duration-300
                            "
                        >
                            Profile
                        </Link>

                    )}

                </div>


                {/* AUTH BUTTON */}

                {isLogin ? (

                    <button
                        onClick={handleLogOut}
                        className="
                            px-5
                            py-2.5
                            rounded-full
                            border-2
                            border-[#292943]
                            text-[#292943]
                            text-sm
                            font-semibold
                            hover:bg-[#292943]
                            hover:text-white
                            transition
                            duration-300
                        "
                    >
                        Logout
                    </button>

                ) : (

                    <button
                        onClick={() => navigate("/login")}
                        className="
                            px-6
                            py-2.5
                            rounded-full
                            bg-[#292943]
                            text-white
                            text-sm
                            font-semibold
                            hover:bg-[#5B5BD6]
                            transition
                            duration-300
                        "
                    >
                        Login
                    </button>

                )}

            </div>

        </nav>

    )
}

export default Navbar