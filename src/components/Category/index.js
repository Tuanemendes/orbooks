import React from 'react'
import styles from './style.module.css'
import CardBook from '../CardBook'

const Category = (props) => {
    const bgSecondaryColor = {backgroundColor: props.secondaryColor}

    const dPrimaryColor = {borderColor: props.primaryColor}

  return (
    props.books.length > 0 && <section className={styles.container} style={bgSecondaryColor}>
        <h3 style={dPrimaryColor}>{props.name}</h3>
        <div className={styles.books}>
        {props.books.map(book => <CardBook
          bgColor={props.primaryColor} 
          key={book.idBook} 
          name={book.name} 
          actor={book.actor}
          image={book.image}

         />)}
        </div>
    </section>
  )
}

export default Category
