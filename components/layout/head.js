import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


export default function Header() {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>DreadDev</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&family=Montserrat:wght@300&family=Roboto&display=swap" rel="stylesheet"/> 

          
          {/* <link href="/styles/Home.module.css" rel="stylesheet"></link> */}
        </Head>
      </>
    )
}