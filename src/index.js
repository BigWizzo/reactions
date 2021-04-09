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
      <Book img={myBook1.img} author={myBook1.author} desc={myBook1.desc} />
      <Book img={myBook2.img} author={myBook2.author} desc={myBook2.desc} />
    </section>
  );
}

const Book = (props) => {
  return (
    <article>
      <img src={props.img} alt='' />
      <h3>{props.author}</h3>
      <p>{props.desc}</p>
      {console.log(props)}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
