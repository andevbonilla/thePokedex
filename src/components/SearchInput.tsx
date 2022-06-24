import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../hooks/useDebounceValue';

interface Props {
  onDebounce: (value:string)=>void
}

export const SearchInput = ({onDebounce}:Props) => {

  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebounceValue(textValue)


  useEffect(() => {
      onDebounce(debouncedValue)
  }, [debouncedValue])
  

  return (
    <View style={styles.inputContainer}>
        <TextInput
             placeholder='Search pokemon'
             style={styles.input}
             value={textValue}
             onChangeText={setTextValue}
        />
        <Icon name='search-outline' style={styles.iconStyle} size={24} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#EDEDED',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input:{
    paddingHorizontal: 20,
    paddingVertical: 9
  },
  iconStyle:{
    paddingHorizontal: 20,
    paddingVertical: 9
  }
});