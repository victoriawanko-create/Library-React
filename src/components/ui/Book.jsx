import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Book = ({ book}) => {
    const rating = 4;
    return (
         <div className="book">
            <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img
                    src={book.url}
                    alt=""
                    className="book__img" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title--link">
                {book.title}
                </Link>
            </div>
            <div className="book__ratings">
                {
                    new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon={faStar} key={index} />)
                }
                {
                   !Number.isInteger(book.rating) && <FontAwesomeIcon icon={faStarHalfAlt} />  
                }
            </div>
            <div className="book__price">
                {book.salePrice ? (
                   <>
                    <span className="book__price--normal">
                        ${book.originalPrice.toFixed(2)}
                        </span>
                    {book.salePrice.toFixed(2)}
                   </> 
                ) : (
                   <>{book.originalPrice.toFixed(2)}</>
                )}
            </div>
        </div>
    );
};

export default Book;