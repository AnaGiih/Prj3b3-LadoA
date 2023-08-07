import  React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () =>{
  const [inputValues, setInputValues]= useState({
input1: '',

  });

  const [sum, setSum] = useState(0);

  const handleInputChange = (inputName, value)=> {
    setInputValues({...inputValues, [inputName]: value});
  };

  const handleSum = () =>{
    const {input1} = inputValues;
    const result = parseInt(input1);

    setSum(result);
  };

  return(
    <View style={style.container}>
    <Text style={style.label}>input1:</Text>
    <TextInput
    style={style.input}
    onChangeText={(value) => handleInputChange('input1', value)}
    value = {inputValues.input1}
    keyboardType="numeric"
    />

    <Button title="Somar" onPress={handleSum}/>
    <Text style={style.result}>Resultado: {sum} </Text>

    </View>
  )

};

const style= StyleSheet.create ({
container:{
  flex: 1,
  backgroundColor: "#136798",
  padding: 20,
},


});

export default App;

