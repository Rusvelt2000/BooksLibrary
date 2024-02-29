import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const initializeBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    initializeBooks();
  }, []);

  const createBook = async (id, name) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: name,
    });

    const updateBooks = [...books, response.data];
    setBooks(updateBooks);
  };

  const updateBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updateBooksAfterEdit = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updateBooksAfterEdit);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updateBookAfterDeletion = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBookAfterDeletion);
  };

  return (
    <div>
      <BookList
        bookList={books}
        deleteBook={deleteBook}
        updateBook={updateBook}
      />
      <BookCreate onSubmitBook={createBook} />
    </div>
  );
}

export default App;
