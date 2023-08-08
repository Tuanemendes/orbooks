import Head from 'next/head'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import Form from '@/components/Form'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [books,setBooks] = useState([])

  const newBooks = (book) => {
    console.log(book)
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
      <Form registeredBooks={book => newBooks(book)}/>
    
    </>
  )
}
