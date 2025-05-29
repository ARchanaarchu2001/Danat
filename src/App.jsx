import { BrowserRouter, Route, Routes } from 'react-router-dom'


import About from './pages/Aboutpage'
import Contactpage from './pages/Contactpage'
import Bookpage from './pages/Bookpage'


import Homepage from './pages/Homepage'
import { Book } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Menupage from './pages/Menupage'

function App() {
  

  return (
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contactpage/>}/>
      <Route path='/book' element={<Bookpage/>}/>
      <Route path='/menu' element=  {<Menupage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App
