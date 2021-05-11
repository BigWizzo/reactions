import React from 'react';
import ReactDom from 'react-dom';
import Routes from './Routes';

import { books } from './Data';
import Book from './Book';

function BookList() {
  return (
    <>
      <Routes />
      <section>
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
