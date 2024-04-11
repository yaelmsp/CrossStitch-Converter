
import { Pressable, StyleSheet, Text, View,ImageBackground,Image} from 'react-native'; 
import image from '../assets/wallpaper1.png'
import logo from '../assets/icon.png'
// import { Link } from 'expo-router';


function Main({navigation}) {
      
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Image style={styles.logo} source={logo}/>
      <View style={styles.div}>
        <Text style={styles.title}>Welcome to Cross Stitch Converter</Text>
        <Text style={styles.paragraph}>transformation from fabric stitches to cm or from cm to fabric stitches</Text>
          <Pressable onPress={() =>
        navigation.navigate('Calculator')} style={styles.button} >
          <Text style={styles.text}>Start Converting</Text>
          </Pressable>
      </View>
      <Text style={styles.subtitle}>Made by: @y.xstitch</Text>
    </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      backgroundColor: '#fff',
    },
    logo:{
      width: 60, 
      height: 60,
      borderRadius:50,
      opacity:0.7,
      marginLeft:'auto',
      marginRight:10,
      marginTop:10
    },
    div:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:-40
    },
    title:{
      fontSize:20,
      fontWeight:'bold',
      marginBottom:12,
    },
    paragraph:{
      textAlign:'center',
      fontSize:18,
      marginBottom:12,
    },
    button:{
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 15,
      elevation: 10,
      backgroundColor: '#FCD5CE',
    },
    text:{
      fontWeight: 'bold',
      color: 'black',
    },
  });
  

export default Main