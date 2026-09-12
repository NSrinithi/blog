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

        <div className="min-h-screen bg-[#F4F7F8] text-[#172126]">

            {/* TOP BAR */}

            <div className="px-6 md:px-12 pt-7">

                <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-[#D9E0E3] pb-5">

                    <Link
                        to="/home"
                        className="flex items-center gap-3"
                    >

                        <div className="w-10 h-10 rounded-full bg-[#426B72] text-white flex items-center justify-center font-bold text-lg">
                            {userName
                                ? userName.charAt(0).toUpperCase()
                                : "Y"
                            }
                        </div>

                        <div>

                            <h1 className="text-xl font-bold tracking-tight">
                                {userName || "Admin"}
                            </h1>

                            <p className="text-[11px] uppercase tracking-[0.2em] text-[#7A878C] mt-1">
                                Admin
                            </p>

                        </div>

                    </Link>


                    <Link
                        to="/blogs"
                        className="text-sm font-semibold text-[#426B72] hover:text-[#284D53] transition"
                    >
                        View Blog →
                    </Link>

                </div>

            </div>


            {/* MAIN */}

            <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">


                {/* HERO */}

                <section className="mb-12">

                    <p className="text-sm uppercase tracking-[0.2em] text-[#6F8085] mb-4">
                        Admin space
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] max-w-3xl leading-[1.05]">
                        Good to see you back.
                    </h2>

                    <p className="mt-5 text-[#69777C] max-w-xl leading-7">
                        Keep an eye on your articles, engagement, and the
                        latest things happening on your blog.
                    </p>

                </section>


                {/* STATS */}

                <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">

                    {/* TOTAL POSTS */}

                    <div className="bg-white border border-[#DCE3E5] p-7">

                        <div className="flex items-center justify-between">

                            <p className="text-sm text-[#718087]">
                                Total posts
                            </p>

                            <span className="text-xs uppercase tracking-wider text-[#426B72]">
                                Articles
                            </span>

                        </div>

                        <p className="text-5xl font-bold mt-8">
                            {blogCount}
                        </p>

                    </div>


                    {/* TOTAL LIKES */}

                    <div className="bg-white border border-[#DCE3E5] p-7">

                        <div className="flex items-center justify-between">

                            <p className="text-sm text-[#718087]">
                                Total likes
                            </p>

                            <span className="text-xs uppercase tracking-wider text-[#426B72]">
                                Engagement
                            </span>

                        </div>

                        <p className="text-5xl font-bold mt-8">
                            {likes}
                        </p>

                    </div>


                    {/* STATUS */}

                    <div className="bg-[#426B72] text-white p-7">

                        <div className="flex items-center justify-between">

                            <p className="text-sm text-white/70">
                                Blog status
                            </p>

                            <span className="w-2 h-2 rounded-full bg-white"></span>

                        </div>

                        <p className="text-3xl font-bold mt-8">
                            Active
                        </p>

                        <p className="text-sm text-white/70 mt-2">
                            Your blog is live and ready.
                        </p>

                    </div>

                </section>


                {/* LATEST POST */}

                <section className="mb-14">

                    <div className="flex items-end justify-between mb-5">

                        <div>

                            <p className="text-xs uppercase tracking-[0.2em] text-[#718087] mb-2">
                                Latest
                            </p>

                            <h3 className="text-2xl font-bold">
                                Your newest article
                            </h3>

                        </div>

                        <Link
                            to="/blogs"
                            className="hidden md:block text-sm font-semibold text-[#426B72]"
                        >
                            Manage articles →
                        </Link>

                    </div>


                    {latestBlog ? (

                        <div className="bg-white border border-[#DCE3E5] grid md:grid-cols-[1.1fr_1fr]">

                            {/* IMAGE */}

                            <div className="h-72 md:h-[380px] bg-[#E8EDEF] overflow-hidden">

                                {latestBlog.imageUrl ? (

                                    <img
                                        src={latestBlog.imageUrl}
                                        alt={latestBlog.newTitle}
                                        className="w-full h-full object-cover"
                                    />

                                ) : (

                                    <div className="w-full h-full flex items-center justify-center text-[#8A969A]">
                                        No image
                                    </div>

                                )}

                            </div>


                            {/* CONTENT */}

                            <div className="p-7 md:p-10 flex flex-col justify-between">

                                <div>

                                    <p className="text-xs uppercase tracking-[0.18em] text-[#718087]">
                                        {latestBlog.date}
                                    </p>

                                    <h4 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mt-5">
                                        {latestBlog.newTitle}
                                    </h4>

                                    <p className="text-[#69777C] leading-7 mt-5 line-clamp-4">
                                        {latestBlog.newContent}
                                    </p>

                                </div>


                                <div className="flex items-center justify-between mt-8 pt-5 border-t border-[#E1E6E8]">

                                    <span className="text-sm text-[#718087]">
                                        {latestBlog.likes || 0} likes
                                    </span>

                                    <Link
                                        to="/blogs"
                                        className="text-sm font-semibold text-[#426B72]"
                                    >
                                        Open blog →
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ) : (

                        <div className="bg-white border border-[#DCE3E5] p-10">

                            <p className="text-[#718087]">
                                You haven't published any articles yet.
                            </p>

                            <Link
                                to="/blogs"
                                className="inline-block mt-5 text-sm font-semibold text-[#426B72]"
                            >
                                Create your first article →
                            </Link>

                        </div>

                    )}

                </section>


                {/* RECENT POSTS */}

                <section>

                    <div className="flex items-end justify-between mb-5">

                        <div>

                            <p className="text-xs uppercase tracking-[0.2em] text-[#718087] mb-2">
                                Archive
                            </p>

                            <h3 className="text-2xl font-bold">
                                Recent posts
                            </h3>

                        </div>

                        <Link
                            to="/blogs"
                            className="text-sm font-semibold text-[#426B72]"
                        >
                            View all →
                        </Link>

                    </div>


                    {blogs.length > 0 ? (

                        <div className="border-t border-[#D9E0E3]">

                            {blogs.slice(0, 5).map((blog, index) => (

                                <div
                                    key={blog._id}
                                    className="py-6 border-b border-[#D9E0E3] flex items-center gap-5"
                                >

                                    {/* NUMBER */}

                                    <span className="text-sm text-[#98A3A7] w-6">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>


                                    {/* IMAGE */}

                                    <div className="w-20 h-16 bg-[#E8EDEF] overflow-hidden shrink-0">

                                        {blog.imageUrl && (

                                            <img
                                                src={blog.imageUrl}
                                                alt={blog.newTitle}
                                                className="w-full h-full object-cover"
                                            />

                                        )}

                                    </div>


                                    {/* TITLE */}

                                    <div className="flex-1 min-w-0">

                                        <h4 className="font-semibold truncate">
                                            {blog.newTitle}
                                        </h4>

                                        <p className="text-sm text-[#7A878C] mt-1">
                                            {blog.date}
                                        </p>

                                    </div>


                                    {/* LIKES */}

                                    <div className="hidden sm:block text-sm text-[#718087]">
                                        {blog.likes || 0} likes
                                    </div>


                                    {/* LINK */}

                                    <Link
                                        to="/blogs"
                                        className="text-sm font-semibold text-[#426B72]"
                                    >
                                        View
                                    </Link>

                                </div>

                            ))}

                        </div>

                    ) : (

                        <div className="border-t border-[#D9E0E3] py-8 text-[#718087]">
                            No posts available.
                        </div>

                    )}

                </section>

            </main>


            {/* FOOTER */}

            <footer className="border-t border-[#D9E0E3] mt-10">

                <div className="max-w-7xl mx-auto px-6 md:px-12 py-7 flex flex-col md:flex-row gap-3 justify-between text-sm text-[#7A878C]">

                    <p>
                        Admin dashboard
                    </p>

                    <p>
                        {userName || "Admin"}
                    </p>

                </div>

            </footer>

        </div>

    );

}

export default AdminDashBoard;