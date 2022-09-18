const express = require('express');
const Course = require('../models/Course')
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser")
const router = express.Router();


//Router1: upload course login required
router.post(
    '/uploadcourse', fetchuser, [
    body('coursetitle', 'Enter a valid title').isLength({ min: 5 }),
    body('coursedescription', 'Enter a valid description').isLength({ min: 5 }),
    body('slug', 'Enter a valid slug').isLength({ min: 5 }),
    body('videoid', 'Enter a valid videoid').isLength({ min: 5 }),
    body('videotitle', 'Enter a valid videotitle').isLength({ min: 5 }),
    body('texttutorial', 'Enter a valid texttutorial').isLength({ min: 5 }),
    body('category', 'Enter a valid category').isLength({ min: 1 }),
], async (req, res) => {
    try {
        const { coursetitle, coursedescription, slug, videoid, videotitle, texttutorial, downloads, category, image } = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const course = new Course({
            coursetitle, coursedescription, slug, videoid, videotitle, texttutorial, downloads, category, image, user: req.user.id
        })
        const savedCourse = await course.save()

        res.json(savedCourse)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
)
//Route 2 : fetch all course by category  No login required
router.get('/fetchcourse/:category', async (req, res) => {
    try {
        const courses = await Course.find({ category: req.params.category });
        let chapter = {}
        for (let item of courses) {
            // an if will come here for if array already exists we will push item in it
            if (item.coursetitle in chapter) {
                if (!chapter[item.coursetitle].videoid.includes(item.videoid)) {
                    chapter[item.coursetitle].videoid.push(item.videoid)
                }
                if (!chapter[item.coursetitle].videotitle.includes(item.videotitle)) {
                    chapter[item.coursetitle].videotitle.push(item.videotitle)
                }
                if (!chapter[item.coursetitle].texttutorial.includes(item.texttutorial)) {
                    chapter[item.coursetitle].texttutorial.push(item.texttutorial)
                }
                if (!chapter[item.coursetitle].downloads.includes(item.downloads)) {
                    chapter[item.coursetitle].downloads.push(item.downloads)
                }
                if (!chapter[item.coursetitle].slug.includes(item.slug)) {
                    chapter[item.coursetitle].slug.push(item.slug)
                }
            }
            else {
                chapter[item.coursetitle] = JSON.parse(JSON.stringify(item))
                chapter[item.coursetitle].videoid = [item.videoid]
                chapter[item.coursetitle].videotitle = [item.videotitle]
                chapter[item.coursetitle].texttutorial = [item.texttutorial]
                chapter[item.coursetitle].downloads = [item.downloads]
                chapter[item.coursetitle].slug = [item.slug]
            }
        }
        res.json(chapter)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route 3 : fetch all course  No login required
router.get('/fetchcourse/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// //Route 3 : fetch all course  No login required
// router.get('/fetchcourse/', async (req, res) => {
//     try {
//         const courses = await Course.find();
//         let chapter = {}
//         for (let item of courses) {
//             // an if will come here for if array already exists we will push item in it
//             if (item.coursetitle in chapter) {
//                 if (!chapter[item.coursetitle].videoid.includes(item.videoid)) {
//                     chapter[item.coursetitle].videoid.push(item.videoid)
//                 }
//                 if (!chapter[item.coursetitle].videotitle.includes(item.videotitle)) {
//                     chapter[item.coursetitle].videotitle.push(item.videotitle)
//                 }
//                 if (!chapter[item.coursetitle].texttutorial.includes(item.texttutorial)) {
//                     chapter[item.coursetitle].texttutorial.push(item.texttutorial)
//                 }
//                 if (!chapter[item.coursetitle].downloads.includes(item.downloads)) {
//                     chapter[item.coursetitle].downloads.push(item.downloads)
//                 }
//                 if (!chapter[item.coursetitle].slug.includes(item.slug)) {
//                     chapter[item.coursetitle].slug.push(item.slug)
//                 }
//             }
//             else {
//                 chapter[item.coursetitle] = JSON.parse(JSON.stringify(item))
//                 chapter[item.coursetitle].videoid = [item.videoid]
//                 chapter[item.coursetitle].videotitle = [item.videotitle]
//                 chapter[item.coursetitle].texttutorial = [item.texttutorial]
//                 chapter[item.coursetitle].downloads = [item.downloads]
//                 chapter[item.coursetitle].slug = [item.slug]
//             }
//         }

//         res.status(200).json({ chapter })

//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     }
// })

//Route 4 : fetch one course  No login required
router.get('/fetchtopic/:slug', async (req, res) => {
    try {
        const courses = await Course.findOne({ slug: req.params.slug });
        res.json(courses)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route 5 : Update Blog  Login required
router.put(
    '/updatecourse/:slug', fetchuser, async (req, res) => {
        // const { title, description, slug, videoid, videotitle, texttutorial, downloads, category, image } = req.body;
        const { coursetitle, coursedescription, slug, videoid, videotitle, texttutorial, downloads, category, image } = req.body;


        try {
            //create a newCourse object
            const newCourse = {};
            if (coursetitle) { newCourse.coursetitle = coursetitle }
            if (coursedescription) { newCourse.coursedescription = coursedescription }
            if (videoid) { newCourse.videoid = videoid }
            if (videotitle) { newCourse.videotitle = videotitle }
            if (texttutorial) { newCourse.texttutorial = texttutorial }
            if (downloads) { newCourse.downloads = downloads }
            if (category) { newCourse.category = category }
            if (slug) { newCourse.slug = slug }
            if (image) { newCourse.image = image }

            //find the blog to be updated and update it '
            let course = await Course.findOne({ slug: req.params.slug });
            if (!course) { return res.status(404).send("Not Found") }
            course = await Course.findOneAndUpdate({ slug: req.params.slug }, { $set: newCourse }, { new: true })
            res.json({ course });
            //TODO: handle wrong slug (if wrong slug given then show error not internal server error)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
)

//Route 6: Delete a blog by slug   login required
router.delete(
    '/deletecourse/:slug', fetchuser, async (req, res) => {

        try {
            //find the blog to be updated and update it '

            let course = await Course.findOne({ slug: req.params.slug });
            if (!course) {
                return res.status(404).send("Not Found")
            }
            course = await Course.findOneAndDelete({ slug: req.params.slug })
            res.json({ "Success": "Blog has been deleted", course: course });
            //TODO: handle wrong slug (if wrong slug given then show error not internal server error)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
)

//Route 7 : fetch course from coursetitle  No login required
router.get('/fetchtitle/:coursetitle', async (req, res) => {
    try {
        const courses = await Course.find({coursetitle:req.params.coursetitle});
        res.status(200).json(courses)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router
