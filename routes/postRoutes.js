import express from "express";
const router = express.Router();

import {
  createPostComments,
  getPostComments,
} from "../controllers/postController.js";

router.get("/:id/comments", getPostComments);
router.post("/:id/comments", createPostComments);

export default router;
