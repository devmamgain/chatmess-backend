import {Router } from "express";
import { checkUser, generateToken, getAllUsers, onBoardUser, updateUser } from "../controllers/AuthController.js";
const router = Router ();
router.post("/check-user", checkUser);
router.get("/get-contacts", getAllUsers)
router.post("/onboard-user",onBoardUser)
router.post("/update-user",updateUser)
router.get("/generate-token/:userId",generateToken)
export default router;