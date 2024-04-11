import { useState } from "react";
import {StyleSheet, Text, View,TextInput,TouchableOpacity,ImageBackground,Icon} from "react-native"
import { Dropdown } from 'react-native-element-dropdown';
import image from '../assets/wallpaper1.png'
import Ionicons from '@expo/vector-icons/Ionicons';

const data = [
    { label: 'canvas 18', value: '1' },
    { label: 'canvas 14', value: '2' }]

function Calculate() {

    const [value, setValue] = useState(null);
    const [number1, onChangeNumber1] = useState(0);
    const [number2, onChangeNumber2] = useState(0);
    const [resultado, setResultado] = useState(null);
    const [conversionMode,setConversionMode] = useState('pointsToCm');


    function calculate18(a,b) {
        let rest='';
        if(conversionMode == 'pointsToCm'){
          let restA = a / 7.2;
          let restB = b / 7.2;
          rest = `${restA.toFixed(2)}cm X ${restB.toFixed(2)}cm`;

        }if(conversionMode == 'cmToPoints'){
          let restA = a * 7.2;
          let restB = b * 7.2;
          rest = `${Math.round(restA)}points X ${Math.round(restB)}points`;
        }
  
        return rest
    }

    function calculate14(a,b) {
        let rest = '';
          if(conversionMode == 'pointsToCm'){
            let restA = a / 5.4;
            let restB = b / 5.4;
            rest = `${restA.toFixed(2)}cm X ${restB.toFixed(2)}cm`;
            
          }if(conversionMode == 'cmToPoints'){
            let restA = a * 5.4;
            let restB = b * 5.4;
            rest = `${Math.round(restA)}points X ${Math.round(restB)}points`;
          }
    
        return rest;
    }

    function Calculate() {
            if(value == 1){
                setResultado(calculate18(number1,number2))
            }
            else if (value==2) {
                setResultado(calculate14(number1,number2))
            }
    }

  return (
    <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.title}>{conversionMode == 'pointsToCm'? 'Converting Points into Cm': 'Converting Cm into Points'}</Text>
        <Text style={styles.canvaTitle}>1. Choose the canva yo're working with</Text>
        <Dropdown 
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
        />
        <View>
        <Text style={styles.canvaTitle}>2. Indicate the points or the cm of the desing</Text>
        <TextInput
           style={styles.input}
           onChangeText={onChangeNumber1}
           value={number1}
           placeholder={conversionMode == 'pointsToCm'? 'indicate the point': 'indicate the cm'}
           keyboardType="numeric"
        />
           <Ionicons name="shuffle" size={42} color="black"  style={styles.icoButton} onPress={() => setConversionMode(conversionMode === 'pointsToCm' ? 'cmToPoints' : 'pointsToCm')}></Ionicons>
        <TextInput
           style={styles.input}
           onChangeText={onChangeNumber2}
           value={number2}
           placeholder={conversionMode == 'pointsToCm'? 'indicate the point': 'indicate the cm'}
           keyboardType="numeric"
        />
        </View>
        <TouchableOpacity  style={styles.buttonCalculate} onPress={Calculate}>
            <Text style={styles.textCalculate}>Calculate</Text>
        </TouchableOpacity >
        <Text style={styles.result}>3. Result:</Text>
        <View style={styles.resultView}>
            <Text style={styles.resultText}>{resultado}</Text>
        </View>
    </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1
      },
      image: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignContent:'center', 
      },
      title:{
        marginLeft:25,
        marginRight:25,
        fontSize:25,
        fontWeight:'bold',
        marginBottom:35,
        color:'#ff4d6d'
      },
      canvaTitle:{
        fontWeight:'bold',
        marginBottom:10
      },
      dropdown: {
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#FCD5CE',
        height: 50,
        borderColor: '#FAE1DD',
        borderWidth: 0.5,
        borderRadius: 15,
        marginBottom:35

      },
      placeholderStyle: {
        fontSize: 16,
      },
      icoButton:{ marginLeft:'auto', 
      marginRight:'auto', 
      backgroundColor:'#FCD5CE', 
      borderRadius:50,
      padding:3},

      selectedTextStyle: {
        backgroundColor:'#FAE1DD',
        fontSize: 16,
      },
      input: {
        borderRadius:5,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      buttonCalculate:{
        marginLeft:10,
        marginRight:10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 15,
        elevation: 10,
        backgroundColor: '#FCD5CE',
        textAlign:'center'
      },
      textCalculate:{
        color:'black',
        fontWeight:'bold'
      },
      result:{
        marginTop:35,
        fontWeight:'bold'
      },
      resultView:{
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
        backgroundColor:'#F8EDEB',
        padding:20
      },
      resultText:{
        fontWeight:'bold',
        fontSize:25
      }
})
export default Calculate