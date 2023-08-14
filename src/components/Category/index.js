import React from 'react';
import styles from './style.module.css';
import CardBook from '../CardBook';

const Category = ({ books, name, primaryColor, secondaryColor }) => {
  const bgSecondaryColor = { backgroundColor: secondaryColor };
  const dPrimaryColor = { borderColor: primaryColor };

  return (
    books.length > 0 && (
      <section className={styles.container} style={bgSecondaryColor}>
        <h3 style={dPrimaryColor}>{name}</h3>
        <div className={styles.books}>
          {books.map(book => (
            <CardBook
              key={book.idBook}
              bgColor={primaryColor}
              name={book.name}
              actor={book.actor}
              image={book.image}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Category;
