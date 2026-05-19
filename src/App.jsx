import { BrowserRouter, Routes, Route } from 'react-router'
import Nyheder1 from './pages/nyheder1'
import { Indland } from './pages/indland'
import { Udland } from './pages/udland'
import { Teknologi } from './pages/teknologi'
import { Sport } from './pages/sport'
import { Politik } from './pages/politik'
import { Samfund } from './pages/samfund'
import { Footer } from './components/Footer/footer'
import { Navbar } from './components/Navbar/Navbar'
import { ArtikelNyheder } from './pages/artikelnyheder'
import { Cards } from './components/cards/cards'
import './App.css'


function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Nyheder1 />} />
        <Route path="/indland" element={<Indland />} />
        <Route path="/udland" element={<Udland />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/politik" element={<Politik />} />
        <Route path="/samfund" element={<Samfund />} />
        <Route path="/artikel/:slug" element={<ArtikelNyheder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
