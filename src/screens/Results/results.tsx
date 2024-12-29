import React from 'react';
import { Box, Text, IconButton, Icon, HStack, Image, Divider, Button } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    ResultBoxScreen: undefined;
    Homepage:undefined;
  };
  
  type NavigationProps = StackNavigationProp<RootStackParamList, 'ResultBoxScreen'>;


const ResultBoxScreen = () => {

    const navigation = useNavigation<NavigationProps>();

    return (
        <Box flex={1} bg="#A594F9">
            <Box>
                <HStack justifyContent="space-between" alignItems="center" width="100%">
                    <Box flex={1}   />
                    <IconButton
                        icon={<Icon as={MaterialIcons} name="close" />}
                        backgroundColor="#A594F9"
                        size="md"
                        _icon={{
                            color: "white",
                            size: {
                                base: "6",
                                md: "lg",
                            },
                        }}
                        _pressed={{
                            backgroundColor: "violet.300",
                        }}
                        shadow={5}
                        mr={5} 
                        mt={5}
                    />
                </HStack>
                <Box alignItems="center" >
                    <Text fontSize="3xl" fontWeight="bold" mt={1}  color="white">
                          Final  Result
                    </Text>
                </Box>
            </Box>

            <Box bg="white" w="90%" maxW="500px" rounded="lg" shadow={2} p={4} mx={5} mt={20}>
                <Box>
                    <Box alignItems={'center'} mt={2} position={'absolute'} bottom={'200px'} left={'110px'}>
                        <Image
                            source={require('../../../Assets/wincup.png')}
                            alt='sixnumber'
                            width={{ base: '100px', sm: '75px' }} // Image size adjusts for smaller screens
                            height={{ base: '120px', sm: '80px' }} // Image size adjusts for smaller screens
                            mt={2}
                            mb={2}
                        />
                    </Box>

                    
                        


                    <Box alignItems={'center'} mt={'80px'}>
                        <Text bold fontSize="2xl" mb={2} color={'black'}> {/* Increased font size and added margin */}
                            Congratulations !
                        </Text>
                        <Text fontSize="md" color={'black'}> {/* Smaller font for second line */}
                            You've Passed Out
                        </Text>
                    </Box>

                    <Box alignItems={'center'} mt={2}>
                        <Image
                            source={require('../../../Assets/soccer.png')}
                            alt='sixnumber'
                            width={{ base: '100px', sm: '75px' }} // Image size adjusts for smaller screens
                            height={{ base: '110px', sm: '80px' }} // Image size adjusts for smaller screens
                            mt={2}
                            mb={2}
                        />
                    </Box>

                    <Divider bg="gray.400" height={1} mx={0} />
                </Box>

                <HStack space={7} justifyContent="center" mt={5}>
                    <Box
                        bg="#14C9BA"
                        width={70}
                        height={70}
                        rounded="md"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text fontSize="lg" fontWeight="bold" color="white">
                            10
                        </Text>
                        <Text fontSize="xs" color="white">
                            Questions
                        </Text>
                    </Box>
                    <Box
                        bg="#78CA64"
                        width={70}
                        height={70}
                        rounded="md"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text fontSize="lg" fontWeight="bold" color="white">
                            08
                        </Text>
                        <Text fontSize="xs" color="white">
                            Correct
                        </Text>
                    </Box>
                    <Box
                        bg="#F06969"
                        width={70}
                        height={70}
                        rounded="md"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text fontSize="lg" fontWeight="bold" color="white">
                            01
                        </Text>
                        <Text fontSize="xs" color="white">
                            Incorrect
                        </Text>
                    </Box>
                </HStack>

                <Box alignItems={'center'} mt={5}>
                    <Box
                        bg="#F7983E"
                        width={70}
                        height={70}
                        rounded="md"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text fontSize="lg" fontWeight="bold" color="white">
                            01
                        </Text>
                        <Text fontSize="xs" color="white">
                            Skipped
                        </Text>
                    </Box>
                </Box>


                <Box alignItems={'center'} mt={10}>
                    <Button w={'50%'}  onPress={() => navigation.navigate('Homepage')}>
                        Continue Next Text
                    </Button>
                </Box>
            </Box>
        </Box>

    );
};

export default ResultBoxScreen;
