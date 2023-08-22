import React from 'react';
import styles from './style.module.css';
import CardBook from '../CardBook';

const Category = ({ books, name, primaryColor, secondaryColor,byDelete }) => {
  const bgSecondaryColor = { backgroundColor: secondaryColor };
  const dPrimaryColor = { borderColor: primaryColor };

  return (
    books.length > 0 && (
      <section className={styles.container} style={bgSecondaryColor}>
        <h3 style={dPrimaryColor}>{name}</h3>
        <div className={styles.books}>
          {books.map(book => {
            return (
              <CardBook
              key={book.idBook}
              bgColor={primaryColor}
              name={book.name}
              actor={book.actor}
              image={book.image}
              byDelete={byDelete}
            />
            )
          })}
        </div>
      </section>
    )
  );
};

export default Category;
