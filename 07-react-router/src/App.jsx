import { useState } from 'react'
import { Header, Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header /> */}
    <div className='bg-gray-800 w-full h-screen'>
      <h2 className='text-3xl text-center text-blue-50 pt-2'>React Router</h2>
    </div>
    <Footer />
    </>
  )
}

export default App
