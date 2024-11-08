import { useState } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomePage />
    </>
  )
}

export default App
