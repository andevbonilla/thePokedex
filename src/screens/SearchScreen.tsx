import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PokemonCard } from '../components/PokemonCard'
import { SearchInput } from '../components/SearchInput'
import { themeContext } from '../context/themeContext/ThemeContext'
import { usePokemonSearch } from '../hooks/usePokemonSearch'

export const SearchScreen = () => {

    const {theme} = useContext(themeContext);
    const {top} = useSafeAreaInsets();
    const {isFetching, pokemonSimpleList} = usePokemonSearch();

    const [pokemonFiltered, setpokemonFiltered] = useState<any>([]);

    const [term, setTerm] = useState('');

    useEffect(() => {

      if (term.length === 0) {
        return setpokemonFiltered([]);
      } 

      if (isNaN(Number(term))) {

        setpokemonFiltered(pokemonSimpleList.filter((poke)=>{
          return poke.name.toLocaleLowerCase().trim().includes(term.toLocaleLowerCase().trim())
        }))

      }else{
        
        setpokemonFiltered([pokemonSimpleList.find((poke)=>poke.id.trim() === term.trim())])

      }


    }, [term])
    


    if (isFetching) {
      return (
        <View style={styles.loadingScreeen}>
            <ActivityIndicator size={40} />
        </View>
      )
    }

  return (
    <View style={{...styles.searchContainer, backgroundColor: theme.backgroundColor, top: top }}>

          <SearchInput onDebounce={(value:any) => setTerm(value)} />

          <FlatList          
                data={pokemonFiltered}
                keyExtractor={(pokemon)=>pokemon.name}
                renderItem={ ({item}) => <PokemonCard pokemon={item} /> }
                showsVerticalScrollIndicator={false}
                numColumns={2}
          />
              
    </View>
  )


}

const styles = StyleSheet.create({
    searchContainer: {
        padding: 20,
        flex: 1
    },
    loadingScreeen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});