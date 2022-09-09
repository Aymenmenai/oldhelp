import {React} from 'react'
import Head from "next/head"


import { Footer } from './footer'
import { Header } from './header'
// import { connect } from 'react-redux';

export const Layout = (props) => {
  // DATA
  const language =["العربية","français","english",
  // "español","português","中文","italiano",
  "magyar"
  // ,"deutsch"
]

  return (
    <>
    <Head>
          <title>Ok</title>
          <meta name="description" content="Bootstrap Site Project" />
          <meta name="keywords" content="Nextjs, React, Redux, TypeScript" />
          <meta name="author" content="Gagan Jakhotiya" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header lang={language} />
    <main className='bg-gray-50'>
        {props.children}
    </main>
    <Footer lang={language}/>
    </>
  )
}
