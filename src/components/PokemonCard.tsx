import React, { useEffect, useRef, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PokemonInfo } from '../interfaces/pokemonInterface'
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

interface Props {
    pokemon: PokemonInfo
}

export const PokemonCard = ({pokemon}:Props) => {

    const [bgColor, setBgColor] = useState('gray');
    const isMounted = useRef(true);
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {

        if(isMounted.current === false) return;

        ImageColors.getColors(pokemon.img, {fallback:'gray'})
                   .then((colors)=> {
                        (colors.platform === 'ios')
                                             ? setBgColor(colors.background || 'gray')
                                             : setBgColor(colors.dominant || 'gray')
                   })

        return () =>{ // this function is activate when the component is destroyed
            isMounted.current = false;
        }

    }, [])
    

  return (

        <TouchableOpacity style={{...styles.cardConteiner, backgroundColor: bgColor}} 
                          onPress={()=>navigation.navigate('PokemonDetails', {pokemonInfo: pokemon, pokeColor: bgColor})}>

             <Text style={styles.pokeTitle}>{pokemon.name}</Text>

             <Text style={styles.idTex}>#{pokemon.id}</Text>

             <View style={styles.pokeballContainer}>

                <Image style={styles.pokeballBackground} source={require('../assets/pokebola-blanca.png')} />

             </View>

             <Image style={styles.pokeImg} source={{uri: pokemon.img}}/>

          </TouchableOpacity>

        
  )
}

const styles = StyleSheet.create({
    cardConteiner: {
        flex: 1,
        height: 110,
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    pokeTitle:{
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white'
    },
    pokeballContainer: {
        position: 'absolute',
        overflow: 'hidden',
        right: 0,
        bottom: 0
    },
    pokeballBackground: {
        opacity: 0.4,
        bottom: -15,
        right: -15,
        width: 85,
        height: 85
    },
    pokeImg: {
        position: 'absolute',
        bottom: -15,
        right: -15,
        width: 100,
        height: 100
    },
    idTex: {
        color: 'white',
        fontSize: 16
    }
});