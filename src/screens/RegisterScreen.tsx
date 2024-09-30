import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput,Button } from 'react-native';

const RegisterScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Page</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#888" 
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
       <TextInput
        placeholder="Email"
        placeholderTextColor="#888" 
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
       <TextInput
        placeholder="Password"
        placeholderTextColor="#888" 
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      
      <Button title="Register"/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color:'black',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default RegisterScreen;
