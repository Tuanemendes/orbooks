import Head from 'next/head'
import Banner from '@/components/Banner'
import Form from '@/components/Form'
import { useState } from 'react'
import Category from '@/components/Category'
import Footer from '@/components/Footer'
import styles from './style.module.css'




export default function Home() {

  const [categories,setCategories] = useState([
    {
      id: 1,
      categoryType: 'Front-end',
      color: '#57C278',
    },
    {
      id: 2,
      categoryType: 'Back-end',
      color: '#82CFFA',
    },
    {
      id: 3,
      categoryType: 'Mobile',
      color: '#A6D157',
    },
    {
      id: 4,
      categoryType: 'DevOps',
      color: '#E06B69',
    },
    {
      id: 5,
      categoryType: 'Ux Design',
      color: '#DB6EBF',
    },
    {
      id: 6,
      categoryType: 'Data Science',
      color: '#FFBA05',
    },
    {
      id: 7,
      categoryType: 'Inovação e Gestão',
      color: '#FF8A29',
    },
  ])

  const booksList = [
    {
      idBook: 1,
      name: 'React',
      actor: 'Facebook',
      image: '',
      categoryBooks: 'Front-end'
    },
    {
      idBook: 2,
      name: 'React Native',
      actor: 'Facebook',
      image: '',
      categoryBooks: 'Mobile'
    },
    {
      idBook: 3,
      name: 'React',
      actor: 'Facebook',
      image: '',
      categoryBooks: 'Front-end'
    },
    {
      idBook: 4,
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

  function deleteBook(){
    console.log('deletado')
  }

  function updatacolorCategory(color,name){
    setCategories(categories.map(category =>{
      if(category.categoryType === name){
        category.color = color
      }
      return category
    }))
    
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
      <Form categoriesName={categories.map(category => category.categoryType)} registeredBooks={book => setBooks([...books,book])}/>
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
