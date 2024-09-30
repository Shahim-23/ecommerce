// import { Button, StyleSheet, Text, View, Alert } from 'react-native';
// import React, { useState } from 'react';
// import { authorize, AuthorizeResult } from 'react-native-app-auth';


// const config = {
//   issuer: 'http://192.168.1.87:8080/realms/Quizzer.ai',
//   clientId: 'Quizzer',
//   clientSecret: 's17Q7hIZH0xfja8xW9lC2PeRsQG6uFaO',
//   redirectUrl: 'com.quizzerai:/oauthredirect',  
//   scopes: ['openid', 'profile', 'email'],
//   serviceConfiguration: {
//     authorizationEndpoint: 'http://192.168.1.87:8080/realms/Quizzer.ai/protocol/openid-connect/auth',
//     tokenEndpoint: 'http://192.168.1.87:8080/realms/Quizzer.ai/protocol/openid-connect/token',
//     revocationEndpoint: 'http://192.168.1.87:8080/realms/Quizzer.ai/protocol/openid-connect/revoke',
//   },
// };


//   const App = () => {
//     const [authResult, setAuthResult] = useState<AuthorizeResult | null>(null); 
  
//     const handleLogin = async () => {
//       try {
//         const result = await authorize(config);
//         setAuthResult(result);
//         Alert.alert('Login Successful', `Access token: ${result.accessToken}`);
//       } catch (error) {
//         const err = error as Error;
//         Alert.alert('Login Failed', err.message);
//       }
//     };
  

//     return (
//       <View style={styles.container}>
//         <Text>{authResult ? `Welcome!` : `Please log in`}</Text>
//         <View style={styles.buttonContainer}>
//           <Button title="LOGIN" onPress={handleLogin} />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button title="REGISTER" onPress={() => Alert.alert('Registration clicked')} />
//         </View>
//       </View>
//     );
//   };

//   export default App;

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#ffffff',
//     },
//     buttonContainer: {
//       marginVertical: 10,
//     },
//   });


import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { authorize, AuthorizeResult, revoke } from 'react-native-app-auth';

const config = {
    issuer: 'http://192.168.1.87:8080/realms/Quizzer.ai',
    clientId: 'Quizzer',
    clientSecret: 's17Q7hIZH0xfja8xW9lC2PeRsQG6uFaO',
    redirectUrl: 'com.quizzerai:/oauthredirect',  
    scopes: ['openid', 'profile', 'email'],
    serviceConfiguration: {
      authorizationEndpoint: 'http://192.168.1.87:8080/realms/Quizzer.ai/protocol/openid-connect/auth',
      tokenEndpoint: 'http://192.168.1.87:8080/realms/Quizzer.ai/protocol/openid-connect/token',
      revocationEndpoint: 'http://192.168.1.87:8080/realms/Quizzer.ai/protocol/openid-connect/revoke',
    },
  };

const App = () => {
    const [authResult, setAuthResult] = useState<AuthorizeResult | null>(null);
    const [loading, setLoading] = useState(false); 

    const handleLogin = async () => {
        setLoading(true);
        try {
            const result = await authorize(config);
            setAuthResult(result);
            Alert.alert('Login Successful', `Access token: ${result.accessToken}`);
        } catch (error) {
            const err = error as Error;
            Alert.alert('Login Failed', err.message || 'An unknown error occurred');
        } finally {
            setLoading(false); 
        }
    };

    const handleLogout = async () => {
        if (authResult) {
            setLoading(true); 
            try {
                await revoke(config, {
                    tokenToRevoke: authResult.accessToken,
                    sendClientId: true,
                });
                setAuthResult(null);
                Alert.alert('Logout Successful');
            } catch (error) {
                const e = error as Error;
                Alert.alert('Logout Failed', e.message || 'An unknown error occurred');
            } finally {
                setLoading(false); 
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text>{authResult ? `Welcome!` : `Please log in`}</Text>
            <View style={styles.buttonContainer}>
                <Button title="LOGIN" onPress={handleLogin} disabled={loading} />
            </View>
            {authResult && (
                <View style={styles.buttonContainer}>
                    <Button title="LOGOUT" onPress={handleLogout} disabled={loading} />
                </View>
            )}
            <View style={styles.buttonContainer}>
                <Button title="REGISTER" onPress={() => Alert.alert('Registration clicked')} disabled={loading} />
            </View>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    buttonContainer: {
        marginVertical: 10,
    },
});
