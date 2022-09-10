import React, { useContext, useEffect, useState } from 'react'
import courseContext from "../context/course/courseContext";
import Editcoursemodal from './Editcoursemodal';

const Allcourse = () => {

    const context = useContext(courseContext);
    const { allcourse, getAllCourse, delCourse, coursei, getCourseslug } = context;
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        getAllCourse()
    })

    // this is for Admin
    return (
        <div>
            {openModal && <Editcoursemodal closeModal={setOpenModal} courses={coursei} />}
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">All Course</h1>
                    </div>
                    <div className=" w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Course Title</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Course Description</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Slug</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Video Id</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Video Title</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Category</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Delete/Edit</th>
                                </tr>
                            </thead>
                            <tbody>

                                {allcourse.map((course) => {
                                    return <tr key={course.slug}>
                                        <td className="px-4 py-3">{course.coursetitle}</td>
                                        <td className="px-4 py-3">{course.coursedescription}</td>
                                        <td className="px-4 py-3">{course.slug}</td>
                                        <td className="px-4 py-3 ">{course.videoid}</td>
                                        <td className="px-4 py-3 ">{course.videotitle}</td>
                                        <td className="px-4 py-3 ">{course.category}</td>
                                        <td className="px-4 py-3 flex">
                                            <button className="mx-0.5 flex text-white bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded" onClick={() => {
                                                // console.log(course.slug)
                                                setOpenModal(true)
                                                getCourseslug(course.slug)
                                            }}>Edit</button>
                                            <button className="mx-0.5 flex text-white bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded" onClick={() => { delCourse(course.slug) }}>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Allcourse