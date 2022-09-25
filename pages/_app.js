import React from 'react'
import dynamic from 'next/dynamic'

import App from 'next/app'
import { Provider } from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import Layout from '../components/layout/layout'
import '../styles/globals.css'
import store from '../redux/store'

class myApp extends App {
    static async getInitialProps({ Component, ctx }){
        const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        return {appProps:appProps}
    }
    render(){
    const { Component, pageProps } = this.props;
    return <Layout>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    </Layout>
    }
}


const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(myApp);