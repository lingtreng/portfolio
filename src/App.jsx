import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
      
      
        <Footer/>
    </div>
  )
}

export default App