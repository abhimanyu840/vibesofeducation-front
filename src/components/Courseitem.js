import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import courseContext from "../context/course/courseContext";

const Courseitem = ({ course }) => {
  const context = useContext(courseContext);
  const { getCourseslug } = context
  const handleClick = () => {
    getCourseslug(course.slug.length > 1 ? course.slug[0] : course.slug)
  }


  return (
    <>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={course.image} alt="blog"/>
          <div className="p-3">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-0.5 ">{course.category}</h2>
                  <h1 className="title-font font-baloo text-lg font-bold text-gray-900 mb-3">{course.coursetitle}</h1>
            <p className="leading-relaxed font-ubuntu mb-3">{course.coursedescription}</p>
            <div className="flex items-center justify-center flex-wrap ">
              {/* <Link to={`/coursepage/${course.slug[0]}`} className='my-3' onClick={handleClick}><button className=" text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm flex mx-auto ">Start Watching</button></Link> */}
              <Link to={`/coursepage/${course.slug.length > 1 ? course.slug[0] : course.slug}`} className='my-3' onClick={handleClick} ><button className=" text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm flex mx-auto font-ubuntu">Start Watching</button></Link>
              
              
            </div>
          </div>
        </div>
      </div>
      

      {/* <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img src={course.image} className="lg:h-48 md:h-36 w-full object-cover object-center" alt="course thumbnail" />
              <hr />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{course.category}</h2>
                <h5 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <Link to={`/coursepage/${course.category}/?slug=${course.slug}`} className='my-3' onClick={handleClick}><button className=" text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm flex mx-auto ">Start Watching</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Courseitem
