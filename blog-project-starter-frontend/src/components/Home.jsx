import React from "react";
import { useNavigate } from "react-router-dom";

import BlogProfileImage from "../assets/Blog Website Design.jpg";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import BlogImage from "../assets/blogImage.png";

import Footer from "./common/Footer";


function Home() {

    const navigate = useNavigate();

    return (

        <div className="bg-[#F4F7F8] text-[#17232A] min-h-screen">


            {/* ================= HERO ================= */}

            <section className="
                max-w-6xl
                mx-auto
                px-5
                sm:px-8
                md:px-10
                pt-12
                sm:pt-16
                md:pt-24
                pb-16
                sm:pb-20
                md:pb-24
            ">

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-12
                    sm:gap-14
                    md:gap-16
                    items-center
                ">


                    {/* TEXT */}

                    <div className="min-w-0">

                        <p className="
                            text-[11px]
                            sm:text-xs
                            md:text-sm
                            uppercase
                            tracking-[0.22em]
                            sm:tracking-[0.3em]
                            text-[#477681]
                            font-semibold
                            mb-4
                            sm:mb-6
                        ">
                            Welcome to my little corner
                        </p>


                        <h1 className="
                            text-[42px]
                            leading-[1.02]
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                            font-bold
                            tracking-tight
                            text-[#17232A]
                        ">

                            Stories,

                            <br />

                            <span className="text-[#477681]">
                                ideas
                            </span>

                            {" "} &

                            <br />

                            everything

                            <br />

                            in between.

                        </h1>


                        <p className="
                            mt-5
                            sm:mt-7
                            text-base
                            sm:text-lg
                            leading-7
                            sm:leading-8
                            text-[#66808A]
                            max-w-lg
                        ">
                            Hi, I'm Jacky. I write about technology,
                            things I'm learning, projects I'm building,
                            and the random thoughts that are worth
                            putting into words.
                        </p>


                        {/* BUTTONS */}

                        <div className="
                            flex
                            flex-col
                            sm:flex-row
                            flex-wrap
                            gap-3
                            sm:gap-4
                            mt-7
                            sm:mt-8
                        ">


                            {/* READ BLOGS */}

                            <button
                                onClick={() => navigate("/blogs")}
                                className="
                                    w-full
                                    sm:w-auto
                                    px-6
                                    sm:px-7
                                    py-3
                                    sm:py-3.5
                                    rounded-full
                                    bg-[#477681]
                                    text-white
                                    font-semibold
                                    hover:bg-[#17232A]
                                    hover:-translate-y-1
                                    transition
                                    duration-300
                                "
                            >
                                Read my blogs
                            </button>


                            {/* ABOUT */}

                            <button
                                onClick={() => navigate("/about")}
                                className="
                                    w-full
                                    sm:w-auto
                                    px-6
                                    sm:px-7
                                    py-3
                                    sm:py-3.5
                                    rounded-full
                                    border
                                    border-[#17232A]
                                    text-[#17232A]
                                    font-semibold
                                    hover:bg-[#17232A]
                                    hover:text-white
                                    transition
                                    duration-300
                                "
                            >
                                About me
                            </button>

                        </div>

                    </div>



                    {/* IMAGE */}

                    <div className="
                        relative
                        flex
                        justify-center
                        md:justify-end
                        mt-4
                        md:mt-0
                        px-4
                        sm:px-8
                        md:px-0
                    ">


                        {/* BACKGROUND CIRCLE */}

                        <div className="
                            absolute
                            w-56
                            h-56
                            sm:w-72
                            sm:h-72
                            md:w-80
                            md:h-80
                            lg:w-96
                            lg:h-96
                            rounded-full
                            bg-[#DCE7EA]
                            -top-4
                            sm:-top-5
                            right-1/2
                            translate-x-1/2
                            md:right-0
                            md:translate-x-0
                        ">
                        </div>


                        {/* SMALL CIRCLE */}

                        <div className="
                            absolute
                            w-16
                            h-16
                            sm:w-20
                            sm:h-20
                            md:w-24
                            md:h-24
                            rounded-full
                            bg-[#BFD3D8]
                            bottom-0
                            left-2
                            sm:left-8
                            md:left-12
                        ">
                        </div>


                        <img
                            src={BlogProfileImage}
                            alt="Profile"
                            className="
                                relative
                                z-10
                                w-full
                                max-w-[280px]
                                sm:max-w-[340px]
                                md:max-w-[370px]
                                lg:max-w-[390px]
                                aspect-[4/5]
                                rounded-[1.5rem]
                                sm:rounded-[2rem]
                                object-cover
                                shadow-xl
                                rotate-2
                            "
                        />

                    </div>

                </div>

            </section>



            {/* ================= TOPICS ================= */}

            <section className="
                bg-[#17232A]
                text-white
                py-6
                sm:py-7
                md:py-8
            ">

                <div className="
                    max-w-6xl
                    mx-auto
                    px-5
                    sm:px-8
                    md:px-10
                    flex
                    flex-wrap
                    justify-center
                    md:justify-between
                    gap-x-6
                    gap-y-3
                    sm:gap-y-4
                    text-[10px]
                    sm:text-xs
                    md:text-sm
                    uppercase
                    tracking-[0.15em]
                    sm:tracking-[0.2em]
                ">

                    <span>Technology</span>
                    <span>Learning</span>
                    <span>Projects</span>
                    <span>Life</span>
                    <span>Ideas</span>

                </div>

            </section>



            {/* ================= ABOUT SECTION ================= */}

            <section className="
                max-w-6xl
                mx-auto
                px-5
                sm:px-8
                md:px-10
                py-16
                sm:py-20
                md:py-24
            ">

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-12
                    sm:gap-14
                    md:gap-16
                    items-center
                ">


                    {/* TEXT */}

                    <div className="order-2 md:order-1">

                        <p className="
                            text-[11px]
                            sm:text-xs
                            md:text-sm
                            uppercase
                            tracking-[0.2em]
                            sm:tracking-[0.25em]
                            text-[#477681]
                            font-semibold
                            mb-3
                            sm:mb-4
                        ">
                            A little about this blog
                        </p>


                        <h2 className="
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            font-bold
                            leading-[1.05]
                            text-[#17232A]
                        ">

                            Learning,

                            <br />

                            building,

                            <br />

                            <span className="text-[#477681]">
                                sharing.
                            </span>

                        </h2>


                        <p className="
                            mt-5
                            sm:mt-6
                            text-[#66808A]
                            text-base
                            sm:text-lg
                            leading-7
                            sm:leading-8
                            max-w-xl
                        ">
                            This blog is where I document the things
                            I'm learning while building websites and
                            applications. Some posts are technical,
                            some are personal, and some are simply
                            things I found interesting.
                        </p>


                        <button
                            onClick={() => navigate("/about")}
                            className="
                                mt-6
                                sm:mt-7
                                text-[#477681]
                                font-semibold
                                border-b-2
                                border-[#477681]
                                pb-1
                                hover:text-[#17232A]
                                hover:border-[#17232A]
                                transition
                            "
                        >
                            More about me →
                        </button>

                    </div>



                    {/* IMAGE */}

                    <div className="
                        order-1
                        md:order-2
                        flex
                        justify-center
                    ">

                        <img
                            src={BlogImage}
                            alt="Writing"
                            className="
                                w-56
                                sm:w-64
                                md:w-72
                                lg:w-80
                                max-w-full
                                rounded-[1.5rem]
                                sm:rounded-[2rem]
                                shadow-lg
                                -rotate-3
                            "
                        />

                    </div>

                </div>

            </section>



            {/* ================= PROJECTS ================= */}

            <section className="
                bg-[#EAF0F2]
                py-16
                sm:py-20
                md:py-24
            ">

                <div className="
                    max-w-6xl
                    mx-auto
                    px-5
                    sm:px-8
                    md:px-10
                ">


                    {/* SECTION HEADER */}

                    <div className="
                        flex
                        flex-col
                        md:flex-row
                        md:items-end
                        justify-between
                        gap-5
                        sm:gap-6
                        mb-9
                        sm:mb-12
                    ">

                        <div>

                            <p className="
                                text-[11px]
                                sm:text-xs
                                md:text-sm
                                uppercase
                                tracking-[0.2em]
                                sm:tracking-[0.25em]
                                text-[#477681]
                                font-semibold
                                mb-2
                                sm:mb-3
                            ">
                                Things I've built
                            </p>


                            <h2 className="
                                text-3xl
                                sm:text-4xl
                                md:text-5xl
                                font-bold
                                text-[#17232A]
                            ">
                                A few projects
                            </h2>

                        </div>


                        <p className="
                            text-[#66808A]
                            text-sm
                            sm:text-base
                            max-w-md
                            leading-7
                        ">
                            A collection of projects I've worked on
                            while learning and experimenting with
                            different technologies.
                        </p>

                    </div>



                    {/* PROJECT CARDS */}

                    <div className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        gap-5
                        sm:gap-6
                        md:gap-7
                    ">


                        {/* PROJECT 1 */}

                        <div className="
                            bg-white
                            p-3
                            sm:p-4
                            rounded-xl
                            sm:rounded-2xl
                            hover:-translate-y-2
                            transition
                            duration-300
                        ">

                            <img
                                src={P1}
                                alt="Project 1"
                                className="
                                    w-full
                                    h-48
                                    sm:h-52
                                    object-cover
                                    rounded-lg
                                    sm:rounded-xl
                                "
                            />


                            <div className="px-2 pt-4 sm:pt-5 pb-2">

                                <p className="
                                    text-[10px]
                                    sm:text-xs
                                    uppercase
                                    tracking-widest
                                    text-[#477681]
                                    font-semibold
                                ">
                                    Project 01
                                </p>


                                <h3 className="
                                    text-lg
                                    sm:text-xl
                                    font-bold
                                    mt-2
                                    text-[#17232A]
                                ">
                                    My First Project
                                </h3>

                            </div>

                        </div>



                        {/* PROJECT 2 */}

                        <div className="
                            bg-white
                            p-3
                            sm:p-4
                            rounded-xl
                            sm:rounded-2xl
                            hover:-translate-y-2
                            transition
                            duration-300
                        ">

                            <img
                                src={P2}
                                alt="Project 2"
                                className="
                                    w-full
                                    h-48
                                    sm:h-52
                                    object-cover
                                    rounded-lg
                                    sm:rounded-xl
                                "
                            />


                            <div className="px-2 pt-4 sm:pt-5 pb-2">

                                <p className="
                                    text-[10px]
                                    sm:text-xs
                                    uppercase
                                    tracking-widest
                                    text-[#477681]
                                    font-semibold
                                ">
                                    Project 02
                                </p>


                                <h3 className="
                                    text-lg
                                    sm:text-xl
                                    font-bold
                                    mt-2
                                    text-[#17232A]
                                ">
                                    Something I Built
                                </h3>

                            </div>

                        </div>



                        {/* PROJECT 3 */}

                        <div className="
                            bg-white
                            p-3
                            sm:p-4
                            rounded-xl
                            sm:rounded-2xl
                            hover:-translate-y-2
                            transition
                            duration-300
                        ">

                            <img
                                src={P3}
                                alt="Project 3"
                                className="
                                    w-full
                                    h-48
                                    sm:h-52
                                    object-cover
                                    rounded-lg
                                    sm:rounded-xl
                                "
                            />


                            <div className="px-2 pt-4 sm:pt-5 pb-2">

                                <p className="
                                    text-[10px]
                                    sm:text-xs
                                    uppercase
                                    tracking-widest
                                    text-[#477681]
                                    font-semibold
                                ">
                                    Project 03
                                </p>


                                <h3 className="
                                    text-lg
                                    sm:text-xl
                                    font-bold
                                    mt-2
                                    text-[#17232A]
                                ">
                                    Another Experiment
                                </h3>

                            </div>

                        </div>


                    </div>

                </div>

            </section>



            {/* ================= BLOG CTA ================= */}

            <section className="
                max-w-6xl
                mx-auto
                px-5
                sm:px-8
                md:px-10
                py-16
                sm:py-20
                md:py-24
            ">

                <div className="
                    bg-[#477681]
                    rounded-[1.5rem]
                    sm:rounded-[2rem]
                    px-6
                    sm:px-10
                    md:px-16
                    py-10
                    sm:py-12
                    md:py-14
                    text-white
                    relative
                    overflow-hidden
                ">


                    {/* DECORATIVE CIRCLE */}

                    <div className="
                        absolute
                        w-36
                        h-36
                        sm:w-44
                        sm:h-44
                        md:w-52
                        md:h-52
                        rounded-full
                        bg-[#5D8790]
                        -right-12
                        sm:-right-16
                        -top-12
                        sm:-top-16
                    ">
                    </div>


                    <div className="
                        absolute
                        w-20
                        h-20
                        sm:w-24
                        sm:h-24
                        md:w-28
                        md:h-28
                        rounded-full
                        bg-[#BFD3D8]
                        right-16
                        sm:right-24
                        -bottom-8
                        sm:-bottom-12
                    ">
                    </div>


                    <div className="relative z-10">

                        <p className="
                            text-[10px]
                            sm:text-xs
                            md:text-sm
                            uppercase
                            tracking-[0.2em]
                            sm:tracking-[0.25em]
                            text-[#DCE7EA]
                            font-semibold
                        ">
                            From the blog
                        </p>


                        <h2 className="
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-bold
                            mt-3
                            sm:mt-4
                            max-w-2xl
                            leading-tight
                        ">
                            Curious about what I'm learning?
                        </h2>


                        <p className="
                            mt-4
                            sm:mt-5
                            text-[#EAF0F2]
                            text-base
                            sm:text-lg
                            max-w-xl
                            leading-7
                        ">
                            Come have a look around. There might be
                            something here that helps you, teaches
                            you, or simply makes you curious.
                        </p>


                        <button
                            onClick={() => navigate("/blogs")}
                            className="
                                mt-6
                                sm:mt-8
                                w-full
                                sm:w-auto
                                px-6
                                sm:px-7
                                py-3
                                sm:py-3.5
                                rounded-full
                                bg-white
                                text-[#477681]
                                font-bold
                                hover:bg-[#EAF0F2]
                                hover:text-[#17232A]
                                transition
                                duration-300
                            "
                        >
                            Explore the blogs →
                        </button>

                    </div>

                </div>

            </section>



            <Footer />

        </div>

    );
}


export default Home;