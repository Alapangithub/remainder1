// LogoutScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const LogoutScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Perform the logout action here, such as clearing user data, tokens, or credentials.
    // This will depend on your authentication and state management system.

    // After logging out, navigate the user back to the login screen or another appropriate screen.
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Are you sure you want to log out?</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default LogoutScreen;
