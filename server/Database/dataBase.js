const mongoose = require("mongoose")
const colors = require("colors")
const dotenv = require("dotenv").config()

const dataBase = async() => {

    const user_name = process.env.USER_NAME
    const user_password = process.env.USER_PASSWORD
    const port = process.env.PORT

    try {
        await mongoose.connect(`mongodb+srv://${user_name}:${user_password}@cluster0.deanbuu.mongodb.net/Techsol`)
        .then(()=>{
            console.log(`Database is connect to server on port ${port}`.bgMagenta)
        })
    } catch (error) {
        console.log("Error occurred while connecting to the database:".red, error);
    }    
}

module.exports = dataBase