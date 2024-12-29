import React from 'react';
import { Box, Text, VStack, Center, HStack, Image, Button, Pressable } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  TamilTestScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'TamilTestScreen'>;

const TamilScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Box flex={1} p={4}>
      {/* Test Information Section */}
      <Box alignSelf="center" mt={{ base: '5%', md: '3%' }}>
        <VStack space={4}>
          <HStack>
            <Text fontFamily="Poppins-Bold" fontSize={{ base: 'md', md: 'lg' }}>Test No :</Text>
            <Text fontFamily="Poppins-Regular" fontSize={{ base: 'md', md: 'lg' }} ml={1}>2</Text>
          </HStack>

          <HStack>
            <Text fontFamily="Poppins-Bold" fontSize={{ base: 'md', md: 'lg' }}>Subject :</Text>
            <Text fontFamily="Poppins-Regular" fontSize={{ base: 'md', md: 'lg' }} ml={1}>Tamil</Text>
          </HStack>

          <HStack>
            <Text  fontFamily="Poppins-Bold" fontSize={{ base: 'md', md: 'lg' }}>Topic :</Text>
            <Text  fontFamily="Poppins-Regular" fontSize={{ base: 'md', md: 'lg' }} ml={1}>எழுத்தியல் மற்றும் இலக்கணம்</Text>
          </HStack>
        </VStack>
      </Box>

      {/* Test Info Box */}
      <Box
        bg="#F8F8FC"
        width="90%"
        alignSelf="center"
        borderRadius="md"
        shadow={3}
        p={4}
        mt={{ base: '5%', md: '3%' }}
      >
        <HStack justifyContent="space-between">
          <HStack alignItems="center">
            <Box
              rounded="full"
              bg="#E6F2EA"
              size={12}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                source={require('../../../../Assets/akar-icons_question.png')}
                style={{ width: '50%', height: '50%' }}
                alt="vector"
              />
            </Box>
            <Text fontFamily="Poppins-Bold" fontSize={{ base: 'md', md: 'lg' }} ml={3}>10 Questions</Text>
          </HStack>

          <HStack alignItems="center">
            <Box
              rounded="full"
              bg="#E6F2EA"
              size={12}
              alignItems="center"
              justifyContent="center"
            >
              <Image
                source={require('../../../../Assets/time.png')}
                style={{ width: '50%', height: '50%' }}
                alt="vector"
              />
            </Box>
            <Text fontFamily="Poppins-Bold" fontSize={{ base: 'md', md: 'lg' }} ml={3}>20 mins</Text>
          </HStack>
        </HStack>
      </Box>

      {/* Instructions Section */}
      <Box alignSelf="center" width={{base:'90%'}} mt={{ base: '5%', md: '3%' }}>
        <VStack space={6}>
          <Text fontFamily="Poppins-Bold" fontSize={{ base: 'lg', md: 'xl' }}>Instructions</Text>
          <Text fontFamily="Poppins-Regular"  fontSize={{ base: 'md', md: 'lg' }}>
            Please read the instructions carefully before starting the test:
          </Text>
          <Text  fontFamily="Poppins-Regular" fontSize={{ base: 'md', md: 'lg' }}>
            Questions: The test includes a mix of question types, such as multiple-choice, true/false, fill-in-the-blanks, and match-the-following.
          </Text>

          <VStack space={4} >
            <Text letterSpacing={{base:1}} fontFamily="Poppins-Regular"  fontSize={{ base: 'md', md: 'lg' }}>1. Analyze each question thoroughly before answering.</Text>
            <Text letterSpacing={{base:1}}   fontFamily="Poppins-Regular"  fontSize={{ base: 'md', md: 'lg' }}>2. Points are awarded for correct answers, with no penalty for incorrect responses.</Text>
            <Text letterSpacing={{base:1}}   fontFamily="Poppins-Regular"  fontSize={{ base: 'md', md: 'lg' }}>3. Review your responses carefully before submission, as changes cannot be made afterward.</Text>
            <Text letterSpacing={{base:1}}   fontFamily="Poppins-Regular" fontSize={{ base: 'md', md: 'lg' }}>4. Switching tabs or accessing external help is not allowed and may lead to disqualification.</Text>
            <Text letterSpacing={{base:1}}   fontFamily="Poppins-Regular" fontSize={{ base: 'md', md: 'lg' }}>Good luck! Answer each question with focus and accuracy.</Text>
          </VStack>

          <Center>
            <Button
              width={{ base: '50%', md: '40%' }}
              onPress={() => navigation.navigate('TamilTestScreen')}
            >
              Start Test
            </Button>
          </Center>
        </VStack>
      </Box>
    </Box>
  );
};

export default TamilScreen;
