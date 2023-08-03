import Image from 'next/image'
import React from 'react'
import styles from './Banner.module.css'


function Banner() {
  return (
    <header className={styles.banner}>
        <Image src="/img/banner.png"  className='banner_img' width={800} height={300} alt="Banner Livros"/>
    </header>
    
  )
}

export default Banner
