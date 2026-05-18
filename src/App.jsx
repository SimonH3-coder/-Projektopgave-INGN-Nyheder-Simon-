import { BrowserRouter, Routes, Route } from 'react-router'
import Nyheder1 from './pages/nyheder1'
import { indland } from './pages/indland'
import { udland } from './pages/udland'
import { teknologi } from './pages/teknologi'
import { sport } from './pages/sport'
import { politik } from './pages/politik'
import { samfund } from './pages/samfund'
import { Footer } from './components/Footer/footer'
import { Navbar } from './components/Navbar/Navbar'
import './App.css'


function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Nyheder1 />} />
        <Route path="/indland" element={<indland />} />
        <Route path="/udland" element={<udland />} />
        <Route path="/teknologi" element={<teknologi />} />
        <Route path="/sport" element={<sport />} />
        <Route path="/politik" element={<politik />} />
        <Route path="/samfund" element={<samfund />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
