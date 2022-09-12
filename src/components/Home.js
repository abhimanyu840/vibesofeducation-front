import React from 'react'
import { Link } from "react-router-dom";
import icon from "../iconvoe.png"



const Home = () => {
  document.title = 'Home - Vibes Of Education'
  const token = localStorage.token
  const isAdmin = localStorage.isadmin

  const handleAdmin = async () => {
    const response = await fetch(`https://vibesofeducation.herokuapp.com/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,
      },
    });
    const json = await response.json()
    if (json.isadmin === true) {
      localStorage.setItem('isadmin', json.isadmin)
    }
    }
  


  return (
    <>
      <div className="text-center m-auto container min-h-screen overflow-hidden" onLoad={isAdmin && handleAdmin} >
        <div className="animate__animated animate__backInUp">
        <img src={icon} className="m-auto my-2" style={{ "width": "7rem" }} alt={"course thumbnail"} />
        <h1 className='text-center text-3xl font-extrabold font-baloo'>Welcome To <span className="text-green-600">Vibes Of Education</span></h1>
        <p className='m-3 font-ubuntu font-semibold'>
          Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Vibes Of Education is my attempt to teach basics and those learning techniques to people in short time which took me ages to learn.
          </p>
          </div>
        <div className="flex items-center justify-center my-4 animate__animated animate__backInUp ">
          <Link to="/blog"><button className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded-md text-lg flex mx-auto font-ubuntu">Explore Blogs</button></Link>
        </div>
        <hr />
        <div className="my-4 animate__animated animate__backInUp animate__slow">
          <h2 className='font-bold text-2xl underline font-ubuntu'>Choose Your Course</h2>
          {/* course.map */}


          {/* 
          {allcourse.map((item) => {
            return <Link className="btn btn-primary mx-2 my-2 sm" to={`/courses/${item.category}`} role="button">{item.category}</Link>
          })}
           */}
          <div className="flex flex-wrap item-center justify-center my-5">

            {/* <Link to="/courses/bseb" className=' mx-2'><button className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded-md text-lg flex mx-auto my-3 font-ubuntu">BSEB</button></Link> */}
            <Link to="/courses/class9" className=' mx-2'><button className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded-md text-lg flex mx-auto my-3 font-ubuntu">Class 9</button></Link>
            <Link to="/courses/class10" className=' mx-2'><button className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded-md text-lg flex mx-auto my-3 font-ubuntu">Class 10</button></Link>
            <Link to="/courses/class11" className=' mx-2'><button className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded-md text-lg flex mx-auto my-3 font-ubuntu">Class 11</button></Link>
            <Link to="/courses/class12" className=' mx-2'><button className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded-md text-lg flex mx-auto my-3 font-ubuntu">Class 12</button></Link>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              {/* <h2>Latest Courses</h2> */}
              {/*<div className="col-md-6 col-lg-4 mt-3">*/}
              {/*<div className="card" style={{"width": "18rem"}}>*/}
              {/*    <img src={img} className="card-img-top" alt="course thumbnail"/>*/}
              {/*        <div className="card-body">*/}
              {/*            <h5 className="card-title">Card title</h5>*/}
              {/*            <p className="card-text">Some quick example text to build on the card title and make up*/}
              {/*                the bulk of the card's content.</p>*/}
              {/*            <Link to="/coursepage" className="btn btn-primary">Start Watching</Link>*/}
              {/*        </div>*/}
              {/*</div>*/}
              {/*</div>*/}

            </div>
          </div>
          <hr />
          <div>
            {localStorage.isadmin && <Link to="/allcourse" className=' mx-2'><button className="text-white bg-violet-800 border-0 py-2 px-6 focus:outline-none hover:bg-violet-500 rounded-md text-lg flex mx-auto my-3 font-ubuntu">Open Dashboard</button></Link>}
          </div>
        </div>
      </div>
    </>
  )


}

export default Home
