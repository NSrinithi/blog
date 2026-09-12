import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../config/firebase";

function UserDashBoard() {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUserName(user.displayName || "Reader");
                setUserEmail(user.email || "");
            } else {
                setUserName("");
                setUserEmail("");
            }

        });

        return () => unsubscribe();

    }, []);


    return (

        <div className="min-h-screen bg-[#F4F7F8] text-[#172126]">

            {/* TOP BAR */}

            <div className="px-6 md:px-12 pt-7">

                <div className="max-w-6xl mx-auto flex items-center justify-between border-b border-[#D9E0E3] pb-5">

                    {/* USER */}

                    <Link
                        to="/home"
                        className="flex items-center gap-3"
                    >

                        {/* INITIAL */}

                        <div className="w-10 h-10 rounded-full bg-[#426B72] text-white flex items-center justify-center font-bold text-lg">
                            {userName
                                ? userName.charAt(0).toUpperCase()
                                : "R"
                            }
                        </div>


                        {/* NAME */}

                        <div>

                            <h1 className="text-xl font-bold tracking-tight">
                                {userName || "Reader"}
                            </h1>

                            <p className="text-[9px] uppercase tracking-[0.22em] text-[#7A878C] mt-1">
                                Reader
                            </p>

                        </div>

                    </Link>


                    {/* BLOG LINK */}

                    <Link
                        to="/blogs"
                        className="text-sm font-semibold text-[#426B72] hover:text-[#284D53] transition"
                    >
                        Explore Blog →
                    </Link>

                </div>

            </div>


            {/* MAIN CONTENT */}

            <main className="max-w-6xl mx-auto px-6 md:px-12 py-14">


                {/* WELCOME */}

                <section className="mb-14">

                    <p className="text-xs uppercase tracking-[0.2em] text-[#718087] mb-4">
                        Your space
                    </p>


                    <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[1.05] max-w-3xl">

                        Welcome back,

                        <br />

                        {userName || "there"}.

                    </h2>


                    <p className="mt-5 text-[#69777C] leading-7 max-w-xl">
                        Take a look around, discover something interesting,
                        and spend a little time with the latest stories.
                    </p>

                </section>


                {/* PROFILE + DISCOVER */}

                <section className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-6 mb-14">


                    {/* PROFILE */}

                    <div className="bg-white border border-[#DCE3E5] p-8">

                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#718087]">
                            Profile
                        </p>


                        <div className="mt-8">

                            {/* BIG INITIAL */}

                            <div className="w-16 h-16 rounded-full bg-[#426B72] text-white flex items-center justify-center text-2xl font-bold">

                                {userName
                                    ? userName.charAt(0).toUpperCase()
                                    : "R"
                                }

                            </div>


                            {/* NAME */}

                            <h3 className="text-3xl font-bold tracking-tight mt-6">
                                {userName || "Reader"}
                            </h3>


                            {/* SMALL ROLE */}

                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#7A878C] mt-1">
                                Reader
                            </p>


                            {/* EMAIL */}

                            <p className="text-sm text-[#7A878C] mt-4 break-all">
                                {userEmail}
                            </p>

                        </div>


                        {/* ACCOUNT INFO */}

                        <div className="mt-10 pt-5 border-t border-[#E1E6E8]">

                            <p className="text-sm text-[#718087]">
                                Account
                            </p>

                            <p className="text-sm font-semibold mt-2">
                                Active member
                            </p>

                        </div>

                    </div>


                    {/* DISCOVER */}

                    <div className="bg-[#426B72] text-white p-8 md:p-10 flex flex-col justify-between min-h-[320px]">

                        <div>

                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                                Discover
                            </p>


                            <h3 className="text-3xl md:text-4xl font-bold leading-tight mt-5 max-w-lg">
                                There’s always another story worth reading.
                            </h3>


                            <p className="text-white/70 leading-7 mt-5 max-w-lg">
                                Browse the latest articles, find something
                                you connect with, and come back whenever
                                you feel like reading.
                            </p>

                        </div>


                        {/* BUTTON */}

                        <div className="mt-8">

                            <Link
                                to="/blogs"
                                className="inline-flex items-center bg-white text-[#426B72] px-5 py-3 text-sm font-semibold hover:bg-[#EEF2F3] transition"
                            >

                                Browse articles

                                <span className="ml-3">
                                    →
                                </span>

                            </Link>

                        </div>

                    </div>

                </section>


                {/* QUICK ACCESS */}

                <section>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#718087] mb-5">
                        Quick access
                    </p>


                    <div className="border-t border-[#D9E0E3]">


                        {/* READ ARTICLES */}

                        <Link
                            to="/blogs"
                            className="group flex items-center justify-between py-6 border-b border-[#D9E0E3]"
                        >

                            <div>

                                <h3 className="text-xl font-semibold group-hover:text-[#426B72] transition">
                                    Read articles
                                </h3>

                                <p className="text-sm text-[#7A878C] mt-1">
                                    Explore everything published on the blog.
                                </p>

                            </div>


                            <span className="text-xl text-[#426B72] group-hover:translate-x-1 transition">
                                →
                            </span>

                        </Link>


                        {/* HOME */}

                        <Link
                            to="/home"
                            className="group flex items-center justify-between py-6 border-b border-[#D9E0E3]"
                        >

                            <div>

                                <h3 className="text-xl font-semibold group-hover:text-[#426B72] transition">
                                    Back to home
                                </h3>

                                <p className="text-sm text-[#7A878C] mt-1">
                                    Return to the main page.
                                </p>

                            </div>


                            <span className="text-xl text-[#426B72] group-hover:translate-x-1 transition">
                                →
                            </span>

                        </Link>


                        {/* ABOUT */}

                        <Link
                            to="/about"
                            className="group flex items-center justify-between py-6 border-b border-[#D9E0E3]"
                        >

                            <div>

                                <h3 className="text-xl font-semibold group-hover:text-[#426B72] transition">
                                    About
                                </h3>

                                <p className="text-sm text-[#7A878C] mt-1">
                                    Learn more about this blog.
                                </p>

                            </div>


                            <span className="text-xl text-[#426B72] group-hover:translate-x-1 transition">
                                →
                            </span>

                        </Link>

                    </div>

                </section>

            </main>


            {/* FOOTER */}

            <footer className="border-t border-[#D9E0E3]">

                <div className="max-w-6xl mx-auto px-6 md:px-12 py-7 flex flex-col md:flex-row justify-between gap-3 text-sm text-[#7A878C]">

                    <p>
                        {userName || "Reader"}
                    </p>

                    <Link
                        to="/blogs"
                        className="hover:text-[#426B72] transition"
                    >
                        Continue reading →
                    </Link>

                </div>

            </footer>

        </div>

    );
}

export default UserDashBoard;