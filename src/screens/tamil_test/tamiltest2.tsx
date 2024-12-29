import React, { useState } from 'react';
import { Box, VStack, Text, Button, HStack, Image, Progress, Pressable, Modal, Divider } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    TamilTestScreen: undefined;
    TamilTestTwoScreen: undefined;
    TamilTestThreeScreen: undefined;
    Homepage:undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'TamilTestTwoScreen'>;

const TamilTestTwoScreen = () => {

    const navigation = useNavigation<NavigationProps>();
    const [selectedOption, setSelectedOption] = useState<string | null>(null); 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => setIsModalVisible(!isModalVisible);

    const handleLogout = () => {
        toggleModal();
        navigation.navigate('Homepage');
      };
    // State to track selected option

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option); // Update selected option
    };

    return (
        <Box flex={1} safeArea bg="white">
            {/* Top Section */}
            <Box bg={'#8AB6F7'} minHeight={'170px'} p={'40px'}>
                <HStack alignItems="center" justifyContent="space-between">
                    {/* Centered Question Text */}
                    <Text fontSize="25px" fontWeight="bold" color="white" flex={1}>
                        Question 2
                    </Text>

                    {/* Timer Section */}
                    <HStack alignItems="center" space={2}>
                        <Box
                            bg="rgba(230, 242, 234, 0.8)"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="full"
                        >
                            <Image
                                source={require('../../../Assets/time.png')}
                                style={{ width: 24, height: 24 }}
                                alt="timer icon"
                            />
                        </Box>

                        <Text bold fontSize="16px" color="white">
                            18 mins
                        </Text>
                    </HStack>
                </HStack>

                <Box mt={3}>
                    <Progress colorScheme="blue" />
                    {/* Completion Text */}
                    <HStack mt={4} justifyContent="flex-end">
                        <Text fontSize="md" color="white">
                            10% Completed
                        </Text>
                    </HStack>
                </Box>
            </Box>
            <Box marginTop={'16'} alignItems="center" justifyContent="center">
                {/* Main Container */}
                <VStack space={4} width="80%" alignItems="center">
                    {/* Top Question Text */}
                    <Text
                        textAlign="center"
                        fontSize={'lg'}
                        fontWeight={'bold'}
                        w={'100%'} // Full width for proper centering
                        marginBottom={'10'} // Spacing between text and options
                    >
                        தமிழ் ஒரு செம்மொழி ஆகும்
                    </Text>

                    {/* Options */}
                    <VStack space={4} width="100%" alignItems="center">
                        {['சரி', 'தவறு'].map((option, index) => (
                            <Pressable
                                key={index}
                                onPress={() => handleOptionSelect(option)}
                                bg={selectedOption === option ? '#B2DFFC' : '#E7F1FF'}
                                width="100%"
                                height="50px"
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="10px"
                            >
                                <Text
                                    fontSize="16px"
                                    color={selectedOption === option ? 'white' : '#6F42C1'}
                                    bold
                                >
                                    {option}
                                </Text>
                            </Pressable>
                        ))}
                    </VStack>
                </VStack>
            </Box>

            <Box p={5}>
                <HStack mt={5} justifyContent={'space-around'}>
                    <Button
                        variant="outline"
                        colorScheme="cyan"
                        w={'30%'}
                        onPress={() => navigation.navigate('TamilTestScreen')}
                    >
                        <Text>Prev</Text>
                    </Button>
                    <Button
                        w={'30%'}
                        bg={'#8AB6F7'}
                        onPress={() => navigation.navigate('TamilTestThreeScreen')}
                    >
                        <Text color={'white'}>Next</Text>
                    </Button>
                </HStack>
            </Box>

            <Box alignItems={'center'} mt={10}>
                <Pressable  onPress={toggleModal}>
                    <Text color={'red.500'} fontSize={'22px'}>
                        Exit Test
                    </Text>
                </Pressable>
                <Divider w={'19%'} height={1} bg="red.500" /> {/* Adds a line below the 'Exit' text */}
            </Box>

            <Modal isOpen={isModalVisible} onClose={toggleModal}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Exit Test</Modal.Header>
          <Modal.Body >
            <Text bold textAlign={'center'} fontSize={'22px'}>Are you sure you want to end the test?</Text>
            <Text textAlign={'center'} mt={5}>Once you submit the test, you cannot make further changes to your answers. </Text>
          </Modal.Body>
          <Modal.Footer justifyContent={'space-around'}>
            <Button variant="ghost" colorScheme="blue" onPress={toggleModal}>
              Go Back
            </Button>
            <Button colorScheme="danger" onPress={handleLogout}>
              End Test
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      
        </Box>
    );
};

export default TamilTestTwoScreen;
