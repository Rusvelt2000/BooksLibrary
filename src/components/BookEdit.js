import { useState } from "react";

function BookEdit({ book, onTitleSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleUpdateTitle = (event) => {
    event.preventDefault();
    onTitleSubmit(book.id, title);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleUpdateTitle} className="book-edit">
      <label htmlFor="title">Title</label>
      <input type="text" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
