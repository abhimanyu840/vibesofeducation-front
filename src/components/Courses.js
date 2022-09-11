import React, { useContext, useEffect } from 'react'
import courseContext from "../context/course/courseContext";
import Courseitem from "./Courseitem";
import { useParams } from 'react-router';

const Courses = () => {

    const context = useContext(courseContext);
    const { course, getCourse } = context;
    const { category } = useParams();
    useEffect(() => {
        getCourse(category)
        // eslint-disable-next-line
    }, [])
    document.title = `${category.toUpperCase()} - Vibes Of Education`


    return (

        <>
            <div className="container text-center justify-center item-center min-h-screen" >
                <span className="text-purple-600"><h1 className='my-2 font-extrabold font-baloo text-4xl underline'>{category.toUpperCase()} COURSES</h1></span>
                <div className="container my-4">
                    {Object.keys(course).length === 0 && <h3 className='font-semibold lext-xl font-ubuntu'>Sorry! There are no courses for {category.toUpperCase()}.<br />Courses Comming soon.<br />Stay Tuned! </h3>}
                    <div className="container px-7 py-8 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {Object.keys(course).map((item) => {
                                return <Courseitem key={course[item].slug} course={course[item]} />
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses
