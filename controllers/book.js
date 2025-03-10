import Book from "../models/book.js";

async function getBooks(req, res, next) {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (err) {
    next(err);
  }
}

async function getBook(req, res, next) {
  const { id } = req.params;
  console.log(id);

  try {
    const book = await Book.findById(id);
    if (book == null) {
      return res.status(404).send("Book not found (");
    }
    res.send(book);
  } catch (error) {
    next(error);
  }
}

async function createBook(req, res, next) {
  // Add joi before
  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
  }
  try {
    const result = await Book.create(book);
    res.status(201).send(result)
  } catch (error) {
    next(error)
  }
}

async function updateBook(req, res, next) {
  // Add joi before
  const { id } = req.params
  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
  }
  try {
    const result = await Book.findByIdAndUpdate(id, book, {new: true});
    res.status(201).send(result)
  } catch (error) {
    next(error)
  }
}

async function deleteBook(req, res, next) {
  const { id } = req.params
  try {
    const result = await Book.findByIdAndDelete(id);
    res.status(201).send(result)
  } catch (error) {
    next(error)
  }
}

export default { getBooks, getBook, createBook, updateBook, deleteBook };
