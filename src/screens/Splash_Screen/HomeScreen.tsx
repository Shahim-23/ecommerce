import React, { useState } from 'react';
import { Box, Button, Image, Text, VStack } from "native-base";
import { authorize, AuthorizeResult } from 'react-native-app-auth';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Dimensions, Alert } from 'react-native'; // Import Alert from react-native
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  HomeScreen: undefined;
  Homepage: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const { width, height } = Dimensions.get('window');

const config = {
  issuer: 'https://identity.quickans.ai/realms/test_Quizzer.ai',
  clientId: 'Quizzer',
  clientSecret: 'qf8MgXTvfm9RJRibio9bwkbeFuGJUDCj',
  redirectUrl: 'com.quizzerrai://oauth2redirect',
  scopes: ['openid', 'profile', 'email'] as string[], 
  serviceConfiguration: {
    authorizationEndpoint: 'https://identity.quickans.ai/realms/test_Quizzer.ai/protocol/openid-connect/auth',
    tokenEndpoint: 'https://identity.quickans.ai/realms/test_Quizzer.ai/protocol/openid-connect/token',
    revocationEndpoint: 'https://identity.quickans.ai/realms/test_Quizzer.ai/protocol/openid-connect/revoke',
  },
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [authState, setAuthState] = useState<AuthorizeResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await authorize(config);
      setAuthState(result);
      console.log('Auth Success:', result);

      await AsyncStorage.setItem('accessToken', result.accessToken);
      navigation.navigate('Homepage'); 
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Login Failed', 'Please try again.'); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box flex={1} bg="#1e1e1e">
      <Image
        source={require('../../../Assets/photo-1532708059644-5590ed51ce4c-_1_.png')}
        alt="Quizzer.Ai Logo"
        width={width}
        height={height * 0.6}
        resizeMode="cover"
      />
      <Box flex={1} justifyContent="center" alignItems="center" bg="#1e1e1e">
        <VStack space={3} alignItems="center" width="90%">
          <Text fontSize={width * 0.06} fontWeight="bold" color="#fff"> 
            Welcome to Quizzer.Ai
          </Text>
          <Text fontSize={width * 0.04} color="#fff">
            Let's Get Started
          </Text>
          <Button
            width="50%"
            mt={5}
            bg="#ffffff"
            _text={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: width * 0.045,
            }}
            onPress={handleLogin}
            isLoading={loading}
          >
            Continue
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default HomeScreen;