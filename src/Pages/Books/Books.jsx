import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

const Books = () => {
  const { storedBooks,wishList } = useContext(BookContext);
  console.log("Stored Books", storedBooks);
  console.log("Wishlist Books", wishList);
  return (
    <div className="container mx-auto">
      <h2>Total ReadBook :{storedBooks.length}</h2>
      <h2>Total WishList book :{wishList.length}</h2>
    </div>
  );
};

export default Books;
