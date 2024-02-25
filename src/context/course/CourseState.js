import React from 'react'
import CourseContext from "./courseContext";
import { useState } from "react";

const CourseState = (props) => {
    // const host = "http://localhost:5000"
    const host = `${process.env.REACT_APP_BACKEND_HOST}`
    // const host = "https://vibesofeducation.herokuapp.com"
    const [course, setCourse] = useState([]);
    const [coursei, setCourseslug] = useState(null);
    const [courseti, setCoursetitle] = useState(null);
    const [allcourse, setAllCourse] = useState([]);

    const clearCourseData = () => {
        setCourseslug(null);
        setCoursetitle(null);
    };

    // Get course from category
    const getCourse = async (category) => {
        // API Call
        const response = await fetch(`${host}/api/course/fetchcourse/${category}`, {
            method: 'GET',
        });
        const json = await response.json();
        setCourse(json)
    }

    // Get course from category
    const getAllCourse = async () => {
        // API Call
        const response = await fetch(`${host}/api/course/fetchcourse/`, {
            method: 'GET',
        });
        const json = await response.json();
        setAllCourse(json)
    }


    // Get course from slug
    const getCourseslug = async (slug) => {
        // API Call
        const response = await fetch(`${host}/api/course/fetchtopic/${slug}`, {
            method: 'GET',
        });
        const json = await response.json()
        // setCourseslug(JSON.parse(JSON.stringify(json)))
        setCourseslug(json)
    }

    // Get course from category
    const getCoursetitle = async (coursetitle) => {
        // API Call
        const response = await fetch(`${host}/api/course/fetchtitle/${coursetitle}`, {
            method: 'GET',
        });
        const json = await response.json();
        setCoursetitle(json)
    }

    // Add a course
    const addCourse = async (coursetitle, coursedescription, slug, videoid, videotitle, texttutorial, downloads, category, image) => {
        // Api call
        const response = await fetch(`${host}/api/course/uploadcourse`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.token
            },
            body: JSON.stringify({ coursetitle, coursedescription, slug, videoid, videotitle, texttutorial, downloads, category, image })
        });

        const courses = await response.json()
        console.log(courses)
        setCourse(courses)
    }

    // Delete a course
    const delCourse = async (slug) => {
        //Api call
        const response = await fetch(`${host}/api/course/deletecourse/${slug}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.token
            }
        });
        const json = response.json();
        setCourse(json)
    }

    // Edit course
    const editCourse = async (coursetitle, coursedescription, slug, videoid, videotitle, texttutorial, downloads, category, image) => {
        // Api Call
        const response = await fetch(`${host}/api/course/updatecourse/${slug}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.token

            },
            body: JSON.stringify({ coursetitle, coursedescription, slug, videoid, videotitle, texttutorial, downloads, category, image })
        });
        const courses = await response.json()
        console.log(courses)
        let newCourse = JSON.parse(JSON.stringify(course))
        // Logic to edit in client
        for (let index = 0; index < newCourse.length; index++) {
            newCourse[index].coursetitle = coursetitle;
            newCourse[index].coursedescription = coursedescription;
            newCourse[index].slug = slug;
            newCourse[index].videoid = videoid;
            newCourse[index].videotitle = videotitle;
            newCourse[index].texttutorial = texttutorial;
            newCourse[index].downloads = downloads;
            newCourse[index].category = category;
            newCourse[index].image = image;
            break;
        }
        setCourse(newCourse);
    }

    return (
        <CourseContext.Provider value={{ course, coursei, allcourse, courseti, editCourse, delCourse, addCourse, getCoursetitle, getAllCourse, getCourse, getCourseslug, clearCourseData }}>
            {props.children}
        </CourseContext.Provider>
    )
}
export default CourseState;