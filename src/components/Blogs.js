import React, { useContext, useEffect } from 'react'
import blogimg from "../blogimg.jpg";
import Blogitem from "./Blogitem";
import blogContext from "../context/blogs/blogContext";

const Blogs = () => {
    const context = useContext(blogContext);
    const { blogs, getBlogs } = context;

    useEffect(() => {
        getBlogs()
        // eslint-disable-next-line
    }, [])
    document.title = 'Blogs - Vibes Of Education'
    return (
        <div>
            <div className="container overflow-hidden animate__animated animate__pulse my-3">
                <img src={blogimg} className="rounded mx-auto d-block" alt="blog" style={{ "width": "22rem" }} />
                <span className="text-center my-4 text-4xl font-extrabold font-ubuntu text-green-900"><h1>Latest Blogs</h1></span>
                <div className="container my-4 animate__animated animate__bounceInLeft">
                    {blogs.length===0&&<h3 className='font-semibold lext-xl font-ubuntu'>Sorry! There are no blogs.<br />Blogs are Comming soon.<br />Stay Tuned! </h3>}
                    {blogs.map((blog) => {
                        return <Blogitem key={blog.slug} blogs={blog} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default Blogs
