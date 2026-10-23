import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css'

function App() {

  return (
    <UserContextProvider >
      <h1 className="text-3xl font-bold text-center  mt-10">
        Welcome to My App
      </h1>
      <Login />
      <Profile />

    </UserContextProvider>
  )
}

export default App
