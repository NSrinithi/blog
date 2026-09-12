import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="min-h-screen bg-[#F4F7F8] text-[#172126]">

            {/* TOP NAVIGATION */}

            <div className="px-6 md:px-12 pt-7">

                <div className="max-w-6xl mx-auto flex items-center justify-between border-b border-[#D9E0E3] pb-5">

                    <Link
                        to="/home"
                        className="flex items-center gap-3"
                    >

                        <div className="w-10 h-10 rounded-full bg-[#426B72] text-white flex items-center justify-center font-bold text-lg">
                            Y
                        </div>

                        <div>
                            <h1 className="text-xl font-bold tracking-tight">
                                YourBlog
                            </h1>

                            <p className="text-[9px] uppercase tracking-[0.22em] text-[#7A878C] mt-1">
                                Stories & ideas
                            </p>
                        </div>

                    </Link>


                    <Link
                        to="/blogs"
                        className="text-sm font-semibold text-[#426B72] hover:text-[#284D53] transition"
                    >
                        Explore Blog →
                    </Link>

                </div>

            </div>


            {/* MAIN CONTENT */}

            <main className="max-w-6xl mx-auto px-6 md:px-12 py-16">


                {/* INTRO */}

                <section className="max-w-4xl">

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#718087] mb-5">
                        About this space
                    </p>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95]">
                        A place for
                        <br />
                        thoughts worth
                        <br />
                        <span className="text-[#426B72]">
                            sharing.
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-[#69777C] leading-8 max-w-2xl mt-8">
                        YourBlog is a simple space where ideas, experiences,
                        and stories can be written down and shared with
                        others.
                    </p>

                </section>


                {/* DIVIDER */}

                <div className="border-t border-[#D9E0E3] my-16"></div>


                {/* ABOUT CONTENT */}

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">


                    {/* LEFT */}

                    <div>

                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#718087] mb-5">
                            Why this blog?
                        </p>

                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                            Not everything needs to be complicated.
                        </h3>

                    </div>


                    {/* RIGHT */}

                    <div className="text-[#69777C] leading-8">

                        <p>
                            This blog was created to make publishing and
                            discovering content feel simple. Writers can
                            share their thoughts, while readers can explore
                            articles at their own pace.
                        </p>

                        <p className="mt-6">
                            From everyday experiences to ideas worth thinking
                            about, every article has its own little story
                            behind it.
                        </p>

                    </div>

                </section>


                {/* WHAT YOU CAN DO */}

                <section className="mt-20">

                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#718087] mb-6">
                        Around here
                    </p>


                    <div className="border-t border-[#D9E0E3]">


                        {/* READ */}

                        <div className="py-7 border-b border-[#D9E0E3] flex flex-col md:flex-row md:items-center gap-3 md:gap-12">

                            <span className="text-sm text-[#98A3A7] md:w-24">
                                01
                            </span>

                            <h3 className="text-xl font-semibold md:w-48">
                                Read
                            </h3>

                            <p className="text-sm text-[#7A878C]">
                                Explore articles and discover new ideas.
                            </p>

                        </div>


                        {/* DISCOVER */}

                        <div className="py-7 border-b border-[#D9E0E3] flex flex-col md:flex-row md:items-center gap-3 md:gap-12">

                            <span className="text-sm text-[#98A3A7] md:w-24">
                                02
                            </span>

                            <h3 className="text-xl font-semibold md:w-48">
                                Discover
                            </h3>

                            <p className="text-sm text-[#7A878C]">
                                Find stories that make you stop and think.
                            </p>

                        </div>


                        {/* SHARE */}

                        <div className="py-7 border-b border-[#D9E0E3] flex flex-col md:flex-row md:items-center gap-3 md:gap-12">

                            <span className="text-sm text-[#98A3A7] md:w-24">
                                03
                            </span>

                            <h3 className="text-xl font-semibold md:w-48">
                                Share
                            </h3>

                            <p className="text-sm text-[#7A878C]">
                                Turn your own thoughts into something others
                                can read.
                            </p>

                        </div>

                    </div>

                </section>


                {/* CTA */}

                <section className="mt-20 bg-[#426B72] text-white p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-8">

                    <div>

                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-4">
                            Start exploring
                        </p>

                        <h3 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl">
                            There might be something here you'll want to read.
                        </h3>

                    </div>


                    <Link
                        to="/blogs"
                        className="inline-flex items-center self-start md:self-auto bg-white text-[#426B72] px-6 py-3 text-sm font-semibold hover:bg-[#EEF2F3] transition"
                    >
                        Explore articles
                        <span className="ml-3">
                            →
                        </span>
                    </Link>

                </section>

            </main>


            {/* FOOTER */}

            <footer className="border-t border-[#D9E0E3]">

                <div className="max-w-6xl mx-auto px-6 md:px-12 py-7 flex justify-between text-sm text-[#7A878C]">

                    <p>
                        YourBlog
                    </p>

                    <Link
                        to="/home"
                        className="hover:text-[#426B72] transition"
                    >
                        Back home →
                    </Link>

                </div>

            </footer>

        </div>
    )
}

export default About