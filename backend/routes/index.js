import express from "express"
import { createPost, deletePost, getPost, updatePost, updateDoneStatus } from "../controller/postController.js";
import { LoginController, OTPVerification, signupController } from "../controller/authController.js";
const route = express.Router();

// AUTH API
route.post("/api/signup", signupController)
route.post("/api/login", LoginController)
route.post("/api/otpverification", OTPVerification)

// POST API
route.post("/createpost", createPost)
route.get("/getpost", getPost)
route.put("/updatepost/:id", updatePost)
route.put("/updateStatus/:id", updateDoneStatus)
route.delete("/deletepost/:id", deletePost)



route.get("/", (request, response) => {
    response.send("HELLO SERVER MVC")
}) 

export default route