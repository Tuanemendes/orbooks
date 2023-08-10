import Head from 'next/head'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import Form from '@/components/Form'
import { useState } from 'react'
import Category from '@/components/Category'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const categories =[
    {
      id: 1,
      categoryType: 'Front-end',
      primaryColor: 'var(--d-green)',
      secondaryColor: 'var(--bg-green-light)'
    },
    {
      id: 2,
      categoryType: 'Back-end',
      primaryColor: 'var(--d-blue)',
      secondaryColor: 'var(--bg-blue-light)'
    },
    {
      id: 3,
      categoryType: 'Mobile',
      primaryColor: 'var(--d-green2)',
      secondaryColor: 'var(--bg-green-light2)'
    },
    {
      id: 4,
      categoryType: 'DevOps',
      primaryColor: 'var(--d-red)',
      secondaryColor: 'var(--bg-red-light)'
    },
    {
      id: 5,
      categoryType: 'Ux Design',
      primaryColor: 'var(--d-pink)',
      secondaryColor: 'var(--bg-pink-light)'
    },
    {
      id: 6,
      categoryType: 'Data Science',
      primaryColor: 'var(--d-yellow)',
      secondaryColor: 'var(--bg-yellow-light)'
    },
    {
      id: 7,
      categoryType: 'Inovação e Gestão',
      primaryColor: 'var(--d-orange)',
      secondaryColor: 'var(--bg-orange-light)'
    },
  ]

  const [books,setBooks] = useState([])

  const newBooks = (book) => {
    setBooks([...books,book])
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
      <Form categoriesName={categories.map(category => category.categoryType)} registeredBooks={book => newBooks(book)}/>
      {categories.map( category => <Category 
        key={category.id} 
        name={ category.categoryType} 
        primaryColor={category.primaryColor} 
        secondaryColor={category.secondaryColor}
        books={books.filter(book => book.categoryBooks === category.categoryType)}
       />)}
       <Footer/>
    </>
  )
}
