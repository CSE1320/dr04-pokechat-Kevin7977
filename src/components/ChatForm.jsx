
import React, { useEffect, useRef, useState } from 'react';
import { Card, Icon, Image, Input, List, Label} from 'semantic-ui-react'
import axios from 'axios';
import {CHAT_API} from '../AppConfig';

// HANDLES INTERACTIONS WITH THE LLM (/backend)
const ChatForm = ({setSearchResults})=>{
    const [query, setQuery] = useState('');
    const chat = async (query) => {
        try {
            // Make a GET request using Axios
            
            const response = await axios.get(`${CHAT_API}/chat/query`,  {
                params: {
                    q: query 
                }
            });
            
            const pokemonArray = Array.isArray(response.data)
                ? response.data.map(pokemon => pokemon.id)
                : [];

            
            console.log('Response from backend:', response.data);

            setSearchResults(pokemonArray);
            console.log('Response from backend:', response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='chat'>
        <Input
            fluid
            icon={<Icon name='send' inverted circular link onClick={() => {
                
                console.log(query); 
                chat(query); 
            }} />}
            placeholder='Ask me a Pokémon question...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <Label pointing='above' onClick={() => setQuery('strongest Pokemon')} message="strongest pokemon limit 1"> Strongest Pokémon </Label>
        <Label pointing='above' onClick={() => setQuery('weakest Pokemon')} message="weakest pokemon limit 1"> Weakest Pokémon </Label>
        <Label pointing='above' onClick={() => setQuery('starter Pokemon')} message="starter pokemon limit 3"> Starter Pokémon </Label>
    </div>
    );
}

export {ChatForm};
