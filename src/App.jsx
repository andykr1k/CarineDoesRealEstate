import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomeView, BlogView } from './pages'
function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/blog' element={<BlogView />} />
      </Routes>
    </>
  )
}

export default App
