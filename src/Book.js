const Book = (props) => {
  const { img, author, desc, children } = props;
  const showDesc = (e) => {
    console.log(e);
    console.log(e.target);
  };
  return (
    <article>
      <img src={img} alt='' />
      <h3 onClick={() => alert(author)}>{author}</h3>
      <p>{children}</p>
      <p onClick={showDesc}>{desc}</p>
    </article>
  );
};

export default Book;
