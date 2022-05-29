import React from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home({navigation}) {
  return (
    <ScrollView style={styles.container }>
      <View style={styles.bgdown}>
        <View style={styles.topIcon}>
          <Entypo name="bowl" size={70} color="white" />
        </View>
      </View>
      <View style={styles.bgdown2}>
        <View style={styles.iconBown}>
        <FontAwesome5 name="cart-arrow-down" size={50} color="black" />
        </View>
        <View style={ styles.boldText}>
        <Text style={{fontSize:30 ,fontWeight: "bold"}} >Non-Contact</Text>
        <Text style={{fontSize:30, fontWeight: "bold"}}>Deliveries</Text>
        </View>
        <View style={styles.textNor}>
          <Text style={{fontSize:18 ,lineHeight:25 }}>
            When packing the order that time be care fully make the package without hand touch so
            You can any time boy.
            
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <Pressable onPress={() => {
            navigation.navigate('OrderPage')
          }}
            style={{ alignItems: 'center', backgroundColor: "#0BCE83", }}>
            <Text style={{
              fontSize: 24, backgroundColor: "#0BCE83", padding: 10, color: "white", borderRadius: 10,
            }}>order now</Text>
          </Pressable>
          <Pressable style={{alignItems: 'center'}}>
            <Text style={{fontSize:18, alignItems: 'center', marginTop: 15 }}>Dismiss</Text>
          </Pressable>
        </View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',

    
  },
  bgdown: {

    backgroundColor: "#8C33FF",
    
  },
  topIcon: {
    flex: 1,
    paddingBottom: 90,
    paddingLeft: 38,
    padding:81
  },
  bgdown2: {
    flexDirection: 'column',
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,

  },

  iconBown: {
    alignItems: 'center',
    padding: 20,
    
  },
  boldText: {
    padding:20,
    alignItems: "center"
    
  },
  textNor: {
    padding: 10,
    fontSize:25,
     
  }

});
