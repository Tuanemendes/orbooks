import ButtonAdd from '../ButtonAdd'
import DropdownList from '../DropdownList'
import Field from '../Field'
import styles from './style.module.css'

import React, { useState } from 'react'

const Form = (categories, registeredBooks) => {


  const [name,setName] = useState('')
  const [actor,setActor] = useState('')
  const [image,setImage] = useState('')
  const [category,setCategory] = useState('')

  const generateUniqueId = () => {
    const randomString = Math.random().toString(36).slice(2, 11);
    return randomString;
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const idBook = generateUniqueId();
    registeredBooks({
      idBook,
      name,
      actor,
      image,
      category
    })
    setName('')
    setActor('')
    setImage('')
    setCategory('')
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
              must={false} 
              label="Imagem"
              placeholder="Endereço de imagem permitido 'm.media-amazon.com' "
              valueField={image}
              changedField={valueField => setImage(valueField)}
            />
            <DropdownList 
              must={true} 
              label="Categoria" 
              itens={categories.categoriesName}
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
