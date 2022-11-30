import express from "express";
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/Users.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyUser, (req, res, next) => {
//     res.send("Hello admin, you can delete all accounts")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser)
//DELETE
router.delete("/:id", verifyUser, deleteUser)
//GET
router.get("/:id", verifyUser, getUser)
//GET ALL
router.get("/", verifyAdmin, getAllUsers) //only Admin can get ALL users


export default router;