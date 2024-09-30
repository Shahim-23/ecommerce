import React, { useState } from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      console.log('Please enter both email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />

      <Button title="Login" onPress={handleLogin} />
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

export default LoginScreen;

