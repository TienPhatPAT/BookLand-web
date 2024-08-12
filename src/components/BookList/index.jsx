import BookItem from "../BookItem";
import BookListHeading from "../BookListHeading";
import classes from "./BookList.module.scss";

const BookList = ({ heading = "", bookList = [] }) => {
  return (
    <>
      {heading && <BookListHeading label={heading}></BookListHeading>}

      <div className={classes.bookList}>
        {bookList.map((book, index) => {
          return (
            <BookItem
              key={index}
              cover={book.img}
              name={book.name}
              label={book.price}
              id={book.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default BookList;
