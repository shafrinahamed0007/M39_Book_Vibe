import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card p-6 md:w-96 shadow-sm shadow-amber-50"
    >
      <figure>
        <img className="h-[220px]" src={book?.image} alt={book?.bookName} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{book?.bookName}</h2>
        <div className="space-x-2">
          {book?.tags.map((tag) => (
            <div className="badge badge-success ">{tag}</div>
          ))}
        </div>
        <p>By: {book?.author}</p>
        <div className="border border-dashed my-2"></div>
        <div className="flex justify-between">
          <div>
            <h2>{book?.category}</h2>
          </div>
          <div className="flex gap-2 font-semibold text-[16px]">
            <h2>{book?.rating}</h2>
            <FaRegStar className="mt-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
