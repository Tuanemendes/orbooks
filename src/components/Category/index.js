import React from 'react';
import styles from './style.module.css';
import CardBook from '../CardBook';

const Category = ({category, books,byDelete }) => {

  return (
    books.length > 0 && (
      <section className={styles.container} style={{backgroundColor:category.secondaryColor }}>
        <input value={category.primaryColor} type="color" className={styles.input_color}/>
        <h3 style={{borderColor: category.primaryColor }}>{category.name}</h3>
        <div className={styles.books}>
          {books.map(book => {
            return (
              <CardBook
              key={book.idBook}
              bgColor={category.primaryColor}
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
