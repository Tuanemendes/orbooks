import ButtonAdd from '../ButtonAdd'
import DropdownList from '../DropdownList'
import Field from '../Field'
import styles from './style.module.css'

import React, { useState } from 'react'

const Form = (props) => {

  const livros = [
    '',
    'Front-end',
    'Back-end',
    'Mobile',
    'DevOps',
    'Gestão',
    'Ux Design'
  ]

  const [name,setName] = useState('')
  const [actor,setActor] = useState('')
  const [image,setImage] = useState('')
  const [category,setCategory] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    props.registeredBooks({name,actor,image,category})
  }


  return (
    <section className={styles.container} >
        <form onSubmit={handleSubmit}>
            <h2>Preencha os dados para criar o card do Livro.</h2>
            <Field 
              must={true} 
              label="Título" 
              placeholder="Digite seu nome"
              valueField={name}
              changedField={valueField => setName(valueField)}
            />
            <Field 
              must={true} 
              label="Autor" 
              placeholder="Digite o nome do autor "
              valueField={actor}
              changedField={valueField => setActor(valueField)}
            />
            <Field 
              must={true} 
              label="Imagem"
              placeholder="Digite o endreço da imagem"
              valueField={image}
              changedField={valueField => setImage(valueField)}
            />
            <DropdownList 
              must={true} 
              label="Categoria" 
              itens={livros}
              valueField={category}
              changedField={valueField => setCategory(valueField)}
              />
            <ButtonAdd>
              Criar Card
            </ButtonAdd>
        </form>
    </section>
  )
}

export default Form
