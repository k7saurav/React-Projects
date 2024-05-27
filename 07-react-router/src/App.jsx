import { useState } from 'react'
import { Header, Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* we don't need to render App.jsx here, we can directly render all the components in the main.jsx file throw Layout.jsx file. */}
    </>
  )
}

export default App
