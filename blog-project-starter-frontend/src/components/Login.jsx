import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../config/firebase';


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                navigate("/home");
            }

        });

        window.scrollTo(0, 0);

        return () => unsubscribe();

    }, [navigate]);


    async function handleGoogleSignup() {

        try {

            const provider = new GoogleAuthProvider();

            const result = await signInWithPopup(auth, provider);

            console.log(result.user);

            navigate("/home");

        }
        catch (error) {

            console.log(error);

        }

    }


    const handleLogin = (e) => {

        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {

                alert("Logged Successfully");

                navigate('/home');

            })
            .catch((error) => {

                console.log(error);

            });

    };


    return (

        <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center p-3 sm:p-5 md:p-8">


            <div className="
                w-full
                max-w-6xl
                bg-[#FFFDF9]
                rounded-2xl
                sm:rounded-[28px]
                md:rounded-[32px]
                overflow-hidden
                shadow-[0_20px_70px_rgba(40,35,70,0.12)]
                grid
                grid-cols-1
                md:grid-cols-2
            ">


                {/* ================= LEFT SECTION ================= */}

                <div className="
                    relative
                    bg-[#5B5BD6]
                    overflow-hidden
                    px-6
                    py-8
                    sm:px-10
                    sm:py-10
                    md:p-14
                    min-h-[400px]
                    sm:min-h-[480px]
                    md:min-h-[680px]
                    flex
                    flex-col
                    justify-between
                ">


                    {/* Decorative shapes */}

                    <div className="
                        absolute
                        w-48
                        h-48
                        sm:w-60
                        sm:h-60
                        md:w-72
                        md:h-72
                        bg-[#F8C8B8]
                        rounded-full
                        -top-20
                        sm:-top-24
                        -right-20
                        sm:-right-24
                    "></div>


                    <div className="
                        absolute
                        w-28
                        h-28
                        sm:w-36
                        sm:h-36
                        md:w-40
                        md:h-40
                        bg-[#FFDFA7]
                        rounded-full
                        bottom-10
                        sm:bottom-16
                        md:bottom-20
                        -left-12
                        sm:-left-16
                    "></div>


                    <div className="
                        absolute
                        w-16
                        h-16
                        sm:w-20
                        sm:h-20
                        md:w-24
                        md:h-24
                        border-[8px]
                        sm:border-[10px]
                        md:border-[12px]
                        border-white/20
                        rounded-full
                        top-1/2
                        right-4
                        sm:right-8
                        md:right-10
                    "></div>


                    {/* Brand */}

                    <div className="relative z-10">

                        <div className="flex items-center gap-3">

                            <div className="
                                w-10
                                h-10
                                sm:w-11
                                sm:h-11
                                rounded-xl
                                sm:rounded-2xl
                                bg-white
                                flex
                                items-center
                                justify-center
                                text-[#5B5BD6]
                                font-bold
                                text-lg
                                sm:text-xl
                                shrink-0
                            ">
                                Y
                            </div>

                            <span className="
                                text-white
                                text-lg
                                sm:text-xl
                                font-semibold
                                tracking-tight
                            ">
                                YourBlog
                            </span>

                        </div>

                    </div>


                    {/* Main text */}

                    <div className="
                        relative
                        z-10
                        max-w-lg
                        mt-16
                        sm:mt-20
                        md:mt-0
                    ">

                        <p className="
                            text-white/70
                            text-[10px]
                            sm:text-xs
                            md:text-sm
                            uppercase
                            tracking-[0.22em]
                            sm:tracking-[0.3em]
                            mb-4
                            sm:mb-5
                        ">
                            Stories · Ideas · People
                        </p>


                        <h1 className="
                            text-white
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                            font-bold
                            leading-[0.95]
                            tracking-tight
                        ">

                            Your ideas

                            <br />

                            deserve a

                            <br />

                            <span className="text-[#FFDFA7]">
                                place.
                            </span>

                        </h1>


                        <p className="
                            text-white/75
                            mt-5
                            sm:mt-7
                            max-w-sm
                            text-sm
                            sm:text-base
                            leading-relaxed
                        ">
                            Write something meaningful. Discover something
                            interesting. Be part of the conversation.
                        </p>

                    </div>


                    {/* Bottom */}

                    <div className="
                        relative
                        z-10
                        text-white/50
                        text-[10px]
                        sm:text-xs
                        mt-12
                        md:mt-0
                    ">
                        © 2026 YourBlog
                    </div>

                </div>



                {/* ================= RIGHT SECTION ================= */}

                <div className="
                    flex
                    items-center
                    justify-center
                    px-5
                    py-10
                    sm:px-8
                    sm:py-12
                    md:px-10
                    lg:px-20
                ">

                    <div className="w-full max-w-md">


                        {/* Heading */}

                        <div className="mb-7 sm:mb-10">

                            <p className="
                                text-[#5B5BD6]
                                font-semibold
                                text-xs
                                sm:text-sm
                                mb-2
                                sm:mb-3
                            ">
                                WELCOME BACK
                            </p>


                            <h2 className="
                                text-3xl
                                sm:text-4xl
                                font-bold
                                text-[#292943]
                                tracking-tight
                            ">
                                Sign in
                            </h2>


                            <p className="
                                text-gray-500
                                mt-2
                                sm:mt-3
                                text-sm
                                sm:text-base
                            ">
                                Pick up where you left off.
                            </p>

                        </div>



                        {/* FORM */}

                        <form onSubmit={handleLogin}>


                            {/* Email */}

                            <div className="mb-5 sm:mb-6">

                                <label className="
                                    block
                                    text-sm
                                    font-semibold
                                    text-[#292943]
                                    mb-2
                                ">
                                    Email address
                                </label>


                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    className="
                                        w-full
                                        px-4
                                        sm:px-5
                                        py-3.5
                                        sm:py-4
                                        rounded-xl
                                        sm:rounded-2xl
                                        border
                                        border-gray-200
                                        bg-[#F8F7F4]
                                        text-[#292943]
                                        placeholder-gray-400
                                        outline-none
                                        focus:bg-white
                                        focus:border-[#5B5BD6]
                                        focus:ring-4
                                        focus:ring-[#5B5BD6]/10
                                        transition
                                    "
                                />

                            </div>



                            {/* Password */}

                            <div className="mb-3">

                                <div className="
                                    flex
                                    items-center
                                    justify-between
                                    gap-3
                                    mb-2
                                ">

                                    <label className="
                                        text-sm
                                        font-semibold
                                        text-[#292943]
                                    ">
                                        Password
                                    </label>


                                    <button
                                        type="button"
                                        className="
                                            text-[11px]
                                            sm:text-xs
                                            font-medium
                                            text-gray-400
                                            hover:text-[#5B5BD6]
                                            whitespace-nowrap
                                        "
                                    >
                                        Forgot password?
                                    </button>

                                </div>


                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    className="
                                        w-full
                                        px-4
                                        sm:px-5
                                        py-3.5
                                        sm:py-4
                                        rounded-xl
                                        sm:rounded-2xl
                                        border
                                        border-gray-200
                                        bg-[#F8F7F4]
                                        text-[#292943]
                                        placeholder-gray-400
                                        outline-none
                                        focus:bg-white
                                        focus:border-[#5B5BD6]
                                        focus:ring-4
                                        focus:ring-[#5B5BD6]/10
                                        transition
                                    "
                                />

                            </div>



                            {/* Sign in */}

                            <button
                                type="submit"
                                className="
                                    w-full
                                    mt-6
                                    sm:mt-7
                                    py-3.5
                                    sm:py-4
                                    rounded-xl
                                    sm:rounded-2xl
                                    bg-[#292943]
                                    text-white
                                    font-semibold
                                    hover:bg-[#5B5BD6]
                                    transition
                                    duration-300
                                    shadow-lg
                                    shadow-[#292943]/10
                                "
                            >
                                Sign in
                            </button>


                        </form>



                        {/* Divider */}

                        <div className="
                            flex
                            items-center
                            gap-3
                            sm:gap-4
                            my-6
                            sm:my-7
                        ">

                            <div className="flex-1 h-px bg-gray-200"></div>

                            <span className="
                                text-[10px]
                                sm:text-xs
                                text-gray-400
                                font-medium
                            ">
                                OR
                            </span>

                            <div className="flex-1 h-px bg-gray-200"></div>

                        </div>



                        {/* Google */}

                        <button
                            type="button"
                            onClick={handleGoogleSignup}
                            className="
                                w-full
                                py-3.5
                                sm:py-4
                                rounded-xl
                                sm:rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                text-[#292943]
                                font-semibold
                                hover:bg-gray-50
                                transition
                                flex
                                items-center
                                justify-center
                                gap-3
                                text-sm
                                sm:text-base
                            "
                        >

                            <span className="
                                w-7
                                h-7
                                rounded-full
                                bg-gray-100
                                flex
                                items-center
                                justify-center
                                text-sm
                                font-bold
                                shrink-0
                            ">
                                G
                            </span>

                            Continue with Google

                        </button>



                        {/* Register */}

                        <p className="
                            text-center
                            text-xs
                            sm:text-sm
                            text-gray-500
                            mt-7
                            sm:mt-8
                        ">

                            Don't have an account?

                            <span
                                onClick={() => navigate("/signup")}
                                className="
                                    ml-1
                                    font-bold
                                    text-[#5B5BD6]
                                    cursor-pointer
                                    hover:underline
                                "
                            >
                                Create one
                            </span>

                        </p>


                    </div>

                </div>


            </div>

        </div>

    );

}


export default Login;