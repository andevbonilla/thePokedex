import { useEffect, useRef, useState } from "react";
import axios from 'axios'
import { PokemonInfo, Result } from "../interfaces/pokemonInterface";

export const usePokemonSearch = () => {

    const [isFetching, setIsFetching] = useState(false)
    const [pokemonSimpleList, setPokemonSimpleList] = useState<PokemonInfo[]>([]);
    const url = useRef('https://pokeapi.co/api/v2/pokemon?limit=1200')
   
    const loadPokemons = async() => {

        setIsFetching(true);

        const resp = await axios.get(url.current);

        buildPokemonList(resp.data.results);

        
    }

    const buildPokemonList = (pokeList:Result[]) => {

        const pokemonResultsModified = pokeList.map(poke=> {

            const id = poke.url.split('/').reverse()[1];

            return {
                id: id,
                name: poke.name,
                url: poke.url,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            }

        })

        setPokemonSimpleList(pokemonResultsModified);
        setIsFetching(false);

    }

    useEffect(() => {
        loadPokemons();
    }, [])
    

    return { isFetching, pokemonSimpleList }
}