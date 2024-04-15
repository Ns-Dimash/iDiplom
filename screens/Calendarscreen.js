import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {Text, View,SafeAreaView,StyleSheet} from 'react-native';

const Calendarscreen = () => {

    const [selected, setSelected] = useState('');

   return (
    <SafeAreaView style = {{flex:1,backgroundColor:"white",}}>
      <View style={styles.container}>
        <Calendar style={styles.cal}
        theme={{
             todayTextColor: "white",
             todayBackgroundColor:"#ABD8BB",
             arrowColor:"#ABD8BB",
          

  'stylesheet.calendar.header': {
    headerContainer: {
      flexDirection: 'row',
      borderRadius: 12,
      arrowRight:"white",
    },
  }
}}
  
    onDayPress={day => {setSelected(day.dateString);
    console.log('selected day', day);
  }}
  markingType={'custom'}

  markedDates={{
        [selected]: { selected: true, selectedColor: "green", textColor: "black"},
      }}
 
/>


      </View>
    
    </SafeAreaView>
   
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:'40%',
    marginHorizontal:'5%',
    

  },
  cal:{
    borderWidth: 6,
    borderRadius:14,
    borderColor: '#ABD8BB',
    color: 'black',
    shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,

  }
 
});


export default Calendarscreen;




