import React, { useState, useContext } from 'react'
import CourseContext from '../context/course/courseContext';

const Uploadcourse = () => {
    const context = useContext(CourseContext);
    const { addCourse } = context;

    const [course, setCourse] = useState({ coursetitle: "", coursedescription: "", slug: "", videoid: "", videotitle: "", texttutorial: "", downloads: "", category: "", image: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addCourse(course.coursetitle, course.coursedescription, course.slug, course.videoid, course.videotitle, course.texttutorial, course.downloads, course.category, course.image);
        setCourse({ ecoursetitle: "", coursedescription: "", slug: "", videoid: "", videotitle: "", texttutorial: "", downloads: "", category: "", image: "" })
    }

    const onChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value })
    }

    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font relative rounded-md ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-bold font-baloo title-font mb-4 text-yellow-500">Upload Course</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Upload your courses here.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="coursetitle" className="leading-7 text-sm text-gray-400">Course Title</label>
                                    <input type="text" id="coursetitle" name="coursetitle" value={course.coursetitle} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="coursedescription" className="leading-7 text-sm text-gray-400">Course Description</label>
                                    <input type="text" id="coursedescription" name="coursedescription" value={course.coursedescription} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="slug" className="leading-7 text-sm text-gray-400">Slug</label>
                                    <input type="text" id="slug" name="slug" value={course.slug} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="videoid" className="leading-7 text-sm text-gray-400">Video Id</label>
                                    <input type="text" id="videoid" name="videoid" value={course.videoid} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="videotitle" className="leading-7 text-sm text-gray-400">Video Title</label>
                                    <input type="text" id="videotitle" name="videotitle" value={course.videotitle} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="texttutorial" className="leading-7 text-sm text-gray-400">Text Tutorial</label>
                                    <textarea id="texttutorial" name="texttutorial" value={course.texttutorial} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>


                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="downloads" className="leading-7 text-sm text-gray-400">Downloads</label>
                                    <input type="text" id="downloads" name="downloads" value={course.downloads} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="category" className="leading-7 text-sm text-gray-400">Category</label>
                                    <input type="text" id="category" name="category" value={course.category} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="image" className="leading-7 text-sm text-gray-400">Image</label>
                                    <input type="text" id="image" name="image" value={course.image} onChange={onChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>


                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg font-ubuntu" onClick={handleClick}>Upload Course</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Uploadcourse