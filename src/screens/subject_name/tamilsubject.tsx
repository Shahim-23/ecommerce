import React from 'react';
import { Box, Text, Divider, HStack, IconButton, Icon, Pressable, VStack, Checkbox, Button, useBreakpointValue } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  TamilScreen: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'TamilScreen'>;

const TamilPageScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const boxPadding = useBreakpointValue({ base: 12, md: 12, lg: 14 });
  const titleFontSize = useBreakpointValue({ base: 18, md: 20, lg: 24 });
  const itemFontSize = useBreakpointValue({ base: 20, md: 18, lg: 20 });
  const textFontSize = useBreakpointValue({ base: 12, md: 15, lg: 18 });
  const buttonWidth = useBreakpointValue({ base: '60%', md: '50%', lg: '40%' });

  return (
    <Box>
      <Box bg={'#8AB6F7'} minHeight={{ base: '10%', md: '30%', lg: '40%' }} 
           p={boxPadding}>
        <HStack alignItems="center" justifyContent="center">
          <Pressable onPress={() => navigation.goBack()}>
            <Box
              bg={'white'}
              borderRadius="10px"
              p={3}
              justifyContent="center"
              alignItems="center"
            >
              <Icon
                as={MaterialIcons}
                name="arrow-back"
                size={6}
                color="#8AB6F7"
              />
            </Box>
          </Pressable>
          <Text
            flex={1}
            textAlign="center"
            fontSize={titleFontSize}
            fontFamily="Poppins-Bold"
            color={'white'}
          >
            Tamil
          </Text>
        </HStack>
      </Box>

      <Box>
        <Text mt={{ base: 5, md: 20 }} fontSize={{ base: 20, md: 20 }} fontFamily="Poppins-Bold" alignSelf={'center'}>
          Scheduled
        </Text>
        <Divider height={'0.5'} w={{ base: 20, md: 20 }} mx={8} mt={'0.5'} bg={'black'}alignSelf={'center'} />

        <VStack space={6} mt={{base:8}}>
          {[ 
            { title: "எழுத்தியல் மற்றும் இலக்கணம்", questions: 10, time: 20 },
            { title: "தொன்மை மற்றும் நவீனம்", questions: 10, time: 20 },
            { title: "மெய்யெழுத்துகள், உயிரெழுத்துகள்", questions: 20, time: 40 },
            { title: "எழுத்து பிழை திருத்தம்", questions: 30, time: 60 }
          ].map((item, index) => (
            <Pressable key={index}>
              <Box p="5px" bg="#D3CCE3" rounded="lg" w={{base:'90%'}} mx={6}>
                <VStack space={3}>
                  <HStack alignItems="center" justifyContent="space-between" px={4} py={2}>
                    <Box bg="#88B4F4" rounded="full" p={2}>
                      <Icon
                        as={MaterialIcons}
                        name="play-arrow"
                        size={6}
                        color="white"
                      />
                    </Box>

                    <Text color="#34495E" bold fontSize={itemFontSize} mx={5} flex={1}>
                      {item.title}
                    </Text>

                    <Checkbox value="checkbox" colorScheme="blue" />
                  </HStack>

                  <HStack justifyContent={'space-evenly'} px={4}>
                    <Text fontSize={textFontSize} color="#34495E" mx={9}>
                      {item.questions} Questions
                    </Text>
                    <Text fontSize={textFontSize} color="#34495E">
                      {item.time} mins
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </Pressable>
          ))}
        </VStack>
      </Box>

      <Box alignItems={"center"} mt={7}>
        <Button
          bg="#88B4F4"
          w={buttonWidth}
          onPress={() => navigation.navigate("TamilScreen")}
        >
          <Text color={"white"}>Take A Test</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default TamilPageScreen;
