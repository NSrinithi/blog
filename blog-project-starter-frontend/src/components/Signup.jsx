import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    updateProfile
} from 'firebase/auth';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../config/firebase';


function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                navigate("/home");
            }

        });

        return () => unsubscribe();

    }, [navigate]);


    const handleSubmit = async (e) => {

        e.preventDefault();

        setError('');


        // Check password

        if (password !== confirmPassword) {

            setError('Passwords do not match');

            return;

        }


        try {

            // Create Firebase account

            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );


            // Save name in Firebase

            await updateProfile(res.user, {
                displayName: name
            });


            alert("Account created successfully");

            navigate('/login');


        } catch (error) {

            console.log(error);

            setError(error.message);

        }

    };


    async function handleGoogleSignup() {

        try {

            const provider = new GoogleAuthProvider();

            const result = await signInWithPopup(auth, provider);

            console.log(result.user);

            navigate("/home");

        }

        catch (error) {

            console.log(error);

            setError(error.message);

        }

    }


    return (

        <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center p-4">


            <div className="w-full max-w-6xl min-h-[680px] bg-[#FFFDF9] rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(40,35,70,0.12)] grid md:grid-cols-2">


                {/* LEFT SIDE */}

                <div className="relative bg-[#292943] overflow-hidden p-10 md:p-14 flex flex-col justify-between">


                    {/* Decorative shapes */}

                    <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#8B8BE8]"></div>

                    <div className="absolute bottom-[-80px] right-[-60px] w-72 h-72 rounded-full bg-[#F8C8B8]"></div>

                    <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border-[14px] border-white/10"></div>



                    {/* Logo */}

                    <div className="relative z-10">

                        <div className="flex items-center gap-3">

                            <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#292943] font-bold text-xl">
                                Y
                            </div>

                            <span className="text-white text-xl font-semibold">
                                YourBlog
                            </span>

                        </div>

                    </div>



                    {/* Main content */}

                    <div className="relative z-10 max-w-md">

                        <p className="text-white/60 text-sm uppercase tracking-[0.3em] mb-5">
                            Join the community
                        </p>


                        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">

                            Start

                            <br />

                            sharing your

                            <br />

                            <span className="text-[#F8C8B8]">
                                story.
                            </span>

                        </h1>


                        <p className="text-white/60 mt-7 max-w-sm leading-relaxed">
                            Create an account and start discovering
                            stories, ideas and conversations.
                        </p>

                    </div>



                    {/* Copyright */}

                    <div className="relative z-10 text-white/40 text-xs">
                        © 2026 YourBlog
                    </div>

                </div>



                {/* RIGHT SIDE */}

                <div className="flex items-center justify-center px-8 py-12 md:px-14 lg:px-20">


                    <div className="w-full max-w-md">


                        {/* Heading */}

                        <div className="mb-8">

                            <p className="text-[#5B5BD6] font-semibold text-sm mb-3">
                                CREATE ACCOUNT
                            </p>


                            <h2 className="text-4xl font-bold text-[#292943] tracking-tight">
                                Sign up
                            </h2>


                            <p className="text-gray-500 mt-3">
                                Create your account in just a few seconds.
                            </p>

                        </div>



                        {/* FORM */}

                        <form onSubmit={handleSubmit}>


                            {/* NAME */}

                            <div className="mb-5">

                                <label className="block text-sm font-semibold text-[#292943] mb-2">
                                    Name
                                </label>


                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-5 py-4 rounded-2xl
                                    border border-gray-200
                                    bg-[#F8F7F4]
                                    text-[#292943]
                                    placeholder-gray-400
                                    outline-none
                                    focus:bg-white
                                    focus:border-[#5B5BD6]
                                    focus:ring-4 focus:ring-[#5B5BD6]/10
                                    transition"
                                />

                            </div>



                            {/* EMAIL */}

                            <div className="mb-5">

                                <label className="block text-sm font-semibold text-[#292943] mb-2">
                                    Email address
                                </label>


                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full px-5 py-4 rounded-2xl
                                    border border-gray-200
                                    bg-[#F8F7F4]
                                    text-[#292943]
                                    placeholder-gray-400
                                    outline-none
                                    focus:bg-white
                                    focus:border-[#5B5BD6]
                                    focus:ring-4 focus:ring-[#5B5BD6]/10
                                    transition"
                                />

                            </div>



                            {/* PASSWORD */}

                            <div className="mb-5">

                                <label className="block text-sm font-semibold text-[#292943] mb-2">
                                    Password
                                </label>


                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Create a password"
                                    required
                                    className="w-full px-5 py-4 rounded-2xl
                                    border border-gray-200
                                    bg-[#F8F7F4]
                                    text-[#292943]
                                    placeholder-gray-400
                                    outline-none
                                    focus:bg-white
                                    focus:border-[#5B5BD6]
                                    focus:ring-4 focus:ring-[#5B5BD6]/10
                                    transition"
                                />

                            </div>



                            {/* CONFIRM PASSWORD */}

                            <div className="mb-2">

                                <label className="block text-sm font-semibold text-[#292943] mb-2">
                                    Confirm password
                                </label>


                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Repeat your password"
                                    required
                                    className="w-full px-5 py-4 rounded-2xl
                                    border border-gray-200
                                    bg-[#F8F7F4]
                                    text-[#292943]
                                    placeholder-gray-400
                                    outline-none
                                    focus:bg-white
                                    focus:border-[#5B5BD6]
                                    focus:ring-4 focus:ring-[#5B5BD6]/10
                                    transition"
                                />


                                {/* ERROR */}

                                {error && (

                                    <p className="text-red-500 text-sm mt-2">
                                        {error}
                                    </p>

                                )}

                            </div>



                            {/* REGISTER */}

                            <button
                                type="submit"
                                className="w-full mt-6 py-4 rounded-2xl
                                bg-[#5B5BD6]
                                text-white
                                font-semibold
                                hover:bg-[#4848C4]
                                transition duration-300
                                shadow-lg shadow-[#5B5BD6]/20"
                            >

                                Create account

                            </button>

                        </form>



                        {/* DIVIDER */}

                        <div className="flex items-center gap-4 my-7">

                            <div className="flex-1 h-px bg-gray-200"></div>

                            <span className="text-xs text-gray-400 font-medium">
                                OR
                            </span>

                            <div className="flex-1 h-px bg-gray-200"></div>

                        </div>



                        {/* GOOGLE */}

                        <button
                            type="button"
                            onClick={handleGoogleSignup}
                            className="w-full py-4 rounded-2xl
                            border border-gray-200
                            bg-white
                            text-[#292943]
                            font-semibold
                            hover:bg-gray-50
                            transition
                            flex items-center justify-center gap-3"
                        >

                            <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold">
                                G
                            </span>

                            Continue with Google

                        </button>



                        {/* LOGIN */}

                        <p className="text-center text-sm text-gray-500 mt-8">

                            Already have an account?

                            <span
                                onClick={() => navigate("/login")}
                                className="ml-1 font-bold text-[#5B5BD6] cursor-pointer hover:underline"
                            >
                                Sign in
                            </span>

                        </p>


                    </div>

                </div>

            </div>

        </div>

    );

}


export default Signup;