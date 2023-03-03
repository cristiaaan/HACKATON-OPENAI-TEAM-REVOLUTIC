import React from 'react'
import Navbar from './Navbar' 
import Footer from './Footer' 
import Head from 'next/head'

export default function PageLayout({ children }){
  return (
    <>
			<Head>
				<title>Filter GPT - create custom chatbots</title>
				<meta name="description" content="In Filter GPT you can create your own personalized Chatbot with Chat GPT technology."/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <Navbar />
			<main id='particles'>
        { children }
			</main>
      <Footer />
    </>
  )
}