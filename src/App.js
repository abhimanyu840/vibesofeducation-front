import React, { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import Blogs from "./components/Blogs";
import BlogState from "./context/blogs/BlogState";
import CourseState from "./context/course/CourseState";
import LoadingBar from "react-top-loading-bar";
import Blogpage from "./components/Blogpage";
import Courses from "./components/Courses";
import Coursepage from './components/Coursepage';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Sidebar from './components/Sidebar';
import Uploadcourse from './components/Uploadcourse';
import Allcourse from './components/Allcourse';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';

function App() {
  const [progress, setProgress] = useState(0)



  const location = useLocation();
  useEffect(() => {
    setProgress(10)
    setProgress(30)
    setProgress(50)
    setProgress(70)
    setProgress(100)
  }, [location]);

  // useEffect(() => {
  //   Route.events.on('routeChangeStart', () => {
  //     setProgress(40)
  //   })
  //   Route.events.on('routeChangeComplete', () => {
  //     setProgress(100)
  //   })
  // }, []);

  return (
    <>
      <CourseState>
        <BlogState>
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />

          <ToastContainer />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/blogpage/:slug" element={<Blogpage />} />
              <Route path="/courses/:category" element={<><Courses  /></>} />
              <Route path="/coursepage/:slug" element={<><Coursepage /></>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/uploadcourse" element={<><Sidebar /><Uploadcourse /></>} />
              <Route path="/allcourse" element={<><Sidebar /><Allcourse /></>} />
            </Routes>
          </div>
          <Footer />
        </BlogState>
      </CourseState>
    </>
  );
}

export default App;
