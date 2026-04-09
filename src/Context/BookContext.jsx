import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  /**
   *  step 1: store book id or store book object
   *  step 2: where to store
   *  step 3: array or collection
   *  step 4: if the book is already exist then show a alert or toast
   *  step 5: if not then add the book in the array or collection
   *
   */
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    // console.log(id);

    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.warning(`${currentBook.bookName} is already exist`);
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to list`);
    }
  };

  const handleWishLead = (currentBook) => {
    const isExistBookReadList = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBookReadList) {
      toast.error(`${currentBook.bookName} already in booklist`);
      return;
    } else {
      const isWishList = wishList.find(
        (book) => book.bookId === currentBook.bookId,
      );

      if (isWishList) {
        toast.warning(`${currentBook.bookName} is already added wish list`);
      } else {
        setWishList([...wishList, currentBook]);
        toast.success(`${currentBook.bookName} is added to wish lish`);
      }
    }
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    handleWishLead,
    wishList,
    setWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
