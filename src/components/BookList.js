import BookShow from "./BookShow";

function BookList({ bookList, deleteBook, updateBook }) {
  const renderBooks = bookList.map((book) => {
    return (
      <BookShow
        deleteBook={deleteBook}
        updateBook={updateBook}
        key={book.id}
        book={book}
      />
    );
  });

  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
