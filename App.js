import * as React from 'react';
import Login from './container/Login';
import Home from './container/Home'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalProvider from './container/Reducer/GlobalProvider';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GlobalProvider>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown: false}}
        initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
</NavigationContainer>
 </GlobalProvider>
  );
}


