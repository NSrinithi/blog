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
                px-6
                md:px-10
                pt-16
                md:pt-24
                pb-20
            ">

                <div className="
                    grid
                    md:grid-cols-2
                    gap-12
                    items-center
                ">


                    {/* TEXT */}

                    <div>

                        <p className="
                            text-sm
                            uppercase
                            tracking-[0.3em]
                            text-[#477681]
                            font-semibold
                            mb-6
                        ">
                            Welcome to my little corner
                        </p>


                        <h1 className="
                            text-5xl
                            md:text-7xl
                            font-bold
                            leading-[1.05]
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
                            mt-7
                            text-lg
                            leading-8
                            text-[#66808A]
                            max-w-lg
                        ">
                            Hi, I'm Jacky. I write about technology,
                            things I'm learning, projects I'm building,
                            and the random thoughts that are worth
                            putting into words.
                        </p>


                        <div className="
                            flex
                            flex-wrap
                            gap-4
                            mt-8
                        ">


                            {/* READ BLOGS */}

                            <button
                                onClick={() => navigate("/blogs")}
                                className="
                                    px-7
                                    py-3.5
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
                                    px-7
                                    py-3.5
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
                    ">


                        {/* BACKGROUND CIRCLE */}

                        <div className="
                            absolute
                            w-72
                            h-72
                            md:w-96
                            md:h-96
                            rounded-full
                            bg-[#DCE7EA]
                            -top-5
                            -right-2
                        ">
                        </div>


                        {/* SMALL CIRCLE */}

                        <div className="
                            absolute
                            w-24
                            h-24
                            rounded-full
                            bg-[#BFD3D8]
                            bottom-2
                            left-5
                            md:left-12
                        ">
                        </div>


                        <img
                            src={BlogProfileImage}
                            alt="Profile"
                            className="
                                relative
                                z-10
                                w-72
                                md:w-96
                                rounded-[2rem]
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
                py-8
            ">

                <div className="
                    max-w-6xl
                    mx-auto
                    px-6
                    md:px-10
                    flex
                    flex-wrap
                    justify-center
                    md:justify-between
                    gap-6
                    text-sm
                    uppercase
                    tracking-[0.2em]
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
                px-6
                md:px-10
                py-24
            ">

                <div className="
                    grid
                    md:grid-cols-2
                    gap-16
                    items-center
                ">


                    <div className="order-2 md:order-1">

                        <p className="
                            text-sm
                            uppercase
                            tracking-[0.25em]
                            text-[#477681]
                            font-semibold
                            mb-4
                        ">
                            A little about this blog
                        </p>


                        <h2 className="
                            text-4xl
                            md:text-6xl
                            font-bold
                            leading-tight
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
                            mt-6
                            text-[#66808A]
                            text-lg
                            leading-8
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
                                mt-7
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
                                w-64
                                md:w-80
                                rounded-[2rem]
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
                py-20
            ">

                <div className="
                    max-w-6xl
                    mx-auto
                    px-6
                    md:px-10
                ">


                    <div className="
                        flex
                        flex-col
                        md:flex-row
                        md:items-end
                        justify-between
                        gap-5
                        mb-12
                    ">

                        <div>

                            <p className="
                                text-sm
                                uppercase
                                tracking-[0.25em]
                                text-[#477681]
                                font-semibold
                                mb-3
                            ">
                                Things I've built
                            </p>


                            <h2 className="
                                text-4xl
                                md:text-5xl
                                font-bold
                                text-[#17232A]
                            ">
                                A few projects
                            </h2>

                        </div>


                        <p className="
                            text-[#66808A]
                            max-w-md
                        ">
                            A collection of projects I've worked on
                            while learning and experimenting with
                            different technologies.
                        </p>

                    </div>



                    <div className="
                        grid
                        md:grid-cols-3
                        gap-7
                    ">


                        {/* PROJECT 1 */}

                        <div className="
                            bg-white
                            p-4
                            rounded-2xl
                            hover:-translate-y-2
                            transition
                            duration-300
                        ">

                            <img
                                src={P1}
                                alt="Project 1"
                                className="
                                    w-full
                                    h-52
                                    object-cover
                                    rounded-xl
                                "
                            />


                            <div className="px-2 pt-5 pb-2">

                                <p className="
                                    text-xs
                                    uppercase
                                    tracking-widest
                                    text-[#477681]
                                    font-semibold
                                ">
                                    Project 01
                                </p>


                                <h3 className="
                                    text-xl
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
                            p-4
                            rounded-2xl
                            hover:-translate-y-2
                            transition
                            duration-300
                        ">

                            <img
                                src={P2}
                                alt="Project 2"
                                className="
                                    w-full
                                    h-52
                                    object-cover
                                    rounded-xl
                                "
                            />


                            <div className="px-2 pt-5 pb-2">

                                <p className="
                                    text-xs
                                    uppercase
                                    tracking-widest
                                    text-[#477681]
                                    font-semibold
                                ">
                                    Project 02
                                </p>


                                <h3 className="
                                    text-xl
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
                            p-4
                            rounded-2xl
                            hover:-translate-y-2
                            transition
                            duration-300
                        ">

                            <img
                                src={P3}
                                alt="Project 3"
                                className="
                                    w-full
                                    h-52
                                    object-cover
                                    rounded-xl
                                "
                            />


                            <div className="px-2 pt-5 pb-2">

                                <p className="
                                    text-xs
                                    uppercase
                                    tracking-widest
                                    text-[#477681]
                                    font-semibold
                                ">
                                    Project 03
                                </p>


                                <h3 className="
                                    text-xl
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
                px-6
                md:px-10
                py-24
            ">

                <div className="
                    bg-[#477681]
                    rounded-[2rem]
                    px-8
                    md:px-16
                    py-14
                    text-white
                    relative
                    overflow-hidden
                ">


                    {/* DECORATIVE CIRCLE */}

                    <div className="
                        absolute
                        w-52
                        h-52
                        rounded-full
                        bg-[#5D8790]
                        -right-16
                        -top-16
                    ">
                    </div>


                    <div className="
                        absolute
                        w-28
                        h-28
                        rounded-full
                        bg-[#BFD3D8]
                        right-28
                        -bottom-12
                    ">
                    </div>


                    <div className="relative z-10">

                        <p className="
                            text-sm
                            uppercase
                            tracking-[0.25em]
                            text-[#DCE7EA]
                            font-semibold
                        ">
                            From the blog
                        </p>


                        <h2 className="
                            text-4xl
                            md:text-6xl
                            font-bold
                            mt-4
                            max-w-2xl
                        ">
                            Curious about what
                            I'm learning?
                        </h2>


                        <p className="
                            mt-5
                            text-[#EAF0F2]
                            text-lg
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
                                mt-8
                                px-7
                                py-3.5
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