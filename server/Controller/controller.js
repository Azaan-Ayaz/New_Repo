const userModel = require("../Model/model")

const createContact = async(req,res) => {
    try {
    const {name, email, subject, message} = req.body

    /* Validation */
    if(!name) {
        return res.status(400).json("Name is required")
    }

    if(!email) {
        return res.status(400).json(`Email is required`)
    }

    if(!subject) {
        return res.status(400).json(`Subject is required`)
    }

    if(!message) {
        return res.status(400).json(`Message is required`)
    }

    /* Create new user */

    const user = await userModel({
        name,email,subject,message    }).save()
    if(user) {
        return res.status(200).json("User created")
        user
    }
    else {
        return res.status(400).json("Something went wrong")
    }
} catch (error) {  
    console.log(error)
    res.status(500).send({
        success: false,
        message: "Internal server error"
    })
    }
}

/* Get Data from database */

const getContact = async (req, res) => {
    try {
        const users = await userModel.find();
        if (users.length > 0) {
            return res.status(200).json(users); // Send the users data in the response
        } else {
            return res.status(200).json("No contacts found"); // Return a message if no contacts found
        }
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = {createContact, getContact}