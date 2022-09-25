import React from 'react';
import Home from '../components/root/home/home';
import { connect } from 'react-redux';
import changeLanguage from '../components/app/language';


const Index=(props)=> {
  console.log(props)
  // const {lang} = props
  const language = changeLanguage(props.lang)
  return <Home lang={language}/>
}


const mapStateToProps = state =>({
  lang:state.main.lang
})

const mapDispatchToProps ={
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)