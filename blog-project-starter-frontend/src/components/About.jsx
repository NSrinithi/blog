import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (

        <div className="
            min-h-screen
            bg-[#F4F7F8]
            text-[#172126]
        ">


            {/* =================================================
                TOP NAVIGATION
            ================================================= */}

            <div className="
                px-5
                sm:px-8
                md:px-12
                pt-5
                sm:pt-7
            ">

                <div className="
                    max-w-6xl
                    mx-auto
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-5
                    border-b
                    border-[#D9E0E3]
                    pb-5
                ">


                    {/* LOGO */}

                    <Link
                        to="/home"
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <div className="
                            w-9
                            h-9
                            sm:w-10
                            sm:h-10
                            rounded-full
                            bg-[#426B72]
                            text-white
                            flex
                            items-center
                            justify-center
                            font-bold
                            text-base
                            sm:text-lg
                            shrink-0
                        ">
                            Y
                        </div>


                        <div>

                            <h1 className="
                                text-lg
                                sm:text-xl
                                font-bold
                                tracking-tight
                            ">
                                YourBlog
                            </h1>


                            <p className="
                                text-[8px]
                                sm:text-[9px]
                                uppercase
                                tracking-[0.22em]
                                text-[#7A878C]
                                mt-1
                            ">
                                Stories & ideas
                            </p>

                        </div>

                    </Link>



                    {/* BLOG LINK */}

                    <Link
                        to="/blogs"
                        className="
                            self-start
                            sm:self-auto
                            text-sm
                            font-semibold
                            text-[#426B72]
                            hover:text-[#284D53]
                            transition
                        "
                    >
                        Explore Blog →
                    </Link>

                </div>

            </div>



            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <main className="
                max-w-6xl
                mx-auto
                px-5
                sm:px-8
                md:px-12
                py-12
                sm:py-16
                md:py-20
            ">


                {/* =================================================
                    INTRO
                ================================================= */}

                <section className="max-w-4xl">

                    <p className="
                        text-[9px]
                        sm:text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-[#718087]
                        mb-4
                        sm:mb-5
                    ">
                        About this space
                    </p>


                    <h2 className="
                        text-[42px]
                        sm:text-5xl
                        md:text-6xl
                        lg:text-7xl
                        font-bold
                        tracking-[-0.05em]
                        leading-[0.98]
                        sm:leading-[0.95]
                    ">
                        A place for
                        <br />
                        thoughts worth
                        <br />
                        <span className="text-[#426B72]">
                            sharing.
                        </span>
                    </h2>


                    <p className="
                        text-base
                        sm:text-lg
                        md:text-xl
                        text-[#69777C]
                        leading-7
                        sm:leading-8
                        max-w-2xl
                        mt-6
                        sm:mt-8
                    ">
                        YourBlog is a simple space where ideas,
                        experiences, and stories can be written
                        down and shared with others.
                    </p>

                </section>



                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div className="
                    border-t
                    border-[#D9E0E3]
                    my-12
                    sm:my-16
                    md:my-20
                "></div>



                {/* =================================================
                    ABOUT CONTENT
                ================================================= */}

                <section className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-10
                    sm:gap-12
                    md:gap-20
                ">


                    {/* LEFT */}

                    <div>

                        <p className="
                            text-[9px]
                            sm:text-[10px]
                            uppercase
                            tracking-[0.2em]
                            text-[#718087]
                            mb-4
                            sm:mb-5
                        ">
                            Why this blog?
                        </p>


                        <h3 className="
                            text-2xl
                            sm:text-3xl
                            md:text-4xl
                            font-bold
                            tracking-tight
                            leading-tight
                            max-w-lg
                        ">
                            Not everything needs to be complicated.
                        </h3>

                    </div>



                    {/* RIGHT */}

                    <div className="
                        text-[#69777C]
                        leading-7
                        sm:leading-8
                        text-sm
                        sm:text-base
                    ">

                        <p>
                            This blog was created to make publishing
                            and discovering content feel simple.
                            Writers can share their thoughts, while
                            readers can explore articles at their own pace.
                        </p>


                        <p className="mt-5 sm:mt-6">
                            From everyday experiences to ideas worth
                            thinking about, every article has its own
                            little story behind it.
                        </p>

                    </div>

                </section>



                {/* =================================================
                    WHAT YOU CAN DO
                ================================================= */}

                <section className="
                    mt-14
                    sm:mt-20
                    md:mt-24
                ">

                    <p className="
                        text-[9px]
                        sm:text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-[#718087]
                        mb-5
                        sm:mb-6
                    ">
                        Around here
                    </p>


                    <div className="
                        border-t
                        border-[#D9E0E3]
                    ">


                        {/* READ */}

                        <div className="
                            py-6
                            sm:py-7
                            border-b
                            border-[#D9E0E3]
                            grid
                            grid-cols-[40px_1fr]
                            sm:flex
                            sm:flex-row
                            sm:items-center
                            gap-x-4
                            gap-y-2
                            sm:gap-8
                            md:gap-12
                        ">

                            <span className="
                                text-xs
                                sm:text-sm
                                text-[#98A3A7]
                                sm:w-16
                                md:w-24
                            ">
                                01
                            </span>


                            <h3 className="
                                text-lg
                                sm:text-xl
                                font-semibold
                                sm:w-32
                                md:w-48
                            ">
                                Read
                            </h3>


                            <p className="
                                col-start-2
                                sm:col-start-auto
                                text-sm
                                text-[#7A878C]
                                leading-6
                            ">
                                Explore articles and discover new ideas.
                            </p>

                        </div>



                        {/* DISCOVER */}

                        <div className="
                            py-6
                            sm:py-7
                            border-b
                            border-[#D9E0E3]
                            grid
                            grid-cols-[40px_1fr]
                            sm:flex
                            sm:flex-row
                            sm:items-center
                            gap-x-4
                            gap-y-2
                            sm:gap-8
                            md:gap-12
                        ">

                            <span className="
                                text-xs
                                sm:text-sm
                                text-[#98A3A7]
                                sm:w-16
                                md:w-24
                            ">
                                02
                            </span>


                            <h3 className="
                                text-lg
                                sm:text-xl
                                font-semibold
                                sm:w-32
                                md:w-48
                            ">
                                Discover
                            </h3>


                            <p className="
                                col-start-2
                                sm:col-start-auto
                                text-sm
                                text-[#7A878C]
                                leading-6
                            ">
                                Find stories that make you stop and think.
                            </p>

                        </div>



                        {/* SHARE */}

                        <div className="
                            py-6
                            sm:py-7
                            border-b
                            border-[#D9E0E3]
                            grid
                            grid-cols-[40px_1fr]
                            sm:flex
                            sm:flex-row
                            sm:items-center
                            gap-x-4
                            gap-y-2
                            sm:gap-8
                            md:gap-12
                        ">

                            <span className="
                                text-xs
                                sm:text-sm
                                text-[#98A3A7]
                                sm:w-16
                                md:w-24
                            ">
                                03
                            </span>


                            <h3 className="
                                text-lg
                                sm:text-xl
                                font-semibold
                                sm:w-32
                                md:w-48
                            ">
                                Share
                            </h3>


                            <p className="
                                col-start-2
                                sm:col-start-auto
                                text-sm
                                text-[#7A878C]
                                leading-6
                            ">
                                Turn your own thoughts into something
                                others can read.
                            </p>

                        </div>

                    </div>

                </section>



                {/* =================================================
                    CTA
                ================================================= */}

                <section className="
                    mt-14
                    sm:mt-20
                    md:mt-24
                    bg-[#426B72]
                    text-white
                    p-6
                    sm:p-8
                    md:p-12
                    flex
                    flex-col
                    md:flex-row
                    md:items-end
                    md:justify-between
                    gap-7
                    sm:gap-8
                ">


                    <div>

                        <p className="
                            text-[9px]
                            sm:text-[10px]
                            uppercase
                            tracking-[0.2em]
                            text-white/60
                            mb-3
                            sm:mb-4
                        ">
                            Start exploring
                        </p>


                        <h3 className="
                            text-2xl
                            sm:text-3xl
                            md:text-4xl
                            font-bold
                            leading-tight
                            max-w-xl
                        ">
                            There might be something here
                            you'll want to read.
                        </h3>

                    </div>



                    <Link
                        to="/blogs"
                        className="
                            inline-flex
                            items-center
                            self-start
                            md:self-auto
                            bg-white
                            text-[#426B72]
                            px-5
                            sm:px-6
                            py-3
                            text-sm
                            font-semibold
                            hover:bg-[#EEF2F3]
                            transition
                            whitespace-nowrap
                        "
                    >
                        Explore articles

                        <span className="ml-3">
                            →
                        </span>

                    </Link>

                </section>

            </main>



            {/* =================================================
                FOOTER
            ================================================= */}

            <footer className="
                border-t
                border-[#D9E0E3]
            ">

                <div className="
                    max-w-6xl
                    mx-auto
                    px-5
                    sm:px-8
                    md:px-12
                    py-6
                    sm:py-7
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-3
                    text-xs
                    sm:text-sm
                    text-[#7A878C]
                ">

                    <p>
                        YourBlog
                    </p>


                    <Link
                        to="/home"
                        className="
                            self-start
                            sm:self-auto
                            hover:text-[#426B72]
                            transition
                        "
                    >
                        Back home →
                    </Link>

                </div>

            </footer>

        </div>
    );
}

export default About;