import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import blogContext from "../context/blogs/blogContext";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Blogitem = (props) => {
    const context = useContext(blogContext);
    const { getBlogsslug } = context;

    const { blogs } = props;

    const handleClick = () => {
        getBlogsslug(blogs.slug)
    }

    return (
        <>

            <div className="container my-4 mx-6">
                <hr />
                <h4 className='text-2xl font-extrabold font-ubuntu'>{blogs.title}</h4>
                <div className="my-2">
                    <p>
                        {blogs.content.slice(0, 50)}...
                    </p>
                    <div>Added on <span className="font-semibold">{blogs.date.slice(0, 10)}</span></div>
                </div>
                <Link to={`/blogpage/${blogs.slug}`} onClick={handleClick} ><button className="text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm flex ">Read More <BsFillArrowRightCircleFill className='pt-1 mx-1 text-lg' /></button></Link>
            </div>

        </>
    )
}

export default Blogitem
