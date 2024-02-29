import { useState } from "react";

function BookCreate({ onSubmitBook }) {
  const [bookName, setBookName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const randomIdNumber = Math.floor(Math.random() * 9999);
    onSubmitBook(randomIdNumber, bookName);
    setBookName("");
  };

  const handleChange = (event) => {
    setBookName(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          name="addBook"
          type="text"
          value={bookName}
          onChange={handleChange}
        />
        <button className="button">Add Book</button>
      </form>
    </div>
  );
}

export default BookCreate;
