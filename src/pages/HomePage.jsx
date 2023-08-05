

import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-router-dom'
import { setTrainerG } from '../store/slices/trainer.slice'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const inputTrainer = useRef()
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerG(inputTrainer.current.value.trim()))
        navigate( '/pokedex')
    }

  return (
    <div>
      <a className='projects' href="https://portfolio-sandy-gomez.netlify.app/" target={"_blank"}>More Projects</a>
      <div className='homepage__container'>
        <div className='homepage__logo'>
            <img src="/logoPokedex.png" alt="Pie de pagina" />
        </div>
        <h2 className='homepage__welcome'>Hi trainer!</h2>
        
        <p>To start with the app give me your name 👀 </p>
        <br />
        <form onSubmit={handleSubmit}>
            <input ref={inputTrainer} type="text" />
            <button>Gotta a catch'em all!</button>
        </form>

        <div className='homepage__footer'>
            <img src="/pieDePagina.png" alt="Pie de pagina" />
        </div>
        </div>
        
    </div>

  )
}

export default HomePage