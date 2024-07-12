import express from "express";
import {
  createUser,
  loginUser,
  retrieveSingleUser,
} from "../controllers/usersController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/me", auth, retrieveSingleUser);

export default router;
