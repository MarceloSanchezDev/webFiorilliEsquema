import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import Preparados from './components/Preparados/Preparados'
import Product from './components/Product/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header></Header>
      <Home></Home>
      <QuienesSomos></QuienesSomos>
      <Preparados></Preparados>
      <Product></Product>
      <Footer></Footer>
    </main>
  )
}

export default App
