import React, { useContext, useEffect } from 'react'
import blogContext from "../context/blogs/blogContext";
import { useParams } from "react-router";
import blogimg from "../blogimg.jpg";

const Blogpage = () => {
    const context = useContext(blogContext);
    const { blogi, getBlogsslug } = context;
    const { slug } = useParams();
    useEffect(() => {
        getBlogsslug(slug)
    })
    document.title = `${blogi.title} - Vibes Of Education`

    return (
        <div className='min-h-screen'>
            <div>
                <div>
                    <div className="container text-center my-4">
                        <h1 className='font-bold text-2xl underline text-red-900'>{blogi.title}</h1>
                    </div>
                    <img src={blogimg} className="rounded mx-auto d-block " alt="blog" style={{ "width": "22rem" }} />
                    <div className="my-4 container">

                        <p className='my-4 p-3 mx-7'>{blogi.content}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blogpage
