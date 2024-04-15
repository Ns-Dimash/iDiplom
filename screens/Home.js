import React from 'react';
import {Text, SafeAreaView,StyleSheet,View,Image,ScrollView,Pressable} from 'react-native';
import AssetExample from '../components/AssetExample';

const Homescreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>

          <ScrollView style={styles.scrollView}>

      <View style={styles.header}>
      
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <Image source={require('../assets/profile.png')} style = {styles.img} />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Favourites")}>
        <Image source={require('../assets/fav.png')} style = {styles.img} />
      </Pressable>

      </View>
      <View style={styles.weather}>
        <Pressable onPress={() => navigation.navigate("Weather")}>
          <Text style = {{ fontSize: 40,fontWeight: 'medium',}}>29°С</Text>
          <Image source={require('../assets/cloud.png')} style = {styles.cloud} />
        </Pressable>
      </View>

      <AssetExample/>
      <AssetExample/>
      <AssetExample/>
      <AssetExample/>
      </ScrollView> 
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems:'center',
  backgroundColor:'white'
      
  },
  scrollView: {
    width:'90%',
    backgroundColor: '',
    marginHorizontal: 0,
  },

  header:{
    flexDirection:'row',
     alignItems:'center',
     alignSelf:'center',
     justifyContent: 'space-between',
      width:'90%',
      height:'8%',
      marginTop:'6%',
      
  },
  img:{
   flexWrap: 'wrap',
    width: 33,
    height:30
  },

  weather:{
    flexDirection:'row',
     alignItems:'center',
     alignSelf:'center',
     justifyContent: 'space-between',
      marginTop:'1%',
      
  },
  cloud:{
   flexWrap: 'wrap',
    width: 103,
    height:120,
    marginTop:0
  },
  
  
 
});

export default Homescreen;