import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {

                setIsLogin(true);

                if (
                    user.uid === "RDXDC00vJybJqXsUOQlERDPhPTL2"
                ) {
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
                setSidebarOpen(false);

                navigate("/login");

            })
            .catch((error) => {

                console.log("Logout error:", error);

            });

    }


    function closeSidebar() {
        setSidebarOpen(false);
    }


    function handleLogin() {

        setSidebarOpen(false);
        navigate("/login");

    }


    return (

        <>

            {/* =================================================
                NAVBAR
            ================================================= */}

            <nav className="
                w-full
                px-5
                sm:px-8
                md:px-10
                pt-5
                sm:pt-6
            ">

                <div className="
                    max-w-6xl
                    mx-auto
                    flex
                    items-center
                    justify-between
                    pb-5
                    border-b
                    border-[#D8E1E4]
                ">


                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <Link
                        to="/home"
                        onClick={closeSidebar}
                        className="
                            group
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <div className="leading-none">

                            <h1 className="
                                text-lg
                                sm:text-xl
                                md:text-2xl
                                font-bold
                                tracking-tight
                                text-[#17232A]
                            ">
                                YourBlog
                            </h1>


                            <p className="
                                text-[8px]
                                sm:text-[9px]
                                md:text-[10px]
                                tracking-[0.25em]
                                uppercase
                                text-[#7A878C]
                                mt-1
                            ">
                                Stories & ideas
                            </p>

                        </div>

                    </Link>



                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <div className="
                        hidden
                        md:flex
                        items-center
                        gap-6
                        lg:gap-8
                        text-sm
                        lg:text-[15px]
                        font-medium
                    ">


                        <Link
                            to="/home"
                            className="
                                relative
                                text-[#454354]
                                hover:text-[#426B72]
                                transition
                                duration-300
                                after:absolute
                                after:left-0
                                after:-bottom-2
                                after:w-0
                                after:h-[2px]
                                after:bg-[#426B72]
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
                                hover:text-[#426B72]
                                transition
                                duration-300
                                after:absolute
                                after:left-0
                                after:-bottom-2
                                after:w-0
                                after:h-[2px]
                                after:bg-[#426B72]
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
                                hover:text-[#426B72]
                                transition
                                duration-300
                                after:absolute
                                after:left-0
                                after:-bottom-2
                                after:w-0
                                after:h-[2px]
                                after:bg-[#426B72]
                                hover:after:w-full
                                after:transition-all
                                after:duration-300
                            "
                        >
                            About
                        </Link>


                        {/* PROFILE */}

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
                                    hover:text-[#426B72]
                                    transition
                                    duration-300
                                    after:absolute
                                    after:left-0
                                    after:-bottom-2
                                    after:w-0
                                    after:h-[2px]
                                    after:bg-[#426B72]
                                    hover:after:w-full
                                    after:transition-all
                                    after:duration-300
                                "
                            >
                                Profile
                            </Link>

                        )}

                    </div>



                    {/* =================================================
                        DESKTOP AUTH BUTTON
                    ================================================= */}

                    <div className="hidden md:block">

                        {isLogin ? (

                            <button
                                onClick={handleLogOut}
                                className="
                                    px-4
                                    lg:px-5
                                    py-2
                                    lg:py-2.5
                                    rounded-full
                                    border-2
                                    border-[#17232A]
                                    text-[#17232A]
                                    text-xs
                                    lg:text-sm
                                    font-semibold
                                    hover:bg-[#17232A]
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
                                    px-5
                                    lg:px-6
                                    py-2
                                    lg:py-2.5
                                    rounded-full
                                    bg-[#17232A]
                                    text-white
                                    text-xs
                                    lg:text-sm
                                    font-semibold
                                    hover:bg-[#426B72]
                                    transition
                                    duration-300
                                "
                            >
                                Login
                            </button>

                        )}

                    </div>



                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================= */}

                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="
                            md:hidden
                            w-10
                            h-10
                            flex
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#D8E1E4]
                            text-[#17232A]
                            hover:bg-[#EAF0F2]
                            transition
                        "
                        aria-label="Open menu"
                    >

                        <div className="flex flex-col gap-1.5">

                            <span className="
                                block
                                w-4
                                h-[1.5px]
                                bg-[#17232A]
                            " />

                            <span className="
                                block
                                w-4
                                h-[1.5px]
                                bg-[#17232A]
                            " />

                            <span className="
                                block
                                w-3
                                h-[1.5px]
                                bg-[#17232A]
                            " />

                        </div>

                    </button>

                </div>

            </nav>



            {/* =================================================
                MOBILE SIDEBAR OVERLAY
            ================================================= */}

            {sidebarOpen && (

                <div
                    onClick={closeSidebar}
                    className="
                        fixed
                        inset-0
                        z-40
                        bg-[#17232A]/30
                        md:hidden
                    "
                />

            )}



            {/* =================================================
                MOBILE SIDEBAR
            ================================================= */}

            <aside
                className={`
                    fixed
                    top-0
                    right-0
                    z-50
                    h-full
                    w-[82%]
                    max-w-sm
                    bg-[#F4F7F8]
                    border-l
                    border-[#D8E1E4]
                    md:hidden
                    transform
                    transition-transform
                    duration-300
                    ease-out
                    ${
                        sidebarOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }
                `}
            >


                {/* SIDEBAR HEADER */}

                <div className="
                    flex
                    items-center
                    justify-between
                    px-6
                    py-6
                    border-b
                    border-[#D8E1E4]
                ">


                    <div>

                        <h2 className="
                            text-lg
                            font-bold
                            tracking-tight
                            text-[#17232A]
                        ">
                            YourBlog
                        </h2>


                        <p className="
                            text-[9px]
                            uppercase
                            tracking-[0.22em]
                            text-[#7A878C]
                            mt-1
                        ">
                            Stories & ideas
                        </p>

                    </div>


                    {/* CLOSE */}

                    <button
                        onClick={closeSidebar}
                        className="
                            w-9
                            h-9
                            rounded-full
                            border
                            border-[#D8E1E4]
                            flex
                            items-center
                            justify-center
                            text-[#17232A]
                            text-xl
                            hover:bg-[#EAF0F2]
                            transition
                        "
                        aria-label="Close menu"
                    >
                        ×
                    </button>

                </div>



                {/* SIDEBAR CONTENT */}

                <div className="
                    px-6
                    py-8
                    flex
                    flex-col
                    h-[calc(100%-89px)]
                ">


                    {/* NAVIGATION */}

                    <div className="
                        flex
                        flex-col
                    ">


                        <Link
                            to="/home"
                            onClick={closeSidebar}
                            className="
                                py-4
                                border-b
                                border-[#D8E1E4]
                                text-base
                                font-medium
                                text-[#454354]
                                hover:text-[#426B72]
                                transition
                            "
                        >
                            Home
                        </Link>


                        <Link
                            to="/blogs"
                            onClick={closeSidebar}
                            className="
                                py-4
                                border-b
                                border-[#D8E1E4]
                                text-base
                                font-medium
                                text-[#454354]
                                hover:text-[#426B72]
                                transition
                            "
                        >
                            Blogs
                        </Link>


                        <Link
                            to="/about"
                            onClick={closeSidebar}
                            className="
                                py-4
                                border-b
                                border-[#D8E1E4]
                                text-base
                                font-medium
                                text-[#454354]
                                hover:text-[#426B72]
                                transition
                            "
                        >
                            About
                        </Link>


                        {/* PROFILE */}

                        {isLogin && (

                            <Link
                                to={
                                    isAdmin
                                        ? "/adminDash"
                                        : "/userDash"
                                }
                                onClick={closeSidebar}
                                className="
                                    py-4
                                    border-b
                                    border-[#D8E1E4]
                                    text-base
                                    font-medium
                                    text-[#454354]
                                    hover:text-[#426B72]
                                    transition
                                "
                            >
                                Profile
                            </Link>

                        )}

                    </div>



                    {/* AUTH AREA */}

                    <div className="
                        mt-auto
                        pt-8
                    ">


                        {isLogin ? (

                            <button
                                onClick={handleLogOut}
                                className="
                                    w-full
                                    py-3
                                    rounded-full
                                    border-2
                                    border-[#17232A]
                                    text-[#17232A]
                                    text-sm
                                    font-semibold
                                    hover:bg-[#17232A]
                                    hover:text-white
                                    transition
                                "
                            >
                                Logout
                            </button>

                        ) : (

                            <button
                                onClick={handleLogin}
                                className="
                                    w-full
                                    py-3
                                    rounded-full
                                    bg-[#17232A]
                                    text-white
                                    text-sm
                                    font-semibold
                                    hover:bg-[#426B72]
                                    transition
                                "
                            >
                                Login
                            </button>

                        )}

                    </div>

                </div>

            </aside>

        </>

    );
}

export default Navbar;