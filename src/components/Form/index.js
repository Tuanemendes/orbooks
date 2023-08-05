import Field from '../Field'
import styles from './style.module.css'

import React from 'react'

const Form = () => {
  return (
    <section className={styles.container} >
        <form className={styles.container__form}>
            <h2>Preencha os dados para criar o card do Livro.</h2>
            <Field label="Título" placeholder="Digite seu nome"/>
            <Field label="Categoria" placeholder="Digite a categoria "/>
            <Field label="Imagem"placeholder="imagem"/>
        </form>
    </section>
  )
}

export default Form
