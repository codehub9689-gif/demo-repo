import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Name from './components/Name'
import Student from './components/Student'
function RootMain() {
  return (
    <div>
        <BrowserRouter>
            <header>
                <nav style={{display:"flex", justifyContent:"space-evenly" }}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/hello/:name' element={<Name />}/>
                <Route path='/student/:currId' element={<Student />}/>


            </Routes>
        </BrowserRouter>

        
    </div>
  )
}

export default RootMain