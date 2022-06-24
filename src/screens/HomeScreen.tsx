import React, { useContext, useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Switch, Text, View, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { themeContext } from '../context/themeContext/ThemeContext';
import { usePokemonPagination } from '../hooks/usePokemonPagination';
import { globalStyles } from '../theme/globalStyles';

export const HomeScreen = () => {

   const { pokemonList, isLoading, loadPokemons } = usePokemonPagination()

    const {theme, setDarkTheme, setLightTheme} = useContext(themeContext);
    const [darkThemeActive, setDarkThemeActive] = useState(false);

    const setThemeOfTheApp = () => {
        setDarkThemeActive(!darkThemeActive)
        if (!darkThemeActive === true) {
            setDarkTheme();
        }else{
            setLightTheme();
        }
    }

    const {top} = useSafeAreaInsets(); 


  return (
    <View style={{...globalStyles.container, top: top + 25}}>

          {
            (theme.mainPokeball === 'pokebola') ? <Image style={styles.homePokeball} source={require('../assets/pokebola.png')} />
                                                : <Image style={styles.homePokeball} source={require('../assets/pokebola-blanca.png')} />
          }


          <View style={styles.headerContainer}>
                <Text style={{...globalStyles.bigTitle, color: theme.textColor}}>Pokedex</Text>

                {/* <Switch 
                    //   trackColor={{false: 'red', true: 'green'}} // the color of the background
                    //   thumbColor={(Platform.OS === 'android') ? 'purple' : 'black'} // color of the circle 
                      value={darkThemeActive}
                      onValueChange={setThemeOfTheApp}
                      style={{margin:0, padding:0}}
                /> */}

                <TouchableOpacity onPress={setThemeOfTheApp}>
                  {
                    (darkThemeActive) ? <Icon style={styles.sunnyButton} name='sunny-outline' size={30} color={"#F1BE00"}/> 
                                      : <Icon style={styles.moonButton} name='moon-outline' size={30} color={"#0059FF"}/>
                  }
                </TouchableOpacity>
          </View>
             
          
          <FlatList 
                
                data={pokemonList}
                keyExtractor={(pokemon)=>pokemon.id}
                renderItem={ ({item}) => <PokemonCard pokemon={item} /> }
                showsVerticalScrollIndicator={false}
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}
                numColumns={2}
                ListFooterComponent={()=>(
                  <View style={styles.loadingMargin}>
                      <ActivityIndicator size={40} />
                  </View>
             )}

          />

    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 15,
      paddingHorizontal: 12
    },
    homePokeball: {
      position: 'absolute',
      top: -110,
      right: -110,
      width: 300,
      height: 300,
      opacity: 0.2
    },
    loadingMargin: {
      marginVertical: 30
    },
    sunnyButton:{
      backgroundColor: 'white',
      padding: 8,
      borderRadius: 200,
      marginRight: 1,
      top: 4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5
    },
    moonButton: {
      backgroundColor: 'white',
      padding: 8,
      borderRadius: 200,
      marginRight: 1,
      top: 4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5
    }
});