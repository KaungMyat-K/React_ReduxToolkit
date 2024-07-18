import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Create from './pages/create'
import Update from './pages/update'


function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/edit/:id' element={<Update/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
