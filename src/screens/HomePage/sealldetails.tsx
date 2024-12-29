import React from 'react';
import { Box, Text, Card, Pressable, VStack, Image, HStack, Icon, useBreakpointValue } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  SixthGradeScreen: undefined;
  SeventhGradeScreen: undefined;
  EighthGradeScreen: undefined;
  NinethGradeScreen: undefined;
  TenthGradeScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'SixthGradeScreen'>;

function SchoolDetails() {
  const navigation = useNavigation<NavigationProps>();
 
  return (
    <Box flex={1} bg="gray.100">

      {/* Header Section */}
      <Box bg={'#8AB6F7'} minHeight={{ base: '20%', md: '30%', lg: '40%' }} >
        <HStack alignItems="center"
          justifyContent="center"
          p={{ base: 10, md: 12, lg: 14 }}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            _pressed={{
              bg: "violet.300",
            }}
          >
            <Box
              bg={'white'}
              borderRadius="10px"
              p={{base:4,md:4,lg:4}}>
              <Icon as={MaterialIcons} name="arrow-back" size={6} color="#8AB6F7" />
            </Box>
          </Pressable>

          <Text
            flex={1}
            style={{
              color: 'white',
              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
              letterSpacing: 1,
            }}
            fontSize={{ base: 18, md: 20 }}
          >
            Explorer Classes
          </Text>
        </HStack>

      </Box>

      {/* Cards Section */}

      <Box flex={1} bg={'#F8F8FC'}>
      <VStack space={9} alignItems="center"  mt={{base:10,md:12,lg:14}}>
        <HStack  justifyContent="center" space={6}>
          <Pressable onPress={() => navigation.navigate('SixthGradeScreen')}>
          <Card
              p={{ base: 6, md: 5 }}
              borderRadius={{ base: 8, md: 10 }} 
              borderWidth={{ base: 1, md: 1.5 }} 
              borderColor="gray.300"
              minWidth={{ base: 150, md: 150 }} 
              bg="#E1F0FF"
              justifyContent="center"
              alignItems="center"
            >
              <Text
             style={{
              color: '#34495E',
              fontFamily: 'Poppins-Bold',
            }}
            fontSize={{base:16,md:18,lg:12}}>
                Class 6
              </Text>
              <Image
                source={require('../../../Assets/sixnumber.png')}
                alt="Class 6 Logo"
                width={{ base: '80px', sm: '75px', md: '90px', lg: '100px' }}
                height={{ base: '90px', sm: '90px', md: '110px', lg: '130px' }}
              mt={{base:4,md:6,lg:10}}
              />
            </Card>

          </Pressable>

          {/* Class 7 Card */}
          <Pressable onPress={() => navigation.navigate('SeventhGradeScreen')}>
          <Card
              p={{ base: 4, md: 5 }} 
              borderRadius={{ base: 8, md: 10 }} 
              bg="#D1E3F8"
              borderWidth={{ base: 1, md: 1.5 }} 
              borderColor="gray.300"

              minWidth={{ base: 150, md: 150 }}
              justifyContent="center"
              alignItems="center"
            >
              <Text
           style={{
            color: '#34495E',
            fontFamily: 'Poppins-Bold',
          }}
          fontSize={{base:16,md:18,lg:12}}>
              
                Class 7
              </Text>
              <Image
                source={require('../../../Assets/sevennumber.png')}
                alt="Class 7 Logo"
                width={{ base: '55px', sm: '75px', md: '90px', lg: '100px' }}
                height={{ base: '100px', sm: '90px', md: '110px', lg: '130px' }}
                mt={{base:5,md:6,lg:8}}
              />
            </Card>
          </Pressable>
        </HStack>

        {/* Other Class Cards */}
        <HStack flexWrap="wrap" justifyContent="center" space={5} mx={3}>
          <Pressable onPress={() => navigation.navigate('EighthGradeScreen')}>
          <Card
              borderRadius={{ base: 8, md: 10 }} 
              bg="#A6F0D0"
              borderWidth={{ base: 1, md: 1.5 }} 
              borderColor="gray.300"
              minWidth={{ base: 150, md: 150 }} 
              justifyContent="center"
              alignItems="center"
            >
              <Text
                style={{
                  color: '#34495E',
                  fontFamily: 'Poppins-Bold',
                }}
                fontSize={{base:16,md:18,lg:12}}  
              >
                Class 8
              </Text>
              <Image
                source={require('../../../Assets/eightnumber.png')}
                alt="Class 8 Logo"
                width={{ base: '45px', sm: '60px' }} 
               height={{ base: '99px', sm: '90px' }}
                mt={{base:2,md:6,lg:10}}
              />
            </Card>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('NinethGradeScreen')}>
          <Card
              borderRadius={{ base: 8, md: 10 }} 
              bg="#FFE4E1"
              borderWidth={{ base: 1, md: 1.5 }}
              borderColor="gray.300"
              minWidth={{ base: 150, md: 150 }} 
              justifyContent="center"
              alignItems="center"
            >
              <Text
               style={{
                color: '#34495E',
                fontFamily: 'Poppins-Bold',
              }}
              fontSize={{base:16,md:18,lg:12}}
              >
                Class 9
              </Text>
              <Image
                source={require('../../../Assets/ninenumber.png')}
                alt="Class 9 Logo"
                width={{ base: '70px', sm: '70px' }} 
                height={{ base: '99px', sm: '90px' }} 
                mt={{base:2,md:6,lg:10}}
              />
            </Card>
          </Pressable>
        </HStack>

        <Box alignSelf="flex-start" mx={{base:10,md:12,lg:16}} >
        <Pressable onPress={() => navigation.navigate('TenthGradeScreen')}>
          <Card
              borderRadius={{ base: 8, md: 10 }} 
              bg="#FFE5D1"
              borderWidth={{ base: 1, md: 1.5 }} 
              borderColor="gray.300"
              minHeight={{ base: 120, md: 150 }} 
              minWidth={{ base: 150, md: 150 }} 
              justifyContent="center"
              alignItems="center"
            >
             <Text
               style={{
                color: '#34495E',
                fontFamily: 'Poppins-Bold',
              }}
              fontSize={{base:16,md:18,lg:12}}
              >
                Class 10
              </Text>
              <Image
                source={require('../../../Assets/tennumber.png')}
                alt="Class 10 Logo"
                width={{ base: '110px', sm: '75px', md: '90px', lg: '100px' }}
                height={{ base: '90px', sm: '90px', md: '110px', lg: '130px' }}
                mt={{base:2,md:6,lg:10}}
              />
            </Card>
          </Pressable>
        </Box>
      </VStack>
      </Box>
    </Box>
  );
}

export default SchoolDetails;
