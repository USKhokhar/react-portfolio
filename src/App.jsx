import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import World from './components/World'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/World' element={<World />} />
      </Routes>
    </div>
  )
}

export default App