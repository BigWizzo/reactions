import React from "react";
import ReactDom from "react-dom";

// const author = "Will Nyamunokora";
// const desc = "The best selling book";
const myBook1 = {
  img:
    "https://m.media-amazon.com/images/I/51nRHsdkmFL._AC_UL480_FMwebp_QL65_.jpg",
  author: "Joyce N",
  desc: "Best Author",
};

const myBook2 = {
  img:
    "https://m.media-amazon.com/images/I/51nRHsdkmFL._AC_UL480_FMwebp_QL65_.jpg",
  author: "Will N",
  desc: "Best of Authors",
};
function BookList() {
  return (
    <section>
      <Book img={myBook1.img} author={myBook1.author} desc={myBook1.desc}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, velit
          quia debitis vero aut itaque quam explicabo illo ad maxime.
        </p>
      </Book>
      <Book img={myBook2.img} author={myBook2.author} desc={myBook2.desc} />
    </section>
  );
}

const Book = ({ img, author, desc, children }) => {
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
