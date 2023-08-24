import React from 'react';
import styles from './style.module.css';
import CardBook from '../CardBook';
import hexToRgba from 'hex-to-rgba';

const Category = ({category, books,byDelete,updateColor }) => {

  // const [color,setColor] = useState(category.primaryColor)
  const handleChange = (event) => {
    updateColor(event.target.value, category.categoryType)
  }
  return (
    books.length > 0 && (
      <section className={styles.container} style={{backgroundColor:hexToRgba(category.color,'0.6'), }}>
        <input value={category.color} onChange={handleChange} type="color" className={styles.input_color}/>
        <h3 style={{borderColor: category.color }}>{category.categoryType}</h3>
        <div className={styles.books}>
          {books.map(book => {
            return (
              <CardBook
              key={book.idBook}
              bgColor={category.color}
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
