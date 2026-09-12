import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../config/firebase";

function AdminDashBoard() {

    const [blogs, setBlogs] = useState([]);
    const [blogCount, setBlogCount] = useState(0);
    const [likes, setLikes] = useState(0);
    const [userName, setUserName] = useState("");


    // Get logged-in Firebase user
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUserName(user.displayName || user.email);
            } else {
                setUserName("");
            }

        });


        return () => unsubscribe();

    }, []);


    // Get blogs
    useEffect(() => {

        getBlogs();

    }, []);


    const getBlogs = async () => {

        try {

            const response = await axios.get(
                "https://blog-1lys.onrender.com/api/blogs"
            );


            const data = response.data;

            setBlogs(data);
            setBlogCount(data.length);


            const totalLikes = data.reduce(
                (total, blog) => total + (blog.likes || 0),
                0
            );


            setLikes(totalLikes);

        } catch (error) {

            console.log("Error fetching blogs:", error);

        }

    };


    const latestBlog = blogs.length > 0 ? blogs[0] : null;


    return (

        <div className="
            min-h-screen
            bg-[#F4F7F8]
            text-[#172126]
        ">


            {/* =================================================
                TOP BAR
            ================================================= */}

            <div className="
                px-5
                sm:px-8
                md:px-12
                pt-5
                sm:pt-7
            ">

                <div className="
                    max-w-7xl
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


                    {/* PROFILE */}

                    <Link
                        to="/home"
                        className="
                            flex
                            items-center
                            gap-3
                            min-w-0
                        "
                    >

                        <div className="
                            w-10
                            h-10
                            sm:w-11
                            sm:h-11
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

                            {userName
                                ? userName.charAt(0).toUpperCase()
                                : "Y"
                            }

                        </div>


                        <div className="min-w-0">

                            <h1 className="
                                text-base
                                sm:text-xl
                                font-bold
                                tracking-tight
                                truncate
                                max-w-[220px]
                                sm:max-w-none
                            ">
                                {userName || "Admin"}
                            </h1>


                            <p className="
                                text-[10px]
                                sm:text-[11px]
                                uppercase
                                tracking-[0.2em]
                                text-[#7A878C]
                                mt-1
                            ">
                                Admin
                            </p>

                        </div>

                    </Link>



                    {/* VIEW BLOG */}

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
                        View Blog →
                    </Link>

                </div>

            </div>



            {/* =================================================
                MAIN
            ================================================= */}

            <main className="
                max-w-7xl
                mx-auto
                px-5
                sm:px-8
                md:px-12
                py-9
                sm:py-12
                md:py-14
            ">


                {/* =================================================
                    HERO
                ================================================= */}

                <section className="
                    mb-9
                    sm:mb-12
                ">

                    <p className="
                        text-[11px]
                        sm:text-sm
                        uppercase
                        tracking-[0.2em]
                        text-[#6F8085]
                        mb-3
                        sm:mb-4
                    ">
                        Admin space
                    </p>


                    <h2 className="
                        text-4xl
                        sm:text-5xl
                        md:text-6xl
                        font-bold
                        tracking-[-0.04em]
                        max-w-3xl
                        leading-[1.05]
                    ">
                        Good to see you back.
                    </h2>


                    <p className="
                        mt-4
                        sm:mt-5
                        text-sm
                        sm:text-base
                        text-[#69777C]
                        max-w-xl
                        leading-7
                    ">
                        Keep an eye on your articles, engagement,
                        and the latest things happening on your blog.
                    </p>

                </section>



                {/* =================================================
                    STATS
                ================================================= */}

                <section className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    gap-4
                    sm:gap-5
                    mb-10
                    sm:mb-14
                ">


                    {/* TOTAL POSTS */}

                    <div className="
                        bg-white
                        border
                        border-[#DCE3E5]
                        p-5
                        sm:p-7
                    ">

                        <div className="
                            flex
                            items-center
                            justify-between
                            gap-3
                        ">

                            <p className="
                                text-sm
                                text-[#718087]
                            ">
                                Total posts
                            </p>


                            <span className="
                                text-[10px]
                                sm:text-xs
                                uppercase
                                tracking-wider
                                text-[#426B72]
                            ">
                                Articles
                            </span>

                        </div>


                        <p className="
                            text-4xl
                            sm:text-5xl
                            font-bold
                            mt-6
                            sm:mt-8
                        ">
                            {blogCount}
                        </p>

                    </div>



                    {/* TOTAL LIKES */}

                    <div className="
                        bg-white
                        border
                        border-[#DCE3E5]
                        p-5
                        sm:p-7
                    ">

                        <div className="
                            flex
                            items-center
                            justify-between
                            gap-3
                        ">

                            <p className="
                                text-sm
                                text-[#718087]
                            ">
                                Total likes
                            </p>


                            <span className="
                                text-[10px]
                                sm:text-xs
                                uppercase
                                tracking-wider
                                text-[#426B72]
                            ">
                                Engagement
                            </span>

                        </div>


                        <p className="
                            text-4xl
                            sm:text-5xl
                            font-bold
                            mt-6
                            sm:mt-8
                        ">
                            {likes}
                        </p>

                    </div>



                    {/* STATUS */}

                    <div className="
                        bg-[#426B72]
                        text-white
                        p-5
                        sm:p-7
                        sm:col-span-2
                        md:col-span-1
                    ">

                        <div className="
                            flex
                            items-center
                            justify-between
                            gap-3
                        ">

                            <p className="
                                text-sm
                                text-white/70
                            ">
                                Blog status
                            </p>


                            <span className="
                                w-2
                                h-2
                                rounded-full
                                bg-white
                                shrink-0"
                            ></span>

                        </div>


                        <p className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                            mt-6
                            sm:mt-8
                        ">
                            Active
                        </p>


                        <p className="
                            text-sm
                            text-white/70
                            mt-2
                        ">
                            Your blog is live and ready.
                        </p>

                    </div>

                </section>



                {/* =================================================
                    LATEST POST
                ================================================= */}

                <section className="
                    mb-10
                    sm:mb-14
                ">


                    {/* SECTION HEADER */}

                    <div className="
                        flex
                        items-end
                        justify-between
                        gap-4
                        mb-5
                    ">

                        <div>

                            <p className="
                                text-[10px]
                                sm:text-xs
                                uppercase
                                tracking-[0.2em]
                                text-[#718087]
                                mb-2
                            ">
                                Latest
                            </p>


                            <h3 className="
                                text-xl
                                sm:text-2xl
                                font-bold
                            ">
                                Your newest article
                            </h3>

                        </div>


                        <Link
                            to="/blogs"
                            className="
                                hidden
                                sm:block
                                text-sm
                                font-semibold
                                text-[#426B72]
                                whitespace-nowrap
                            "
                        >
                            Manage articles →
                        </Link>

                    </div>



                    {latestBlog ? (

                        <div className="
                            bg-white
                            border
                            border-[#DCE3E5]
                            grid
                            grid-cols-1
                            md:grid-cols-[1.1fr_1fr]
                        ">


                            {/* IMAGE */}

                            <div className="
                                h-64
                                sm:h-80
                                md:h-[380px]
                                bg-[#E8EDEF]
                                overflow-hidden
                            ">

                                {latestBlog.imageUrl ? (

                                    <img
                                        src={latestBlog.imageUrl}
                                        alt={latestBlog.newTitle}
                                        className="
                                            w-full
                                            h-full
                                            object-cover
                                        "
                                    />

                                ) : (

                                    <div className="
                                        w-full
                                        h-full
                                        flex
                                        items-center
                                        justify-center
                                        text-[#8A969A]
                                        text-sm
                                    ">
                                        No image
                                    </div>

                                )}

                            </div>



                            {/* CONTENT */}

                            <div className="
                                p-5
                                sm:p-7
                                md:p-10
                                flex
                                flex-col
                                justify-between
                            ">

                                <div>

                                    <p className="
                                        text-[10px]
                                        sm:text-xs
                                        uppercase
                                        tracking-[0.18em]
                                        text-[#718087]
                                    ">
                                        {latestBlog.date}
                                    </p>


                                    <h4 className="
                                        text-2xl
                                        sm:text-3xl
                                        md:text-4xl
                                        font-bold
                                        tracking-tight
                                        leading-tight
                                        mt-4
                                        sm:mt-5
                                        break-words
                                    ">
                                        {latestBlog.newTitle}
                                    </h4>


                                    <p className="
                                        text-sm
                                        sm:text-base
                                        text-[#69777C]
                                        leading-7
                                        mt-4
                                        sm:mt-5
                                        line-clamp-4
                                    ">
                                        {latestBlog.newContent}
                                    </p>

                                </div>



                                {/* BOTTOM */}

                                <div className="
                                    flex
                                    flex-col
                                    xs:flex-row
                                    sm:flex-row
                                    sm:items-center
                                    sm:justify-between
                                    gap-4
                                    mt-7
                                    sm:mt-8
                                    pt-5
                                    border-t
                                    border-[#E1E6E8]
                                ">

                                    <span className="
                                        text-sm
                                        text-[#718087]
                                    ">
                                        {latestBlog.likes || 0} likes
                                    </span>


                                    <Link
                                        to="/blogs"
                                        className="
                                            text-sm
                                            font-semibold
                                            text-[#426B72]
                                        "
                                    >
                                        Open blog →
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ) : (

                        <div className="
                            bg-white
                            border
                            border-[#DCE3E5]
                            p-6
                            sm:p-10
                        ">

                            <p className="
                                text-sm
                                sm:text-base
                                text-[#718087]
                            ">
                                You haven't published any articles yet.
                            </p>


                            <Link
                                to="/blogs"
                                className="
                                    inline-block
                                    mt-5
                                    text-sm
                                    font-semibold
                                    text-[#426B72]
                                "
                            >
                                Create your first article →
                            </Link>

                        </div>

                    )}

                </section>



                {/* =================================================
                    RECENT POSTS
                ================================================= */}

                <section>


                    {/* SECTION HEADER */}

                    <div className="
                        flex
                        items-end
                        justify-between
                        gap-4
                        mb-5
                    ">

                        <div>

                            <p className="
                                text-[10px]
                                sm:text-xs
                                uppercase
                                tracking-[0.2em]
                                text-[#718087]
                                mb-2
                            ">
                                Archive
                            </p>


                            <h3 className="
                                text-xl
                                sm:text-2xl
                                font-bold
                            ">
                                Recent posts
                            </h3>

                        </div>


                        <Link
                            to="/blogs"
                            className="
                                text-sm
                                font-semibold
                                text-[#426B72]
                                whitespace-nowrap
                            "
                        >
                            View all →
                        </Link>

                    </div>



                    {blogs.length > 0 ? (

                        <div className="
                            border-t
                            border-[#D9E0E3]
                        ">

                            {blogs.slice(0, 5).map((blog, index) => (

                                <div
                                    key={blog._id}
                                    className="
                                        py-5
                                        sm:py-6
                                        border-b
                                        border-[#D9E0E3]
                                        flex
                                        items-center
                                        gap-3
                                        sm:gap-5
                                    "
                                >


                                    {/* NUMBER */}

                                    <span className="
                                        text-xs
                                        sm:text-sm
                                        text-[#98A3A7]
                                        w-5
                                        sm:w-6
                                        shrink-0
                                    ">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>



                                    {/* IMAGE */}

                                    <div className="
                                        w-16
                                        h-14
                                        sm:w-20
                                        sm:h-16
                                        bg-[#E8EDEF]
                                        overflow-hidden
                                        shrink-0
                                    ">

                                        {blog.imageUrl && (

                                            <img
                                                src={blog.imageUrl}
                                                alt={blog.newTitle}
                                                className="
                                                    w-full
                                                    h-full
                                                    object-cover
                                                "
                                            />

                                        )}

                                    </div>



                                    {/* TITLE */}

                                    <div className="
                                        flex-1
                                        min-w-0
                                    ">

                                        <h4 className="
                                            text-sm
                                            sm:text-base
                                            font-semibold
                                            truncate
                                        ">
                                            {blog.newTitle}
                                        </h4>


                                        <p className="
                                            text-xs
                                            sm:text-sm
                                            text-[#7A878C]
                                            mt-1
                                            truncate
                                        ">
                                            {blog.date}
                                        </p>

                                    </div>



                                    {/* LIKES */}

                                    <div className="
                                        hidden
                                        md:block
                                        text-sm
                                        text-[#718087]
                                        whitespace-nowrap
                                    ">
                                        {blog.likes || 0} likes
                                    </div>



                                    {/* LINK */}

                                    <Link
                                        to="/blogs"
                                        className="
                                            text-xs
                                            sm:text-sm
                                            font-semibold
                                            text-[#426B72]
                                            shrink-0
                                        "
                                    >
                                        View
                                    </Link>

                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="
                            border-t
                            border-[#D9E0E3]
                            py-8
                            text-sm
                            text-[#718087]
                        ">
                            No posts available.
                        </div>

                    )}

                </section>

            </main>



            {/* =================================================
                FOOTER
            ================================================= */}

            <footer className="
                border-t
                border-[#D9E0E3]
                mt-8
                sm:mt-10
            ">

                <div className="
                    max-w-7xl
                    mx-auto
                    px-5
                    sm:px-8
                    md:px-12
                    py-6
                    sm:py-7
                    flex
                    flex-col
                    sm:flex-row
                    gap-2
                    sm:gap-3
                    justify-between
                    text-xs
                    sm:text-sm
                    text-[#7A878C]
                ">

                    <p>
                        Admin dashboard
                    </p>


                    <p className="truncate">
                        {userName || "Admin"}
                    </p>

                </div>

            </footer>

        </div>

    );

}

export default AdminDashBoard;