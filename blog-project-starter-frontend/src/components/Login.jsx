import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../config/firebase';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/home");
            }
        })
        window.scrollTo(0, 0);
    }, []);

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
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            alert("Logged Successfully");
            navigate('/home');
        })
            .catch((error) => {
                console.log(error);
            })

    };

    return (
        <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center p-4">

            <div className="w-full max-w-6xl min-h-[680px] bg-[#FFFDF9] rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(40,35,70,0.12)] grid md:grid-cols-2">

                {/* LEFT SECTION */}
                <div className="relative bg-[#5B5BD6] overflow-hidden p-10 md:p-14 flex flex-col justify-between">

                    {/* Decorative shapes */}

                    <div className="absolute w-72 h-72 bg-[#F8C8B8] rounded-full -top-24 -right-24"></div>

                    <div className="absolute w-40 h-40 bg-[#FFDFA7] rounded-full bottom-20 -left-16"></div>

                    <div className="absolute w-24 h-24 border-[12px] border-white/20 rounded-full top-1/2 right-10"></div>


                    {/* Brand */}
                    <div className="relative z-10">

                        <div className="flex items-center gap-3">

                            <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#5B5BD6] font-bold text-xl">
                                Y
                            </div>

                            <span className="text-white text-xl font-semibold tracking-tight">
                                YourBlog
                            </span>

                        </div>

                    </div>


                    {/* Main text */}
                    <div className="relative z-10 max-w-lg">

                        <p className="text-white/70 text-sm uppercase tracking-[0.3em] mb-5">
                            Stories · Ideas · People
                        </p>

                        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                            Your ideas
                            <br />
                            deserve a
                            <br />
                            <span className="text-[#FFDFA7]">
                                place.
                            </span>
                        </h1>

                        <p className="text-white/75 mt-7 max-w-sm leading-relaxed">
                            Write something meaningful. Discover something
                            interesting. Be part of the conversation.
                        </p>

                    </div>


                    {/* Bottom */}
                    <div className="relative z-10 text-white/50 text-xs">
                        © 2026 YourBlog
                    </div>

                </div>


                {/* RIGHT SECTION */}
                <div className="flex items-center justify-center px-8 py-12 md:px-14 lg:px-20">

                    <div className="w-full max-w-md">

                        {/* Heading */}
                        <div className="mb-10">

                            <p className="text-[#5B5BD6] font-semibold text-sm mb-3">
                                WELCOME BACK
                            </p>

                            <h2 className="text-4xl font-bold text-[#292943] tracking-tight">
                                Sign in
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Pick up where you left off.
                            </p>

                        </div>


                        <form onSubmit={handleLogin}>

                            {/* Email */}
                            <div className="mb-6">

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


                            {/* Password */}
                            <div className="mb-3">

                                <div className="flex justify-between items-center mb-2">

                                    <label className="text-sm font-semibold text-[#292943]">
                                        Password
                                    </label>

                                    <button
                                        type="button"
                                        className="text-xs font-medium text-gray-400 hover:text-[#5B5BD6]"
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


                            {/* Sign in */}
                            <button
                                type="submit"
                                className="w-full mt-7 py-4 rounded-2xl
                            bg-[#292943]
                            text-white
                            font-semibold
                            hover:bg-[#5B5BD6]
                            transition duration-300
                            shadow-lg shadow-[#292943]/10"
                            >
                                Sign in
                            </button>

                        </form>


                        {/* Divider */}
                        <div className="flex items-center gap-4 my-7">

                            <div className="flex-1 h-px bg-gray-200"></div>

                            <span className="text-xs text-gray-400 font-medium">
                                OR
                            </span>

                            <div className="flex-1 h-px bg-gray-200"></div>

                        </div>


                        {/* Google */}
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


                        {/* Register */}
                        <p className="text-center text-sm text-gray-500 mt-8">

                            Don't have an account?

                            <span
                                onClick={() => navigate("/signup")}
                                className="ml-1 font-bold text-[#5B5BD6] cursor-pointer hover:underline"
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
