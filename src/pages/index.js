import Head from 'next/head'
import Banner from '@/components/Banner'
import Form from '@/components/Form'
import { useState } from 'react'
import Category from '@/components/Category'
import Footer from '@/components/Footer'
import styles from './style.module.css'
import { v4 as uuidv4 } from 'uuid';




export default function Home() {

  const [categories,setCategories] = useState([
    {
      id: uuidv4(),
      categoryType: 'Front-end',
      color: '#57C278',
    },
    {
      id: uuidv4(),
      categoryType: 'Back-end',
      color: '#82CFFA',
    },
    {
      id: uuidv4(),
      categoryType: 'Mobile',
      color: '#A6D157',
    },
    {
      id: uuidv4(),
      categoryType: 'DevOps',
      color: '#E06B69',
    },
    {
      id: uuidv4(),
      categoryType: 'Ux Design',
      color: '#DB6EBF',
    },
    {
      id: uuidv4(),
      categoryType: 'Data Science',
      color: '#FFBA05',
    },
    {
      id: uuidv4(),
      categoryType: 'Inovação e Gestão',
      color: '#FF8A29',
    },
  ])

  const booksList = [
    {
      idBook: uuidv4(),
      name: 'React',
      actor: 'Facebook',
      image: '',
      categoryBooks: 'Front-end'
    },
    {
      idBook: uuidv4(),
      name: 'React Native',
      actor: 'Facebook',
      image: '',
      categoryBooks: 'Mobile'
    },
    {
      idBook: uuidv4(),
      name: 'React',
      actor: 'Facebook',
      image: '',
      categoryBooks: 'Front-end'
    },
    {
      idBook: uuidv4(),
      name: 'React Native',
      actor: 'Facebook',
      image: '',
      categoryBooks: 'Mobile'
    },
  ]
  const [books,setBooks] = useState(booksList)

  // const newBooks = (book) => {
  //   setBooks([...books,book])
  // }

  function deleteBook(idBook){
    setBooks(books.filter(book => book.idBook !== idBook))
  }

  function updatacolorCategory(color,id){
    setCategories(categories.map(category =>{
      if(category.id === id){
        category.color = color
      }
      return category
    }))
    
  }

  function registerCategory(newCategory){
    setCategories([...categories, {...newCategory, id: uuidv4() }])
  }
  return (
    <>
      <Head>
        <title>Orbooks</title>
        <meta name="description" content="Organização de livros" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
      <Form 
        registerCategory={registerCategory}
        categoriesName={categories.map(category => category.categoryType)} 
        registeredBooks={book => setBooks([...books,book])}
      />
      {/* book => newBooks(book) */}
      <section className={styles.container}>
        <h2>Meus livros</h2>
        {categories.map( category => 
        <Category
          updateColor={updatacolorCategory}
          key={category.id} 
          category={category}
          books={books.filter(book => book.categoryBooks === category.categoryType)}
          byDelete={deleteBook}
       />)}
      </section>
      
       <Footer/>
    </>
  )
}
