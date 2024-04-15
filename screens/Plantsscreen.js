import React from 'react';
import {Pressable, Text, View, StyleSheet, Image, Button} from 'react-native';

const Plantsscreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>My Plants</Text>

      <View style={styles.bar}>
        <Pressable style={styles.barText}>
          <View style={styles.barView}>
            <Text style={styles.text2}>Plants</Text>
          </View>

          <View style={styles.barView}>
            <Text style={styles.text2}>Reminders</Text>
          </View>

          <View style={styles.barView}>
            <Text style={styles.text2}>Snap History</Text>
          </View>
        </Pressable>
      </View>


      <View style={styles.center}>
        <Image source={require('../assets/tree.svg')} style = {styles.cloud} />
        <View style={styles.centerContainer}>
          
          <Text style={{fontSize:19, fontWeight:'bold'}}>You Have No Plant</Text>
          <Text style={{fontSize:14, marginTop:'3%'}}>Add your first plant and start caring for it</Text>
          {/* <Button title="Add plants" color='#488350' onPress={() => {}}/> */}
          <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Add plant</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1:{
    fontSize: 29,
    margin: '5%',
    fontWeight: 'bold'
  },
  bar:{
    width:'90%',
    height:'40',
    marginLeft:'5%',
    borderRadius: 10,
    borderColor: '#DADADA',
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
  },
  barText:{
    flexDirection: 'row',
    marginTop:'2%',
    marginBottom:'2%',
    marginLeft:'3%',
  },
  barView:{
    width:115,
    height:29,
    
    borderRadius: 10,
    borderColor: '#DADADA',
    backgroundColor: 'rgba(72, 131, 80, 0.2)',
    elevation: 2,
    borderWidth: 1,
    alignItems: 'center '
  },
  text2:{
    fontSize:17, 
    fontWeight:'600', 
    color:'#3B6D41', 
  }, 
  center:{
    width:'80%',
    marginTop:'18%',
    marginLeft:'11%',
    alignItems:'center',
    justifyContent:'space-around'
  },

  cloud:{
     width: 250,
     height:213,
   },
   centerContainer:{
    justifyContent:'space-around',
    alignItems:'center',
    marginTop:'5%'
   },

   button: {
    width: 166,
    height: 44,
    borderRadius: 20,
    backgroundColor: '#488350', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'5%'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  
})
export default Plantsscreen;