import  React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () =>{
  const [inputValues, setInputValues]= useState({
input1: '',
 input2: '',
 input3: '',
 input4: '',
 input5: '',
 input6: '',

  });

  const [sum, setSum] = useState(0);

  const handleInputChange = (inputName, value)=> {
    setInputValues({...inputValues, [inputName]: value});
  };

  const handleSum = () =>{
    const {input1, input2, input3, input4, input5} = inputValues;
    const result = parseInt(input1) + parseInt(input2) + parseInt(input3) + parseInt(input4) + parseInt(input5);
    

    setSum(result);
  };
 
  return(
    <View style={style.container}>
    <Text style={style.label}>input1:</Text>
    <TextInput
    style={style.input}
    onChangeText={(value) => handleInputChange('input1',value)}
    value = {inputValues.input1}
    keyboardType="numeric"
    />
    <Text style={style.label}>input2:</Text>
    <TextInput
    style={style.input}
    onChangeText={(value) => handleInputChange('input2',value)}
    value = {inputValues.input2}
    keyboardType="numeric"
    />
    
    <Text style={style.label}>input3:</Text>
    <TextInput
    style={style.input}
    onChangeText={(value) => handleInputChange('input3',value)}
    value = {inputValues.input3}
    keyboardType="numeric"
    />
    
    <Text style={style.label}>input4:</Text>
    <TextInput
    style={style.input}
    onChangeText={(value) => handleInputChange('input4',value)}
    value = {inputValues.input4}
    keyboardType="numeric"
    />
    
    <Text style={style.label}>input5:</Text>
    <TextInput
    style={style.input}
    onChangeText={(value) => handleInputChange('input5',value)}
    value = {inputValues.input5}
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
  backgroundColor: "#3699",
  padding: 20,
  
},


});

export default App;