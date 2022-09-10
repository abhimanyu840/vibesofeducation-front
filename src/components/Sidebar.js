import React, { useRef } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const toggleBar = () => {
    if (ref.current.classList.contains('hidden')) {
      ref.current.classList.remove('hidden')
      ref.current.classList.add('block')
    }
    else if (ref.current.classList.contains('block')) {
      ref.current.classList.remove('block')
      ref.current.classList.add('hidden')
    }
  }
  const ref = useRef();
  return (
    <>
      <div onClick={toggleBar} className='text-2xl my-1 py-2  mx-auto md:invisible md:hidden'><TiThMenu /></div>
      <div className=' md:flex'>
        <section ref={ref} onClick={toggleBar} className="hidden md:block text-gray-400 bg-gray-900 body-font md:w-1/4 rounded-md m-1 md:m-4 p-1 md:p-3 text-center">
          <div className="md:font-bold lg:font-extrabold font-title md:text-2xl lg:text-3xl p-2 text-yellow-400 font-baloo">
            <Link to="/">Dashboard</Link>
            <hr />
          </div>
          <div className="mx-2 md:p-1 lg:p-2 title-font font-medium md:text-base lg:text-lg font-ubuntu cursor-pointer text-center text-red-400 border-2 border-solid border-blue-200 rounded-md my-2">
          <Link to="/allcourse">All Course</Link>
            {/* <hr /> */}
          </div>
          <div className="mx-2 md:p-1 lg:p-2 title-font font-medium md:text-base lg:text-lg font-ubuntu cursor-pointer text-center text-red-400 border-2 border-solid border-blue-200 rounded-md my-2">
            <Link to="/uploadcourse">Upload Course</Link>
            {/* <hr /> */}
          </div>
        </section>

      </div>
    </>
  )
}

export default Sidebar