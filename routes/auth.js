import express from "express";
import AuthController from "../controllers/auth.js";

const router = express.Router();
const jsonParcer = express.json()

router.post("/register", jsonParcer, AuthController.register);
router.post("/login", jsonParcer, AuthController.login)

export default router;
