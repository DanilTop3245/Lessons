import express from "express";

import BookController from "../controllers/book.js";

const router = express.Router();
const jsonParcer = express.json();

router.get("/", BookController.getBooks);
router.get("/:id", BookController.getBook);
router.post("/", jsonParcer, BookController.createBook);
router.put("/:id", jsonParcer, BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

export default router;
