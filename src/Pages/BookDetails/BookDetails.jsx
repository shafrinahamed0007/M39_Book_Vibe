import React, { use, useContext, useState } from "react";
import { useParams } from "react-router";
import { BookContext } from "../../Context/BookContext";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const books = use(booksPromise);
  const expectedBook = books.find((book) => book.bookId == id);
  // console.log(expectedBook);

  const {
    bookId,
    bookName,
    image,
    author,
    review,
    totalPages,
    category,
    publisher,
    yearOfPublishing,
    tags,
  } = expectedBook;

  const {handleMarkAsRead} = useContext(BookContext);
  console.log("Book Context", handleMarkAsRead);

 

  return (
    <div className="my-10">
      <div className="card  lg:card-side shadow-sm shadow-amber-50 container mx-auto p-6">
        <figure className="">
          <img className=" h-[70vh] flex-1 " src={image} alt={bookName} />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <h2 className="card-title ">By: {author}</h2>
          <p className="py-2 border-y">{category}</p>
          <p className="text-lg">
            Review <small>{review}</small>
          </p>
          <div className="space-x-2">
            {tags.map((tag) => (
              <div className="badge badge-success ">{tag}</div>
            ))}
          </div>
          <div className="card-actions border-t flex flex-col gap-4">
            <div>
              <span>
                Number of Pages: <span>{totalPages}</span>
              </span>
            </div>
            <div>
              <span>
                Publisher: <span>{publisher}</span>
              </span>
            </div>
            <div>
              <span>
                year of published: <span>{yearOfPublishing}</span>
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleMarkAsRead(expectedBook)}
                className="btn btn-soft btn-primary"
              >
                Mark as Read
              </button>
              <button className="btn btn-soft btn-info">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
