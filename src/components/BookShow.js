import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, deleteBook, updateBook }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (id, title) => {
    updateBook(id, title);
    handleEdit();
  };

  const handleDelete = () => {
    deleteBook(book.id);
  };

  let content = <h2>{book.title}</h2>;
  if (isEditing) {
    content = (
      <BookEdit
        onTitleSubmit={handleSubmit}
        updateBook={updateBook}
        book={book}
      />
    );
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="{book.title}"
      />
      <div className="actions">
        <button className="edit" onClick={handleEdit}></button>
        <button className="delete" onClick={handleDelete}></button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default BookShow;
