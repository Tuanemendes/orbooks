import React from 'react'
import styles from './style.module.css'


const CardBook = ({image, name, actor}) => {


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={image} alt={name}></img>
        {/* <Image 
          src='https://m.media-amazon.com/images/I/51wX6cd1iiL._SY344_BO1,204,203,200_QL70_ML2_.jpg' 
          alt='Livro Nodejs'
          width={200} 
          height={300} 
        /> */}
      </div>
      <div className={styles.footer}>
        <h4>{name}</h4>
        <h5>{actor}</h5>
      </div>
    </div>
  )
}

export default CardBook
