import BlogContext from "./blogContext";
import { useState } from "react";
import React from 'react'



const BlogState = (props) => {
    const host = process.env.REACT_APP_BACKEND_HOST
    // const host = "https://vibesofeducation.herokuapp.com"
    // const host = "http://localhost:5000"
    const blogsInitial = []
    const [blogs, setBlogs] = useState(blogsInitial)
    const [blogi,  setBlogsslug] = useState(blogsInitial)

    // Get all Blogs
    const getBlogs = async () => {
        // API Call
        const response = await fetch(`${host}/api/blog/fetchblog`, {
            method: 'GET',
        });
        const json = await response.json();
        setBlogs(json)
    }

    // Get Blogs from slug
    const getBlogsslug = async (slug) => {
        // API Call
        const response = await fetch(`${host}/api/blog/fetchblog/${slug}`, {
            method: 'GET',
        });
        const json = await response.json()
        setBlogsslug(json)
    }


    return (
        <BlogContext.Provider value={{ blogs, blogi, getBlogs, getBlogsslug }}>
            {props.children}
        </BlogContext.Provider>
    )

}
export default BlogState;