import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Logout from './components/Logout'
import { Routes, Route } from 'react-router-dom'
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

export const context = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const Routing = () => {
    return (
      <Routes>
        <Route path='/'
          element={<Home />} />
        <Route path='/login'
          element={<Login />} />
        <Route path='/register'
          element={<Register />} />
        <Route path='/profile'
          element={<Profile />} />
        <Route path='/logout'
          element={<Logout />} />
      </Routes>
    )
  }

  return (
    <>
      <context.Provider value={{ state, dispatch }} >
        <Navbar />
        <Routing />
      </context.Provider>
    </>
  );
}

export default App;


