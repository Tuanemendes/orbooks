import ButtonAdd from '../ButtonAdd'
import DropdownList from '../DropdownList'
import Field from '../Field'
import styles from './style.module.css'

import React, { useState } from 'react'

const Form = ({categories, registeredBooks , registerCategory}) => {


  const [name,setName] = useState('')
  const [actor,setActor] = useState('')
  const [image,setImage] = useState('')
  const [category,setCategory] = useState('')
  const [nameCategory,setNameCategory] = useState('')
  const [colorCategory,setColorCategory] = useState('')

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

  const newCategory = (event) => {
    event.preventDefault()
    console.log('oi')
    registerCategory({
      nameCategory:nameCategory,
      colorCategory:colorCategory
    })
  
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
              items={categories}
              valueField={category}
              changedField={valueField => setCategory(valueField)}
              />
            <ButtonAdd>
              Cadastrar
            </ButtonAdd>
        </form>
        <form onSubmit={newCategory}>
            <h2>Adicionar categoria.</h2>
            <Field 
              must={true} 
              label="Nome da Categoria" 
              placeholder="Digite o nome da categoria"
              valueField={nameCategory}
              changedField={valueField => setNameCategory(valueField)}
            />
            <Field 
              must={true} 
              label="Cor" 
              placeholder="Digite a cor da categoria "
              valueField={colorCategory}
              changedField={valueField => setColorCategory(valueField)}
            />
            <ButtonAdd>
              Adicionar 
            </ButtonAdd>
        </form>
    </section>
  )
}

export default Form
