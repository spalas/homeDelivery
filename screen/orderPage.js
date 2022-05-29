import { ScrollView, ImageBackground ,Dimensions,View,StyleSheet,Text, Button } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




export default function OrderPage({navigation}) {
  return (
      <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} showsVerticalScrollIndicator={false}>
          <ImageBackground source={require('../assets/lettuse.png')} style={{height:Dimensions.get('window').height/2.5,}}>
          
          </ImageBackground>
          {/* bootton view */}
          <View style={style.bottomView}>
              <View style={{ padding: 25 }}>
                  <Text style={{ fontSize: 25, fontWeight: "bold", color: '#2D0C57' }}>Boston Lettuce</Text>
                  <View style={{flexDirection:"row", alignItems: "center"}}>
                  <Text style={{ fontSize: 22, fontWeight: "bold", color: '#2D0C57'  }}>1.10
                  </Text>
                  <Text style={{paddingLeft:10}}>$ / piecs</Text>
                  </View>
                  <Text style={{fontWeight:"bold", color:'#06BE77', paddingTop:10}}>~ 150 gr / piece</Text>

                  <Text style={{ color: '#2D0C57', fontWeight: 'bold', fontSize: 22, paddingTop: 20 , paddingBottom:10 }}>Spain</Text>
                  <Text style={{ fontSize: 17, lineHeight: 22 }} >Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>

                  <View style={{flexDirection:"row",   paddingTop:25,}}>
                      <View style={{ flex: 1, padding: 15, borderColor: "red",backgroundColor: "grey" , borderRadius: 50, alignItems: "center"}}>
                          
                              <Text>
                                   <Entypo  name="heart-outlined" size={24} color="white" />
                              </Text>
                             
                         
                          
                      </View>
                      
                  <View style={{ flex: 2,flexDirection:"row",  backgroundColor: "#0BCE83", borderRadius: 30 ,alignItems:"center",}}>
                  <Feather style={{padding:10}} name="shopping-cart" size={24} color="white" />
                  <Text style={{
                     fontSize: 20,  padding: 10, color: "white", 
                    }}>ADD TO CART</Text>
                  </View>
                  </View>
                  
            </View>
          </View>
          
    </ScrollView>
  )
}

const style = StyleSheet.create({
    

    bottomView: {
        flex: 1.5,
        bottom: 50,
        backgroundColor:'#ffffff',
        borderTopStartRadius: 40,
        borderTopEndRadius:40,

    }
})