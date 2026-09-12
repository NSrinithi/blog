import React, { useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../config/firebase";
import Footer from "./common/Footer";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [admin, setAdmin] = useState(false);

    const [loading, setLoading] = useState(false);

    const [editorOpen, setEditorOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editid, setEditId] = useState("");

    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [newImage, setNewImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        getBlogs();

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (
                user &&
                user.uid === import.meta.env.ADMIN_CODE
            ) {
                setAdmin(true);
            } else {
                setAdmin(false);
            }
        });

        return () => unsubscribe();
    }, []);

    async function getBlogs() {
        try {
            const response = await axios.get(
                "https://blog-1lys.onrender.com/api/blogs"
            );

            setBlogs(response.data);
        } catch (error) {
            console.log("Error fetching blogs:", error);
        }
    }

    const handleLike = async (blogId) => {
        try {
            const response = await axios.patch(
                `https://blog-1lys.onrender.com/api/blogs/like/${blogId}`
            );

            if (response.status === 200) {
                setBlogs((previousBlogs) =>
                    previousBlogs.map((blog) =>
                        blog._id === blogId
                            ? {
                                  ...blog,
                                  likes: response.data.likes,
                              }
                            : blog
                    )
                );
            }
        } catch (error) {
            console.log("Error liking blog:", error);
        }
    };

    async function handleDelete(id) {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this blog?"
        );

        if (!confirmDelete) return;

        try {
            const response = await axios.delete(
                `https://blog-1lys.onrender.com/api/blogs/delete/${id}`
            );

            if (response.status === 200) {
                setBlogs((previousBlogs) =>
                    previousBlogs.filter(
                        (blog) => blog._id !== id
                    )
                );
            }
        } catch (error) {
            console.log("Error deleting blog:", error);
        }
    }

    function openAddEditor() {
        setEdit(false);
        setEditId("");
        setNewTitle("");
        setNewContent("");
        setNewImage(null);
        setEditorOpen(true);

        setTimeout(() => {
            window.scrollTo({
                top: 250,
                behavior: "smooth",
            });
        }, 100);
    }

    async function handleEdit(id) {
        try {
            const response = await axios.get(
                `https://blog-1lys.onrender.com/api/blogs/${id}`
            );

            setEdit(true);
            setEditId(id);

            setNewTitle(response.data.newTitle);
            setNewContent(response.data.newContent);
            setNewImage(null);

            setEditorOpen(true);

            window.scrollTo({
                top: 250,
                behavior: "smooth",
            });
        } catch (error) {
            console.log("Error getting blog:", error);
        }
    }

    async function handleNewBlogSubmit(event) {
        event.preventDefault();

        if (
            !newTitle.trim() ||
            !newContent.trim() ||
            !newImage
        ) {
            alert("Please add a title, content and image.");
            return;
        }

        setLoading(true);

        const today = new Date();

        const date = today.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        const formData = new FormData();

        formData.append("newTitle", newTitle);
        formData.append("newContent", newContent);
        formData.append("date", date);
        formData.append("likes", 0);
        formData.append("image", newImage);

        try {
            const response = await axios.post(
                "https://blog-1lys.onrender.com/api/blogs",
                formData
            );

            setBlogs((previousBlogs) => [
                response.data,
                ...previousBlogs,
            ]);

            resetEditor();
        } catch (error) {
            console.log("ERROR:", error);
            console.log(
                "BACKEND ERROR:",
                error.response?.data
            );
        } finally {
            setLoading(false);
        }
    }

    async function handleEditing(event) {
        event.preventDefault();

        if (!newTitle.trim() || !newContent.trim()) {
            alert("Please add a title and content.");
            return;
        }

        setLoading(true);

        const formData = new FormData();

        formData.append("newTitle", newTitle);
        formData.append("newContent", newContent);

        if (newImage) {
            formData.append("image", newImage);
        }

        try {
            const response = await axios.put(
                `https://blog-1lys.onrender.com/api/blogs/update/${editid}`,
                formData
            );

            setBlogs((previousBlogs) =>
                previousBlogs.map((blog) =>
                    blog._id === editid
                        ? response.data
                        : blog
                )
            );

            resetEditor();
        } catch (error) {
            console.log("EDIT ERROR:", error);
            console.log(
                "BACKEND ERROR:",
                error.response?.data
            );
        } finally {
            setLoading(false);
        }
    }

    function resetEditor() {
        setNewTitle("");
        setNewContent("");
        setNewImage(null);

        setEdit(false);
        setEditId("");
        setEditorOpen(false);

        const imageInput =
            document.getElementById("blog-image-input");

        if (imageInput) {
            imageInput.value = "";
        }
    }

    const [latest, ...rest] = blogs;

    return (
        <div className="min-h-screen bg-[#F4F7F8] text-[#17232A]">

            {/* =========================
                HEADER
            ========================= */}

            <header className="px-6 md:px-12 lg:px-20 pt-16 pb-10">

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#D8E1E4] pb-8">

                    <div className="max-w-xl">

                        <p className="text-[10px] uppercase tracking-[0.28em] text-[#66808A] mb-5">
                            YourBlog
                        </p>

                        <h1 className="font-serif text-6xl md:text-7xl tracking-tight leading-none text-[#17232A]">
                            Notes &amp; entries
                        </h1>

                        <p className="mt-5 text-[#66808A] leading-relaxed max-w-lg">
                            Thoughts, projects and things worth
                            writing down, in roughly the order
                            they happened.
                        </p>

                    </div>

                    {admin && (
                        <button
                            onClick={openAddEditor}
                            className="self-start md:self-auto shrink-0 rounded-full border border-[#477681] px-5 py-2.5 text-sm font-medium text-[#477681] hover:bg-[#477681] hover:text-[#F4F7F8] transition-colors"
                        >
                            Write a new post
                        </button>
                    )}

                </div>

            </header>


            {/* =========================
                ADMIN EDITOR
            ========================= */}

            {admin && editorOpen && (

                <section className="px-6 md:px-12 lg:px-20 pb-14">

                    <div className="rounded-2xl border border-[#D8E1E4] bg-[#EAF0F2]">

                        <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-[#D8E1E4]">

                            <div>

                                <p className="text-[9px] uppercase tracking-[0.25em] text-[#66808A] mb-1">
                                    {edit ? "Editing" : "Writing"}
                                </p>

                                <h2 className="font-serif text-2xl text-[#17232A]">
                                    {edit ? "Edit post" : "New post"}
                                </h2>

                            </div>

                            <button
                                onClick={resetEditor}
                                aria-label="Close editor"
                                className="w-8 h-8 rounded-full flex items-center justify-center text-[#66808A] hover:bg-[#F4F7F8] hover:text-[#17232A] transition-colors"
                            >
                                ×
                            </button>

                        </div>

                        <form
                            onSubmit={
                                edit
                                    ? handleEditing
                                    : handleNewBlogSubmit
                            }
                            className="p-6 md:p-8"
                        >

                            <div className="grid lg:grid-cols-[1fr_280px] gap-8">

                                {/* TITLE + CONTENT */}

                                <div>

                                    <label
                                        htmlFor="blog-title-input"
                                        className="block text-sm text-[#66808A] mb-2"
                                    >
                                        Title
                                    </label>

                                    <input
                                        id="blog-title-input"
                                        type="text"
                                        placeholder="What's this post called?"
                                        value={newTitle}
                                        onChange={(e) =>
                                            setNewTitle(
                                                e.target.value
                                            )
                                        }
                                        className="w-full bg-transparent border-b border-[#AFC0C5] pb-3 font-serif text-3xl md:text-4xl text-[#17232A] outline-none placeholder:text-[#9AAEB4] focus:border-[#477681] transition-colors"
                                    />

                                    <label
                                        htmlFor="blog-content-input"
                                        className="block text-sm text-[#66808A] mt-8 mb-2"
                                    >
                                        Content
                                    </label>

                                    <textarea
                                        id="blog-content-input"
                                        placeholder="Write your post here..."
                                        value={newContent}
                                        onChange={(e) =>
                                            setNewContent(
                                                e.target.value
                                            )
                                        }
                                        rows="10"
                                        className="w-full resize-none rounded-lg border border-[#D8E1E4] bg-[#F4F7F8] p-4 text-[#17232A] leading-7 outline-none focus:border-[#477681] transition-colors"
                                    />

                                </div>


                                {/* IMAGE */}

                                <div>

                                    <p className="text-sm text-[#66808A] mb-2">
                                        Cover image
                                    </p>

                                    <label
                                        htmlFor="blog-image-input"
                                        className="block aspect-square rounded-xl border border-dashed border-[#AFC0C5] cursor-pointer hover:border-[#477681] overflow-hidden bg-[#F4F7F8] transition-colors"
                                    >

                                        {newImage ? (

                                            <img
                                                src={URL.createObjectURL(
                                                    newImage
                                                )}
                                                alt="Selected cover preview"
                                                className="w-full h-full object-cover"
                                            />

                                        ) : (

                                            <div className="h-full flex flex-col items-center justify-center text-[#66808A] gap-2">

                                                <span className="text-3xl leading-none font-light">
                                                    +
                                                </span>

                                                <span className="text-sm">
                                                    Choose an image
                                                </span>

                                            </div>

                                        )}

                                    </label>

                                    <input
                                        id="blog-image-input"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            setNewImage(
                                                e.target.files[0]
                                            )
                                        }
                                        className="hidden"
                                    />

                                    {edit && (
                                        <p className="text-sm text-[#66808A] mt-3 leading-relaxed">
                                            Leave this empty to keep
                                            the existing image.
                                        </p>
                                    )}

                                </div>

                            </div>


                            {/* ACTIONS */}

                            <div className="flex items-center gap-3 mt-8">

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="rounded-full bg-[#477681] text-[#F4F7F8] px-6 py-3 text-sm font-medium hover:bg-[#17232A] transition-colors disabled:opacity-60"
                                >
                                    {loading
                                        ? "Saving..."
                                        : edit
                                        ? "Save changes"
                                        : "Publish post"}
                                </button>

                                <button
                                    type="button"
                                    onClick={resetEditor}
                                    className="rounded-full px-6 py-3 text-sm font-medium text-[#66808A] hover:bg-[#F4F7F8] hover:text-[#17232A] transition-colors"
                                >
                                    Cancel
                                </button>

                            </div>

                        </form>

                    </div>

                </section>
            )}


            {/* =========================
                POSTS
            ========================= */}

            <main className="px-6 md:px-12 lg:px-20 pb-24">

                {blogs.length === 0 ? (

                    <div className="border-y border-[#D8E1E4] py-24 text-center">

                        <p className="font-serif text-2xl text-[#17232A]">
                            Nothing posted yet
                        </p>

                        <p className="text-[#66808A] mt-2">
                            {admin
                                ? "Your published posts will show up here."
                                : "Check back soon."}
                        </p>

                        {admin && (
                            <button
                                onClick={openAddEditor}
                                className="mt-6 text-[#477681] font-medium hover:underline underline-offset-4"
                            >
                                Write the first post
                            </button>
                        )}

                    </div>

                ) : (

                    <>

                        {/* =========================
                            FEATURED / LATEST POST
                        ========================= */}

                        <article className="grid md:grid-cols-2 gap-8 md:gap-12 items-center border-b border-[#D8E1E4] pb-14">

                            <div className="rounded-2xl overflow-hidden bg-[#EAF0F2]">

                                <img
                                    src={latest.imageUrl}
                                    alt={latest.newTitle}
                                    className="w-full h-[320px] md:h-[420px] object-cover"
                                />

                            </div>

                            <div>

                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#66808A]">
                                    Latest entry
                                </p>

                                <p className="text-sm text-[#66808A] mt-2">
                                    {latest.date}
                                </p>

                                <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight mt-3 text-[#17232A]">
                                    {latest.newTitle}
                                </h2>

                                <p className="mt-5 text-[#526A72] leading-7 line-clamp-5">
                                    {latest.newContent}
                                </p>

                                <div className="flex items-center justify-between mt-7">

                                    <button
                                        onClick={() =>
                                            handleLike(latest._id)
                                        }
                                        className="flex items-center gap-2 text-sm text-[#66808A] hover:text-[#477681] transition-colors"
                                    >
                                        <span aria-hidden="true">
                                            ♥
                                        </span>

                                        {latest.likes || 0}
                                    </button>

                                    {admin && (

                                        <div className="flex items-center gap-4 text-sm">

                                            <button
                                                onClick={() =>
                                                    handleEdit(
                                                        latest._id
                                                    )
                                                }
                                                className="text-[#477681] hover:text-[#17232A] font-medium transition-colors"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(
                                                        latest._id
                                                    )
                                                }
                                                className="text-[#A64B4B] hover:text-[#7F3333] font-medium transition-colors"
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    )}

                                </div>

                            </div>

                        </article>


                        {/* =========================
                            EARLIER POSTS
                        ========================= */}

                        {rest.length > 0 && (

                            <section className="mt-4">

                                {rest.map((blog) => (

                                    <article
                                        key={blog._id}
                                        className="group flex flex-col sm:flex-row gap-6 py-8 border-b border-[#D8E1E4]"
                                    >

                                        <div className="sm:w-56 shrink-0 rounded-xl overflow-hidden bg-[#EAF0F2]">

                                            <img
                                                src={blog.imageUrl}
                                                alt={blog.newTitle}
                                                className="w-full h-40 sm:h-36 object-cover"
                                            />

                                        </div>


                                        <div className="flex-1 min-w-0">

                                            <p className="text-sm text-[#66808A]">
                                                {blog.date}
                                            </p>

                                            <h2 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight mt-2 text-[#17232A] group-hover:text-[#477681] transition-colors">
                                                {blog.newTitle}
                                            </h2>

                                            <p className="mt-3 text-[#526A72] leading-6 line-clamp-2">
                                                {blog.newContent}
                                            </p>

                                            <div className="flex items-center justify-between mt-5">

                                                <button
                                                    onClick={() =>
                                                        handleLike(
                                                            blog._id
                                                        )
                                                    }
                                                    className="flex items-center gap-2 text-sm text-[#66808A] hover:text-[#477681] transition-colors"
                                                >
                                                    <span aria-hidden="true">
                                                        ♥
                                                    </span>

                                                    {blog.likes || 0}
                                                </button>


                                                {admin && (

                                                    <div className="flex items-center gap-4 text-sm">

                                                        <button
                                                            onClick={() =>
                                                                handleEdit(
                                                                    blog._id
                                                                )
                                                            }
                                                            className="text-[#477681] hover:text-[#17232A] font-medium transition-colors"
                                                        >
                                                            Edit
                                                        </button>

                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    blog._id
                                                                )
                                                            }
                                                            className="text-[#A64B4B] hover:text-[#7F3333] font-medium transition-colors"
                                                        >
                                                            Delete
                                                        </button>

                                                    </div>

                                                )}

                                            </div>

                                        </div>

                                    </article>

                                ))}

                            </section>

                        )}

                    </>

                )}

            </main>

            <Footer />

        </div>
    );
}

export default Blogs;