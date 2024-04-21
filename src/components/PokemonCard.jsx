import React, { useEffect, useState } from 'react';
import { Card, Icon, Image, Input, List, Label, ListItem} from 'semantic-ui-react'
import '../App.scss';
import { POKE_API } from '../AppConfig';
import axios from 'axios';



const typeColors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};


const PokemonCard = ({pokemonID}) => {
    const [data, setData] = useState(null); // store the result here
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${POKE_API}/pokemon/${pokemonID}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [pokemonID]);
    
    return (
        <Card>
            {/* Render the fetched data */}
            {data && (
                <>
                    <Image src={data.sprites.front_default} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{data.name}</Card.Header>
                        <Card.Meta>#{data.id}</Card.Meta>
                        {data.types.map((type, index) => (
                            <Label style={{ backgroundColor: typeColors[type.type.name.toLowerCase()], color: 'white' }} key={index}>
                            {type.type.name.toUpperCase()}
                            </Label>
                        ))}
                        <Card.Description>
                            {/* Add more details if needed */}
                            Height: {data.height / 10} m | Weight: {data.weight / 10} kg
                            <div/>
                            <List divided verticalAlign='middle'>
                                <List.Item>
                                    <List.Content floated='left'>
                                        <strong>HP:</strong>
                                    </List.Content>
                                    <List.Content floated='right'>
                                        {data.stats[0].base_stat}
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='left'>
                                        <strong>Attack:</strong>
                                    </List.Content>
                                    <List.Content floated='right'>
                                        {data.stats[1].base_stat}
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='left'>
                                        <strong>Defense:</strong>
                                    </List.Content>
                                    <List.Content floated='right'>
                                        {data.stats[2].base_stat}
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='left'>
                                        <strong>Special Attack:</strong>
                                    </List.Content>
                                    <List.Content floated='right'>
                                        {data.stats[3].base_stat}
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='left'>
                                        <strong>Special Defense:</strong>
                                    </List.Content>
                                    <List.Content floated='right'>
                                        {data.stats[4].base_stat}
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content floated='left'>
                                        <strong>Speed:</strong>
                                    </List.Content>
                                    <List.Content floated='right'>
                                        {data.stats[5].base_stat}
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Card.Description>
                    </Card.Content>
                </>
            )}
        </Card>
    );
}

export {PokemonCard};