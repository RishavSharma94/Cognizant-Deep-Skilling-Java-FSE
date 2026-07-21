import React from "react";

function BookDetails() {

    const books = [
        { id: 1, name: "Java Programming", author: "James Gosling" },
        { id: 2, name: "React JS", author: "Jordan Walke" },
        { id: 3, name: "Spring Boot", author: "Craig Walls" }
    ];

    return (

        <div>

            <h2>Book Details</h2>

            <ul>

                {books.map(book => (

                    <li key={book.id}>
                        {book.name} - {book.author}
                    </li>

                ))}

            </ul>

        </div>

    );

}

export default BookDetails;