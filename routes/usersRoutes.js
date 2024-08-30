import express from "express";
import {
  createUser,
  loginUser,
  retrieveSingleUser,
  retrieveAllUsers,
} from "../controllers/usersController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/me", auth, retrieveSingleUser);
router.get("/all", retrieveAllUsers);
export default router;
