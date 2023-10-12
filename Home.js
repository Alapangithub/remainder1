import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableHighlight} from 'react-native';
export default function Home({route}){
    const { user} = route.params;
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    return(
        <View style={{flex:1,alignContent:'center',justifyContent:'center',margin:20}}>
<Text>Welcome to the Remainder Application :{user}</Text>
<Text style={{fontSize: 20,
}}> Today is {formattedDate}</Text>
<Text>set Remainder</Text>
<Text>Modify Remainder</Text>
<Text>Disable Remainder</Text>
<Text>Delet Remainder</Text>
<Text>Enable Remainder</Text>
<Text>View your Remainder</Text>
<View style={{ backgroundColor: '#4B55E1', paddingHorizontal: 20, paddingBottom: 20, borderRadius: 7,marginTop:20 }}>
                <TouchableHighlight>
                  <Text style={{ marginTop: 20, color: '#fff', fontSize: 20, textAlign:'center'}}>Cancel</Text>
                </TouchableHighlight>
              </View>
        </View>
    )
}