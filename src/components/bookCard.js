function BookCard({ image, title, author }) {
  return (
    <div id="book-container">
      <img src={image} width="120px" height="160px" />
      <div id="book-content">
        <h3>{title}</h3>
        <p>By {author}</p>
      </div>
      <button>Mark as done</button>
    </div>
  );
}

export default BookCard;
