import React from 'react'
import { View , Text, StyleSheet, ImageBackground , TouchableOpacity} from 'react-native'
import bookImg from '@/assets/images/background.jpg'
import { Link } from 'expo-router'
import { Pressable } from 'react-native'

const app = () => {
  return (
    <View style={styles.container} >
      <ImageBackground 
        source={bookImg}
        resizeMode='cover'
        style= {styles.bgImage}
      >
        <Text style={styles.text}>Cashier less Libaray App</Text>
        
      
        <Link href={"/explore"} style={styles.button} asChild>
          <Pressable >
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </Link>  
      </ImageBackground>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
  },
  bgImage:{
     opacity:'80%',
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent:'center',

  }, 
  button: {    margin:'5%',
    marginHorizontal:"auto",
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {

    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
    text:{
    color: "blue",
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
export default app
