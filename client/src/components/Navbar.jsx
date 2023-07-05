import React,{useState, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {context} from '../App.js'
import '../index.css'
const Navbar = () => {
    const {state, dispatch} = useContext(context);

    const Navlink =() => {
        return(
            <>
            {state ?
            <>
            <ul className='flex flex-row gap-5 justify-center py-3 text-xl '>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/logout'>Logout</NavLink></li>
            </ul>
            </>:
            <>
            <ul className='flex flex-row justify-center text-xl gap-5 py-3'>
                <li><NavLink to='/login' className='bg-transparent'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
            </ul>
            </>
            }
            </>
        )
    }
  return (
    <div>
      <Navlink/>
    </div>
  )
}

export default Navbar
