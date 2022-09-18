const connectToMongo = require("./db");
const express = require('express');
const cors = require('cors');
require("dotenv").config();

connectToMongo();
const app = express()
const port =process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blog', require('./routes/blogs'));
app.use('/api/course', require('./routes/courses'));

app.listen(port, () => {
    console.log(`Vibes Of Education app listening on http://localhost:${port}`)
})