import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h2>Context API in React</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
