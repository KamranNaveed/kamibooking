import express from "express";
import { register, login } from "../controllers/Auth.js"

const router = express.Router();

//CREATE 
router.post("/register", register)
router.get("/login", login)

export default router;