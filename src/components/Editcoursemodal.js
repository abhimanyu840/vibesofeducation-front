import React, { useState, useContext } from 'react'
import CourseContext from '../context/course/courseContext';

const Editcoursemodal = ({ closeModal,courses }) => {

    const context = useContext(CourseContext);
    const { editCourse } = context;

    const [course, setCourse] = useState({ ecoursetitle: "", ecoursedescription: "", slug: "", evideoid: "", evideotitle: "", etexttutorial: "", edownloads: "", ecategory: "", eimage: "" })

    const handleClick = (e) => {
        e.preventDefault();
        editCourse(course.ecoursetitle, course.ecoursedescription, course.slug, course.evideoid, course.evideotitle, course.etexttutorial, course.edownloads, course.ecategory, courses.image)
        // setCourse({ ecoursetitle: "", coursedescription: "", slug: "", videoid: "", videotitle: "", texttutorial: "", downloads: "", category: "", image: "" })
        closeModal(false)
    }

    const onChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className='px-4 py-6 absolute bg-white w-full'>
                <section className="text-gray-400 bg-gray-900 body-font relative rounded-md w-full md:w-3/4 mx-auto">
                    <div className='text-white font-bold cursor-pointer mx-4 item text-right text-3xl my-2 font-baloo' onClick={() => closeModal(false)}>X</div>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-bold font-baloo title-font mb-4 text-yellow-500">Edit Course</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Edit your courses here.</p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="coursetitle" className="leading-7 text-sm text-gray-400">Course Title</label>
                                        <input type="text" id="ecoursetitle" name="ecoursetitle" value={courses.ecoursetitle} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="coursedescription" className="leading-7 text-sm text-gray-400">Course Description</label>
                                        <input type="text" id="ecoursedescription" name="ecoursedescription" value={courses.ecoursedescription} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="slug" className="leading-7 text-sm text-gray-400">Slug</label>
                                        <input type="text" id="eslug" name="eslug" value={courses.slug} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="videoid" className="leading-7 text-sm text-gray-400">Video Id</label>
                                        <input type="text" id="evideoid" name="evideoid" value={courses.evideoid} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="videotitle" className="leading-7 text-sm text-gray-400">Video Title</label>
                                        <input type="text" id="evideotitle" name="evideotitle" value={courses.evideotitle} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="texttutorial" className="leading-7 text-sm text-gray-400">Text Tutorial</label>
                                        <textarea id="etexttutorial" name="etexttutorial" value={courses.etexttutorial} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>


                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="downloads" className="leading-7 text-sm text-gray-400">Downloads</label>
                                        <input type="text" id="downloads" name="downloads" value={courses.edownloads} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="category" className="leading-7 text-sm text-gray-400">Category</label>
                                        <input type="text" id="category" name="category" value={courses.ecategory} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="image" className="leading-7 text-sm text-gray-400">Image</label>
                                        <input type="text" id="image" name="image" value={courses.eimage} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>


                                <div className="p-2 w-full flex">
                                    <button className="flex mx-auto text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-900 rounded text-lg font-ubuntu" onClick={() => closeModal(false)}>Cancel</button>
                                    <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg font-ubuntu" onClick={handleClick}>Edit Course</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Editcoursemodal