import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableHighlight, ImageBackground, Button } from 'react-native';
import PropTypes from 'prop-types';
export default function Login({ navigation }) {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [sucess, setSucess] = useState(false);

  useEffect(() => {
    userRef.current?.focus()
  }, [])
  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user, pwd)
    setUser('');
    setPwd('');
    setSucess(true)
    if (user && pwd) {
      // Successful login, navigate to Home screen with user parameter
      navigation.navigate("Home", {
        user,
      });
      
    } else {
      setErrMsg('Login failed. Please fill in both username and password.');
    }


  }
  return (
    <View style={styles.container}>
      {sucess ? (
        <View style={{ flex: 1,justifyContent:'center'}}>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Home",{
              user
            })
          }}>
            <Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}> click go to home</Text>
          </TouchableOpacity>
        </View>) : (
        <View style={styles.container}>
          <View style={styles.formContainerStyle} >
            <Text ref={errRef} style={errMsg ? "errmsg" : "offscreen"}>{errMsg}</Text>
            <View style={{ flex: 1, marginTop: 10 }}>
              <TextInput
                placeholder='Enter your Username'
                type="text"
                id="Username"
                ref={userRef}
                autoComplete="off"
                onChangeText={(user) => setUser(user)}

                required
                style={styles.textInputStyle}
              />
              <TextInput placeholder='Enter your password'
                type="password"
                id="password"
                ref={userRef}
                autoComplete="off"
                onChangeText={(pwd) => setPwd(pwd)}

                required
                style={styles.textInputStyle}
              />

            </View>

          {pwd? <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
              <View style={{ backgroundColor: '#4B55E1', paddingHorizontal: 30, paddingBottom: 20, borderRadius: 7 }}>
                <TouchableHighlight>
                  <Text style={{ marginTop: 20, color: '#fff', fontSize: 20, }}>Cancel</Text>
                </TouchableHighlight>
              </View>
              <View style={{ backgroundColor: '#4B55E1', paddingHorizontal: 30, paddingBottom: 20, borderRadius: 7 }}>
                <TouchableHighlight onPressIn={handleSubmit}>
                  <Text style={{ marginTop: 20, color: '#fff', fontSize: 20, textAlign: 'center' }}>Log in</Text>
                </TouchableHighlight>
              </View>
            </View> :<View>
              <Text>Login failed Retry</Text>
              </View>}
          </View>
        </View>
      )}
    </View>
  )
}
Login.propTypes = {
  // Use ViewPropTypes for prop validation
  style: PropTypes.func, // Example: validating 'style' prop
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainerStyle: {
    height: 400,
    width: 340,
    margin: 10,

  },
  textInputStyle: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20
  },
  errorLabelContainerStyle: {
    height: 100,
    width: 200,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignContent: 'center'
  },
  errorTextStyle: {
    color: "red",
    fontSize: 25,
    fontWeight: 'bold',
    padding: 2,
    textAlign: 'center'
  },
  signInButtonContainerStyle: {
    height: 100,
    width: 340,
    margin: 10,
    borderRadius: 10,
  },
  signInButtonStyle: {
    height: 100,
    width: 340,
    margin: 10,
    borderRadius: 10,

  },
  signInButtonTextStyle: {
    color: "red",
    fontSize: 25,
    fontWeight: 'bold',
    padding: 2,

  }
});
