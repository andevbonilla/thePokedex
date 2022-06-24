import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { usePokemon } from '../hooks/usePokemon';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { getTypeColor } from '../helpers/getTypeColor';
import { themeContext } from '../context/themeContext/ThemeContext';


export const PokemonDetails = ({route}:any) => {

    const {pokemonInfo, pokeColor} = route.params;

    const {pokemonFullInfo, isLoading} = usePokemon(pokemonInfo.id);

    const { theme } = useContext(themeContext);
    const navigation = useNavigation();

    console.log(pokemonFullInfo);

  return (

    
    <ScrollView>

              {(!isLoading) ? 
                              <View>
                                    <View style={{...styles.backgroundHeader, backgroundColor: pokeColor}}>

                                        <View style={styles.header}>

                                            <TouchableOpacity onPress={()=>navigation.goBack()}>
                                                <Icon style={styles.buttonBack} name='arrow-back-outline' size={32}/>
                                            </TouchableOpacity>
                                            <Text style={styles.headerText}>{pokemonInfo.name}</Text>

                                        </View>

                                        <Image style={styles.pokebolaImg} source={require('../assets/pokebola-blanca.png')} />
                                        <Image style={styles.pokemonImg} source={{uri:pokemonInfo.img}} />

                                    </View>


                                    <Text style={{...styles.subTitle, color: theme.textColor}}>Types:</Text>
                                    <View style={styles.typesContainer}> 
                                        {
                                          pokemonFullInfo?.types.map(type=> (
                                            <Text style={{...styles.type, backgroundColor: getTypeColor(type.type.name)}} key={type.type.url}>{type.type.name}</Text>
                                          ))
                                        }
                                    </View>

                                    <Text style={{...styles.subTitle, color: theme.textColor}}>Height:</Text>
                                    <Text style={{...styles.normalText, color: theme.textColor}}>{pokemonFullInfo!.height / 10} m</Text>

                                    <Text style={{...styles.subTitle, color: theme.textColor}}>Weight:</Text>
                                    <Text style={{...styles.normalText, color: theme.textColor}}>{pokemonFullInfo!.weight / 10} kg</Text>

                                    <Text style={{...styles.subTitle, color: theme.textColor}}>Base Stats:</Text>
                                    <View style={styles.statsContainer}> 
                                        {
                                          pokemonFullInfo?.stats.map(stat=> (
                                            <View style={styles.baseStat}>
                                                <Text style={{...styles.statStyle, fontWeight: 'bold'}} key={stat.stat.name}>{stat.stat.name}: </Text>
                                                <Text style={styles.statStyle} key={stat.stat.name}>{stat.base_stat}</Text>
                                            </View>
                                            
                                          ))
                                        }
                                    </View>


                               </View>
              
                                    

                              : <Text>loading</Text>
            }
    
    </ScrollView>

    
  )
}

const styles = StyleSheet.create({
  header:{
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText:{
    color: 'white',
    fontSize: 26,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  backgroundHeader:{
    height: 280,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
    marginBottom: 40
  },
  pokemonImg: {
    width: 220,
    height: 220,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -30,
  },
  pokebolaImg: {
    width: 220,
    height: 220,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -10,
    opacity: 0.7
  },
  buttonBack: {
    color: 'white'
  },
  subTitle: {
    fontWeight: 'bold',
    marginHorizontal: 30,
    marginBottom: 10,
    fontSize: 23
  },
  normalText: {
    marginHorizontal: 30,
    marginBottom: 10,
    fontSize: 18
  },
  typesContainer:{
    flexDirection: 'row',
    marginHorizontal: 30
  },
  type: {
    marginVertical: 10,
    marginRight: 10,
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10
  },
  statsContainer: {
    backgroundColor: '#f2f2f2',
    marginHorizontal: 30,
    marginBottom: 80,
    paddingHorizontal: 18,
    paddingVertical: 9
  },
  statStyle:{
    marginVertical: 5,
    fontSize: 18
  },
  baseStat:{
    flexDirection: 'row',
    alignItems: 'center'
  }
});