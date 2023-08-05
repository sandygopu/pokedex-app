

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import { useRef } from 'react'
import SelectType from '../components/PokedexPage/SelectType'

const PokedexPage = () => {

    const [inputValue, setInputValue] = useState('')
    const [ selectValue, setSelectValue ] = useState('allPokemons')

    console.log(selectValue)

    const trainer = useSelector(reducer => reducer.trainer)

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
    const [ pokemons, getAllPokemons, getPokemonsByType ] = useFetch(url)

    useEffect(() => {
        if(selectValue === 'allPokemons') {
            getAllPokemons()
        } else {
            getPokemonsByType(selectValue)
        }

    }, [selectValue])

    const inputSearch = useRef()
    const handleSubmit = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())
    }

    const cbFilter = poke => poke.name.includes(inputValue)


    console.log(pokemons)

    return (
    <div>
        <div className='pokedexpage__header'>
            <img src="/encabezado.png" alt="Encabezado" />
        </div>
        <p className='pokedexpage__welcomePrincipal'><span className='pokedexpage__welcome'>Welcome {trainer}</span>, here you could find your favorite pokemon.</p>
        
        
        <div className='pokedexpage__container'>

            <form onSubmit={handleSubmit}>
            <input ref={inputSearch} type="text" />
            <button>Search</button>

            </form>
            
            

            <SelectType setSelectValue={setSelectValue}/>
            </div>
            <div className='pokedexpagecard__container'>
            {
                pokemons?.results.filter(cbFilter).map(poke => (
                    <PokeCard
                        key={poke.url}
                        url={poke.url}
                    />
                ))
            }
        
            
            </div>
        
        
    </div>
  )
}

export default PokedexPage