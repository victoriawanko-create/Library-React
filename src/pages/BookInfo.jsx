import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookInfo = ({ books }) => {
    const { id } = useParams();
    const book = books.find((book) => book.id === +id);

    if (!book) return null;

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/book" className="book__link">
                            <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                            </div>
                            <div className="book__selected">
                                <figure className="book__selected--figure">
                                    <img src={book.url} alt="" className="book__selected--img" />
                                </figure>
                                <div className="book__selected--description">
                                    <h2 className="book__selected--title">{book.title}</h2>
                                    <div className="book__price">
                                        ${(book.salePrice || book.originalPrice).toFixed(2)}
                                    </div>
                                    <button className="btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    );  
 }

export default BookInfo;