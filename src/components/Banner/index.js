import Image from 'next/image'
import React from 'react'
import styles from './style.module.css'


function Banner() {
  return (
    <header className={styles.banner}>
        <Image src="/img/banner.png"  className={styles.banner_img} 
        quality={100} 
        priority={true}
        width={800} 
        height={300} 
        alt="Banner Livros"/>
    </header>
    
  )
}

export default Banner
