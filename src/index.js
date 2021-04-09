import React from "react";
import ReactDom from "react-dom";

// const author = "Will Nyamunokora";
// const desc = "The best selling book";
const books = [
  {
    id: 1,
    img:
      "https://m.media-amazon.com/images/I/51nRHsdkmFL._AC_UL480_FMwebp_QL65_.jpg",
    author: "Joyce N",
    desc: "Best Author",
  },
  {
    id: 2,
    img:
      "https://m.media-amazon.com/images/I/51nRHsdkmFL._AC_UL480_FMwebp_QL65_.jpg",
    author: "Will N",
    desc: "Best of Authors",
  },
  {
    id: 3,
    img:
      "https://m.media-amazon.com/images/I/51nRHsdkmFL._AC_UL480_FMwebp_QL65_.jpg",
    author: "Emma N",
    desc: "Number one Authors",
  },
];

function BookList() {
  return (
    <section>
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            {...book}
            // key={book.id}
            // img={book.img}
            // author={book.author}
            // desc={book.desc}
          />
        );
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, author, desc, children } = props;
  return (
    <article>
      <img src={img} alt='' />
      <h3>{author}</h3>
      <p>{children}</p>
      <p>{desc}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
