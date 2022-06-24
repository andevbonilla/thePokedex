import axios from "axios";
import { useEffect, useState } from "react"
import { PokemonFullInfoInterface } from "../interfaces/pokemonInterface"

export const usePokemon = (id:any) => {

    const [pokemonFullInfo, setpokemonFullInfo] = useState<PokemonFullInfoInterface>();
    const [isLoading, setisLoading] = useState(true);


    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
             .then(resp=>{setpokemonFullInfo(resp.data), setisLoading(false)})

    }, [])
    

    return {pokemonFullInfo, isLoading};

}