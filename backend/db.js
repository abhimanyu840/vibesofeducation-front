const mongoose = require('mongoose');

const mongoURI = (process.env.MONGO_URI || 'mongodb+srv://abhimanyu_kumar:abhimanyukumar@vibesofeducation.pgjbxrc.mongodb.net/vibesofeducation?retryWrites=true&w=majority');


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongoose Successfully");
    })
}

module.exports = connectToMongo;