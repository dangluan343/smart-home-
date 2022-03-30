import React from 'react'

import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'



import Routes from '../routers/Routes'

const Layout = () => {
  return (
    <BrowserRouter>
        <Route render={props => (
            <div className="app">

            </div>
        )} />
    </BrowserRouter>
  )
}

export default Layout