import React from 'react'
import styles from './style.module.css'
import defaultImage from '../../../public/img/capa-livro.jpg'
import Image from 'next/image';


const CardBook = ({image, name, actor,bgColor}) => {

  const imageSrc = image ? image : defaultImage;

  return (
    <div className={styles.container}>
      <div className={styles.header} style={{backgroundColor:bgColor}}>
        <Image src={imageSrc} alt={name} quality={100} 
        priority={true} width={100} height={200} />
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
