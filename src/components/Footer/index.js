import React from 'react'
import styles from './style.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
   <footer className={styles.container}>
        <section className={styles.social}>
        {/* <img src="/img/linkedin.png" alt=""></img> */}
        <a href="https://www.linkedin.com/in/tuane-mendes/" target="blank">
            <Image src="/img/linkedin.png" alt="Linkedin" width={32} height={32} />
        </a>
       
        <a href="https://github.com/Tuanemendes" target="blank">
            <Image src="/img/github.png"  alt="Github" width={32} height={32} />
        </a> 
          
        </section>
        <section className={styles.logo}>
            <Image src="/img/logo-livro.png" alt="Logo-Livro" width={32} height={32} />
            <h3>Orbooks</h3>
        </section>

        <span> &copy; Copyright OrBooks by Tuane Mendes - 2023</span>
   </footer>
  )
}

export default Footer
