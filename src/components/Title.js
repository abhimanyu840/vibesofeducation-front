import React, { useContext, useEffect } from 'react'
import courseContext from "../context/course/courseContext";
import { Link } from 'react-router-dom';

const Title = ({ coursetitle }) => {
    const context = useContext(courseContext);
    const { courseti, getCoursetitle } = context;
    useEffect(() => {
        getCoursetitle(coursetitle)
    })


    return (
        <>
        {
            courseti.map((item) => {
                return <Link to={`/coursepage/${item.slug}`} reloadDocument key={item.slug} className="" aria-current="true">
                {/* return <Link to={`/coursepage/${item.slug}`} key={item.slug} className="" aria-current="true"> */}
                    <div className="shadow-lg rounded border border-solid border-gray-200 my-3">
                        <div className="px-2 mx-2 md:px-4 py-2 md:py-4 font-xl font-semibold min-w-[80vw] md:min-w-[18vw] font-baloo">
                            {item.videotitle}
                        </div>
                    </div>
                </Link>
            })
        }
        </>
    )
}

export default Title