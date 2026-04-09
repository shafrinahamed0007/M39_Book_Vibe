import React, { use } from "react";

import BookCard from "../../UI/BookCard";


const bookPromise = fetch("./booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(bookPromise);

  return (
    <div className="container mx-auto my-3">
      <h2 className="font-bold text-3xl text-center my-10">
        All Books
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m">
        {books.map((book) => (
          <BookCard book={book}/>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
