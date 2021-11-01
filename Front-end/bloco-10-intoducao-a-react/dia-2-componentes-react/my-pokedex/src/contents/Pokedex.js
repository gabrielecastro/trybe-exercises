import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() { 
    return <ul>
      {pokemons.map((pokemon) => (
        <li className='pokemon'>
        <Pokemon 
          key={pokemon.name}
          nome={ pokemon.name }
          tipo={`Tipo: ${ pokemon.type }`}
          peso= {`Peso: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}
          imagem={ pokemon.image }
        />
        </li>
      ))}
      
    </ul>;
  }
}
 
export default Pokedex;