import React, { useContext } from "react";
import { BookContext } from "../../Context/BookContext";

const Books = () => {
  const { storedBooks } = useContext(BookContext);
  console.log("Stored Books", storedBooks);
  return (
    <div>
      <h2>Listed Books</h2>
    </div>
  );
};

export default Books;
