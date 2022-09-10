import React, { useRef } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Blogs"
import { AiOutlineMenu } from 'react-icons/ai'
import { toast } from 'react-toastify';

const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const ref = useRef();
    const toggleMenu = () => {
        if (ref.current.classList.contains('hidden')) {
            ref.current.classList.remove('hidden')
            ref.current.classList.add('flex')
        }
        else if (ref.current.classList.contains('flex')) {
            ref.current.classList.remove('flex')
            ref.current.classList.add('hidden')
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        toast.info('Logged Out', {
            position: "top-right",
            autoClose: 2300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigate("/")
    }

    return (
        <div className='sticky z-10 top-0'>
            <nav className=" backdrop-blur border-gray-200 px-2 sm:px-4 py-2.5  shadow-lg ">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-800">Vibes Of Education</span>
                    </Link>
                    <div className='text-2xl my-2 md:invisible md:hidden text-black focus:border-gray-400' onClick={toggleMenu}>
                        <AiOutlineMenu />
                    </div>

                    <div ref={ref} className="hidden w-full text-center md:block md:w-auto" onClick={toggleMenu}>
                        <ul className="flex flex-col mx-auto md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link to="/" className={`block py-2 pr-4 pl-3 text-gray-600 font-baloo  rounded text-lg md:bg-transparent  md:p-0  ${location.pathname === "/" ? "font-bold text-black " : ""}`} aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/blog" className={`block py-2 pr-4 pl-3 text-gray-600 font-baloo  rounded text-lg md:bg-transparent  md:p-0  ${location.pathname === "/blog" ? "font-bold text-black" : ""}`}>Blogs</Link>
                            </li>
                            {!localStorage.token ? <div className='flex'>
                                <Link to="/login"><button className="text-white bg-red-600 border-0 my-2 md:my-0 mr-2 py-1 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm flex mx-auto">Login</button></Link>
                                <Link to="/signup"><button className="text-white bg-red-600 border-0 my-2 md:my-0 py-1 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm mr-2 flex mx-auto">Signup</button></Link>
                            </div> : <button className="text-white bg-red-600 border-0 my-2 md:my-0 mr-2 py-1 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm flex mx-auto" onClick={handleLogout}>Logout</button>}
                            {/* <Link to="/blog"><button className=" hidden text-white bg-red-600 border-0 my-2 md:my-0 py-1 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm  mx-auto">Accounts</button></Link>
                            <Link to="/blog"><button className=" hidden text-white bg-red-600 border-0 my-2 md:my-0 py-1 px-4 focus:outline-none hover:bg-red-800 rounded-md text-sm  mx-auto">Logout</button></Link> */}
                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar