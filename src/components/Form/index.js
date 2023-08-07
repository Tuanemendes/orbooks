import ButtonAdd from '../ButtonAdd'
import DropdownList from '../DropdownList'
import Field from '../Field'
import styles from './style.module.css'

import React from 'react'

const Form = () => {

  const livros = [
    'Front-end',
    'Back-end',
    'Mobile',
    'DevOps',
    'Gestão',
    'Ux Design'
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('enviou')
  }

  return (
    <section className={styles.container} >
        <form onSubmit={handleSubmit}>
            <h2>Preencha os dados para criar o card do Livro.</h2>
            <Field must={true} label="Título" placeholder="Digite seu nome"/>
            <Field label="Autor" placeholder="Digite o nome do autor "/>
            <Field label="Imagem"placeholder="Digite o endreço da imagem"/>
            <DropdownList label="Categoria" itens={livros}/>
            <ButtonAdd>
              Criar Card
            </ButtonAdd>
        </form>
    </section>
  )
}

export default Form
