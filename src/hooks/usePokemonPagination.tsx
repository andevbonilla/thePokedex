import { useEffect, useRef, useState } from "react";
import axios from 'axios'
import { PokemonInfo, Result } from "../interfaces/pokemonInterface";

export const usePokemonPagination = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([])
    const url = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')
   
    const loadPokemons = async() => {

        setIsLoading(true);

        const resp = await axios.get(url.current);

        buildPokemonList(resp.data.results);

        url.current = resp.data.next;
        
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

        setPokemonList([...pokemonList, ...pokemonResultsModified]);
        setIsLoading(false);

    }

    useEffect(() => {
        loadPokemons();
    }, [])
    

    return { isLoading, pokemonList, loadPokemons }
}