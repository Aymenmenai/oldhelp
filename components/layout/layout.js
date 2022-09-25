import {React} from 'react'
import Head from "next/head"
import { connect } from 'react-redux';
import {setLang} from '../../redux/actions/main'

import { Footer } from './footer'
import { Header } from './header'
// import { connect } from 'react-redux';

const Layout = (props) => {
  // DATA
  const language =["العربية","français","english",
  // "español","português","中文","italiano",
  "magyar"
  // ,"deutsch"
]

  return (
    <>
    <Head>
          <title>O&rsquo;right help</title>
          <meta name="description" content="Bootstrap Site Project" />
          <meta name="keywords" content="Nextjs, React, Redux, TypeScript" />
          <meta name="author" content="Gagan Jakhotiya" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header lang={language} func={props.setLang}/>
    <main className='bg-gray-50'>
        {props.children}
    </main>
    <Footer lang={language} func={props.setLang}/>
    </>
  )
}

const mapStateToProps = state =>({
  lang:state.main.lang
})

const mapDispatchToProps ={
  setLang : setLang
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)