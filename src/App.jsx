import { BrowserRouter, Routes, Route } from 'react-router'



import './App.css'
import Nyheder1 from './pages/nyheder1'
import { Footer } from './components/Footer/footer'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Nyheder1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
