const express = require("express")
const router = express.Router()
const {createContact, getContact} = require("../Controller/controller")

router.post("/create/contact",createContact)
router.get("/get/contact", getContact)

module.exports = router