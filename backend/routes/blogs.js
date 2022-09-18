const express = require('express');
const Blog = require('../models/Blog')
const {body, validationResult} = require("express-validator");
const fetchuser = require("../middleware/fetchuser")
const router = express.Router();


//Router1: upload blog login required
router.post(
    '/uploadblog', fetchuser, [
        body('title','Enter a valid title').isLength({min: 5}),
        body('content','Enter a valid content').isLength({min: 5}),
        body('slug','Enter a valid slug').isLength({min: 5}),
    ], async (req, res) => {
    try {
        const { title, content, slug, image  } = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const blog = new Blog({
            title, content, slug, image, user: req.user.id
        })
        const savedBlog = await blog.save()

        res.json(savedBlog)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
)
//Route 2 : fetch all blog  No login required
router.get('/fetchblog/',  async (req, res) => {
    try {
        const blogs = await Blog.find(req.body);
        res.json(blogs)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route 3 : fetch one blog  No login required
router.get('/fetchblog/:slug',  async (req, res) => {
    try {
        const blogs = await Blog.findOne({slug: req.params.slug});
        res.json(blogs)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route 4 : Update Blog  Login required
router.put(
    '/updateblog/:slug', fetchuser, async (req, res) => {
        const { title, content, slug, image  } = req.body;

        try {
            //create a newBlog object
            const newBlog = {};
            if(title) {newBlog.title = title}
            if(content) {newBlog.content = content}
            if(slug) {newBlog.slug = slug}
            if(image) {newBlog.image = image}

            //find the blog to be updated and update it '
            let blog = await Blog.findOne({slug: req.params.slug});
            if (!blog) { return res.status(404).send("Not Found") }
            blog = await Blog.findOneAndUpdate({slug: req.params.slug}, { $set: newBlog }, { new: true })
            res.json({ blog });
            //TODO: handle wrong slug (if wrong slug given then show error not internal server error)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
)

        //Route 5: Delete a blog by slug   login required
router.delete(
    '/deleteblog/:slug', fetchuser, async (req, res) => {

        try {
            //find the blog to be updated and update it '

            let blog = await Blog.findOne({slug: req.params.slug});
            if (!blog) {
                return res.status(404).send("Not Found")
            }
            blog = await Blog.findOneAndDelete({slug: req.params.slug})
            res.json({ "Success": "Blog has been deleted",blog: blog});
            //TODO: handle wrong slug (if wrong slug given then show error not internal server error)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }


)



module.exports = router
