import React from 'react'
import styles from './style.module.css'
import defaultImage from '../../../public/img/capa-livro.jpg'
import Image from 'next/image';
import {AiFillCloseCircle} from 'react-icons/ai'


const CardBook = ({book,bgColor,byDelete}) => {

  const imageSrc = book.image ? book.image : defaultImage;

  return (
    <div className={styles.container}>
      <AiFillCloseCircle size={20} className={styles.delete} onClick={() => byDelete(book.idBook)}/>

      <div className={styles.header} style={{backgroundColor:bgColor}}>
        <Image src={imageSrc} alt={book.name} quality={100} 
        priority={true} width={100} height={200} />
      </div>
      <div className={styles.footer}>
        <h4>{book.name}</h4>
        <h5>{book.actor}</h5>
      </div>
    </div>
  )
}

export default CardBook