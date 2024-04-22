import React, { useEffect, useState } from 'react';
import { Card, Icon, Image, Input, List, Label} from 'semantic-ui-react'
import '../App.scss';
import axios from 'axios';
import {CHAT_API} from '../AppConfig';
import {PokemonCard} from '../components/PokemonCard';
import { ChatForm } from '../components/ChatForm';


const PokemonChat = () => {
  const [pokemon, setPokemon] = useState([]);

  return (
    <div className="CenteredTopLayout">
      <div className="results">
        {pokemon.length === 0 ? <p>Loading...</p> : null}
        {Array.isArray(pokemon) && pokemon.map((pokemonID, key) => { 
          return <PokemonCard pokemonID={pokemonID} key={key}></PokemonCard>;
        })}
      </div>
      <ChatForm setSearchResults={setPokemon}></ChatForm>
    </div>
  );
};
  
export {PokemonChat};
