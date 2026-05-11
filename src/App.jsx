import { BrowserRouter, Routes, Route } from 'react-router'



import './App.css'
import Nyheder1 from './pages/nyheder1'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nyheder1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
