


import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


const PokeIdPage = () => {

  const {id} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [id])

  const firstType = pokemon?.types[0].type.name

  return (
    <div>
      <div className='pokedexpage__header'>
            <img src="/encabezado.png" alt="Encabezado" />
      </div>


    <article className='pokeidpage__container'>
      <header className='pokeidpage__card'>
        <div>
          <div className={`pokecard__header ${ firstType }-gradient`}>
            <img className='pokeidpage__photo' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />


          </div>
      


      <section className='pokecard__body' >
            <h3 className={ `pokecard__name ${ firstType }-color`}>{pokemon?.name}</h3>
            <ul className='pokecard__types'>
                
                    <li className='pokecard__typename' >Altura: {pokemon?.height} decimetres</li> 
                    <li className='pokecard__typename' >Peso:{pokemon?.weight} hectograms</li> 
                 
                
            </ul>
            <br />
            <hr className='pokecard__hr'/>

            
            <ul className='pokeidpage__infos'>
                
                  
              <li className='pokeidpage__info' >
                          
                    <div className='pokeidpage__infocard'>
                    <h4 className='pokeidpage__h4' >Type</h4>
                     <div className='pokeidpage__type'>
                       {
                         pokemon?.types.map((typeInfo) => (
                        <li  key={typeInfo.type.url}>{typeInfo.type.name}</ li>
                         ))
                         } 
                      </div>
 
                      </div>
                            

                      <div  className='pokeidpage__infocard'>
                       <h4 className='pokeidpage__h4' >Abilities</h4>
                       <div className='pokeidpage__abilities'>
                        {
                        pokemon?.abilities.map((iInfo) => (
                       <li  key={iInfo.ability.url}>{iInfo.ability.name}</ li>
                        ))
                        }      
                      </div>

                      </div>
                            
              </li>
                    
                
            </ul>
        </section>

      </div>

      </header>
      
      
    </article>
    </div>
    
  )
}

export default PokeIdPage