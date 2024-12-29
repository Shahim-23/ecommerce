import React from 'react';
import { Box, Card, HStack, Pressable, Progress, Text, VStack, Image, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  TamilPageScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'TamilPageScreen'>;

const SixthGradeScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Box safeArea flex={1}>
      {/* Header Section */}
      <Box bg={'#8AB6F7'} minHeight={{ base: '10%', md: '30%', lg: '40%' }} p={{ base: 12, md: 12, lg: 14 }}>
        <HStack alignItems="center" justifyContent="center">
          <Pressable
            onPress={() => navigation.goBack()}
            _pressed={{
              bg: 'violet.300',
            }}
          >
            <Box
              bg={'white'}
              borderRadius="10px"
              p={{base:4,md:4,lg:4}}
              justifyContent="center"
              alignItems="center"
            >
              <Icon as={MaterialIcons} name="arrow-back" size={6} color="#8AB6F7" />
            </Box>
          </Pressable>

          <Text flex={1} style={{
              color: '#FFF',
              fontFamily: 'Poppins-Bold',
              textAlign:'center',
              letterSpacing:1
            }}
            fontSize={{ base: 20, md: 22 }}
            >
            Class 6
          </Text>
        </HStack>
      </Box>

      {/* Content Section */}
      <VStack space={10}  mt={{base:10,md:12,lg:14}} >
        <HStack space={9} flexWrap="wrap" justifyContent="center">
          {/* Tamil */}
          <Pressable onPress={() => navigation.navigate('TamilPageScreen')}>
            <Card
              p={{ base: 5, md: 6 }} 
              borderRadius={{ base: 8, md: 10 }}
              borderWidth={{ base: 1, md: 1.5 }}
              bg="white"
              borderColor="gray.300"
              w={{ base: '110%', sm: '80%', md: '48%', lg: '30%' }}
            >
              <HStack space={4} alignItems="center">
                <Box
                  rounded="full"
                  bg="#E6F2EA"
                  size={{ base: '45px', md: '50px' }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    source={require('../../../Assets/english.png')}
                    alt="vector"
                    width={{ base: 5, md: 6 }} 
                    height={{ base: 5, md: 6 }}
                  />
                </Box>
                <Box
                  rounded="full"
                  bg="#8AB6F7"
                  size={{ base: '20px', md: '24px' }} // Responsive size
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={MaterialIcons} name="play-arrow" size={{ base: '12px', md: '15px' }} color="white" />
                </Box>
              </HStack>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Bold',
                }}
                fontSize={{ base: 16, md: 18, lg: 20 }} 
                mt={{ base: 2, md: 3, lg: 4 }} 
              >
                English
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                }}
                fontSize={{ base: 12, md: 18, lg: 20 }} 
                mt={{ base: 1, md: 3, lg: 4 }} 
              >
                You Completed 0%
              </Text>
              <Progress value={0} size="md" colorScheme="blue"  mt={{ base: 3, md: 3, lg: 4 }} bg="gray.200" />
            </Card>

          </Pressable>


          <Pressable onPress={() => navigation.navigate('TamilPageScreen')}>
          <Card
              p={{ base: 5, md: 6 }} 
              borderRadius={{ base: 8, md: 10 }}
              borderWidth={{ base: 1, md: 1.5 }}
              bg="white"
              borderColor="gray.300"
              w={{ base: '110%', sm: '80%', md: '48%', lg: '30%' }}
            >
              <HStack space={4} alignItems="center">
                <Box
                  rounded="full"
                  bg="#E6F2EA"
                  size={{ base: '45px', md: '50px' }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    source={require('../../../Assets/tamil.png')}
                    alt="vector"
                    width={{ base: 5, md: 6 }} 
                    height={{ base: 5, md: 6 }}
                  />
                </Box>
                <Box
                  rounded="full"
                  bg="#8AB6F7"
                  size={{ base: '20px', md: '24px' }} // Responsive size
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={MaterialIcons} name="play-arrow" size={{ base: '12px', md: '15px' }} color="white" />
                </Box>
              </HStack>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Bold',
                }}
                fontSize={{ base: 16, md: 18, lg: 20 }} 
                mt={{ base: 2, md: 3, lg: 4 }} 
              >
                Tamil
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                }}
                fontSize={{ base: 12, md: 18, lg: 20 }} 
                mt={{ base: 1, md: 3, lg: 4 }} 
              >
                You Completed 0%
              </Text>
              <Progress value={0} size="md" colorScheme="blue"  mt={{ base: 3, md: 3, lg: 4 }} bg="gray.200" />
            </Card>
          </Pressable>
        </HStack>
      </VStack>

      <VStack space={1} mt={10} px={{ base: 4, md: 10 }}>
        <HStack space={10}  justifyContent="center">
          <Pressable onPress={() => navigation.navigate('TamilPageScreen')}>
            <Card
              p={{ base: 5, md: 6 }} 
              borderRadius={{ base: 8, md: 10 }}
              borderWidth={{ base: 1, md: 1.5 }}
              bg="white"
              borderColor="gray.300"
              w={{ base: '110%', sm: '80%', md: '48%', lg: '30%' }}
            >
              <HStack space={4} alignItems="center">
                <Box
                  rounded="full"
                  bg="#E6F2EA"
                  size={{ base: '45px', md: '50px' }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    source={require('../../../Assets/Vector.png')}
                    alt="vector"
                    width={{ base: 5, md: 6 }} 
                    height={{ base: 5, md: 6 }}
                  />
                </Box>
                <Box
                  rounded="full"
                  bg="#8AB6F7"
                  size={{ base: '20px', md: '24px' }} // Responsive size
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={MaterialIcons} name="play-arrow" size={{ base: '12px', md: '15px' }} color="white" />
                </Box>
              </HStack>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Bold',
                }}
                fontSize={{ base: 16, md: 18, lg: 20 }} 
                mt={{ base: 2, md: 3, lg: 4 }} 
              >
                Maths
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                }}
                fontSize={{ base: 12, md: 18, lg: 20 }} 
                mt={{ base: 1, md: 3, lg: 4 }} 
              >
                You Completed 0%
              </Text>
              <Progress value={0} size="md" colorScheme="blue"  mt={{ base: 3, md: 3, lg: 4 }} bg="gray.200" />
            </Card>
          </Pressable>


          <Pressable onPress={() => navigation.navigate('TamilPageScreen')}>
          <Card
              p={{ base: 5, md: 6 }} 
              borderRadius={{ base: 8, md: 10 }}
              borderWidth={{ base: 1, md: 1.5 }}
              bg="white"
              borderColor="gray.300"
              w={{ base: '110%', sm: '80%', md: '48%', lg: '30%' }}
            >
              <HStack space={4} alignItems="center">
                <Box
                  rounded="full"
                  bg="#E6F2EA"
                  size={{ base: '45px', md: '50px' }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    source={require('../../../Assets/science.png')}
                    alt="vector"
                    width={{ base: 5, md: 6 }} 
                    height={{ base: 5, md: 6 }}
                  />
                </Box>
                <Box
                  rounded="full"
                  bg="#8AB6F7"
                  size={{ base: '20px', md: '24px' }} // Responsive size
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={MaterialIcons} name="play-arrow" size={{ base: '12px', md: '15px' }} color="white" />
                </Box>
              </HStack>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Bold',
                }}
                fontSize={{ base: 16, md: 18, lg: 20 }} 
                mt={{ base: 2, md: 3, lg: 4 }} 
              >
                Science
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                }}
                fontSize={{ base: 12, md: 18, lg: 20 }} 
                mt={{ base: 1, md: 3, lg: 4 }} 
              >
                You Completed 0%
              </Text>
              <Progress value={0} size="md" colorScheme="blue"  mt={{ base: 3, md: 3, lg: 4 }} bg="gray.200" />
            </Card>
          </Pressable>

          
        
        </HStack>
      </VStack>
      <VStack space={10} mt={10} px={{ base: 4, md: 10 }}>
        <HStack space={4} flexWrap="wrap" justifyContent="flex-start" mx={{base:6}}>
          {/* Tamil */}
          
          <Pressable onPress={() => navigation.navigate('TamilPageScreen')}
            _pressed={{
              opacity: 0.5,   // Reduces the opacity to 70%
              shadow: 6,      // Optional shadow for pressed effect
              bg: "gray.500", // Optional: change background color when pressed
            }}
            >
          <Card
              p={{ base: 5, md: 6 }} 
              borderRadius={{ base: 8, md: 10 }}
              borderWidth={{ base: 1, md: 1.5 }}
              bg="white"
              borderColor="gray.300"
              w={{ base: '110%', sm: '80%', md: '48%', lg: '30%' }}
            >
              <HStack space={4} alignItems="center">
                <Box
                  rounded="full"
                  bg="#E6F2EA"
                  size={{ base: '45px', md: '50px' }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    source={require('../../../Assets/social.png')}
                    alt="vector"
                    width={{ base: 5, md: 6 }} 
                    height={{ base: 5, md: 6 }}
                  />
                </Box>
                <Box
                  rounded="full"
                  bg="#8AB6F7"
                  size={{ base: '20px', md: '24px' }} // Responsive size
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={MaterialIcons} name="play-arrow" size={{ base: '12px', md: '15px' }} color="white" />
                </Box>
              </HStack>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Bold',
                }}
                fontSize={{ base: 16, md: 18, lg: 20 }} 
                mt={{ base: 2, md: 3, lg: 4 }} 
              >
                Social Science
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                }}
                fontSize={{ base: 12, md: 18, lg: 20 }} 
                mt={{ base: 1, md: 3, lg: 4 }} 
              >
                You Completed 0%
              </Text>
              <Progress value={0} size="md" colorScheme="blue"  mt={{ base: 3, md: 3, lg: 4 }} bg="gray.200" />
            </Card>
          </Pressable>
        </HStack>
      </VStack>
      
      
    </Box>
  );
};

export default SixthGradeScreen;
