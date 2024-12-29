import React, { useState } from 'react';
import { Box, VStack, Text, HStack, Image, Progress, Center, Button, Modal, Divider, Pressable } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { PanGestureHandler, GestureHandlerRootView, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  TamilTestFourScreen: undefined;
  TamilTestThreeScreen:undefined;
  ResultBoxScreen:undefined;
  Homepage:undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'TamilTestFourScreen'>;

const TamilTestFourScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [items, setItems] = useState(["a) மதுரை", "b) உரையூர்", "c) வஞ்சி", "d) காஞ்சிபுரம்"]);
  const positions = items.map(() => useSharedValue(0)); // Shared values for each item's Y position
  const activeIndex = useSharedValue<number | null>(null); // Currently dragged item index


  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const handleLogout = () => {
      toggleModal();
      navigation.navigate('Homepage');
    };

  const handleGestureEvent = (event: PanGestureHandlerGestureEvent, index: number) => {
    if (activeIndex.value === index) {
      positions[index].value = event.nativeEvent.translationY;
    }
  };

  const handleGestureStart = (index: number) => {
    activeIndex.value = index; // Set the active item to the index being dragged
  };

  const handleGestureEnd = (index: number) => {
    const newIndex = Math.round(positions[index].value / 60); // Calculate new index based on Y offset
    const targetIndex = Math.max(0, Math.min(items.length - 1, index + newIndex)); // Clamp to valid indices

    runOnJS(() => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(index, 1); // Remove dragged item
      newItems.splice(targetIndex, 0, movedItem); // Insert at new position
      setItems(newItems);
    })();

    positions[index].value = withSpring(0); // Reset position
    activeIndex.value = null; // Reset active index
  };

  const animatedStyle = (index: number) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          { translateY: activeIndex.value === index ? positions[index].value : 0 },
        ],
        zIndex: activeIndex.value === index ? 1 : 0,
      };
    });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Box flex={1} safeArea bg="white">
        {/* Top Section */}
        <Box bg="#8AB6F7" minHeight="170px" p={6}>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontSize="25px" fontWeight="bold" color="white">
              Question 4
            </Text>
            <HStack alignItems="center" space={3}>
              <Box
                bg="rgba(230, 242, 234, 0.8)"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
                p={2}
              >
                <Image
                  source={require('../../../Assets/time.png')}
                  style={{ width: 24, height: 24 }}
                  alt="Timer Icon"
                />
              </Box>
              <Text bold fontSize="16px" color="white">
                10 mins
              </Text>
            </HStack>
          </HStack>
          <Box mt={3}>
            <Progress value={40} colorScheme="blue" />
            <HStack mt={2} justifyContent="flex-end">
              <Text fontSize="md" color="white">
                40% Completed
              </Text>
            </HStack>
          </Box>
        </Box>

        {/* Question and Options */}
        <Box flex={1} p={5}>
          <Center>
            <Text
              fontSize="20px"
              fontWeight={'bold'}
              color="black"
              textAlign="center"
              mb={6}
            >
                Match the given answers under the categories
                <Text> A - இராச்சியம் </Text>,
                <Text> B - தலைநகரம் </Text> by using the drag-and-drop feature
            </Text>

            <HStack space={5} justifyContent="center" mt={2}>
              {/* Column A */}
              <VStack space={4}>
                <Text fontWeight="bold" textAlign={'center'} fontSize="16px" mb={1} color="gray.700">
                  A
                </Text>
                {["1. பாண்டியர்", "2. சோழர்", "3. சேரர்", "4. பல்லவர்"].map((item, index) => (
                  <Box key={index} bg="#e3f2fd" p={5} w="40" borderRadius="md">
                    <Text>{item}</Text>
                  </Box>
                ))}
              </VStack>

              {/* Column B */}
              <VStack space={4}>
                <Text fontWeight="bold" textAlign={'center'} fontSize="16px" mb={1} color="gray.700">
                  B
                </Text>
                {items.map((item, index) => (
                  <PanGestureHandler
                    key={index}
                    onGestureEvent={(event) => handleGestureEvent(event, index)}
                    onBegan={() => handleGestureStart(index)}
                    onEnded={() => handleGestureEnd(index)}
                  >
                    <Animated.View
                      style={[
                        animatedStyle(index),
                        {
                          backgroundColor: "#e3f2fd",
                          padding: 16,
                          width: 160,
                          borderRadius: 8,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        },
                      ]}
                    >
                      <Text>{item}</Text>
                      <MaterialIcons name="drag-handle" size={24} color="black" />
                    </Animated.View>
                  </PanGestureHandler>
                ))}
              </VStack>
            </HStack>
          </Center>
        </Box>

        <Box p={5} mb={'20px'}>
                <HStack justifyContent={'space-evenly'}>
                    <Button
                        variant="outline"
                        colorScheme="cyan"
                        w={'30%'}
                        onPress={() => navigation.navigate('TamilTestThreeScreen')}
                    >
                        <Text>Prev</Text>
                    </Button>
                    <Button
                        w={'30%'}
                        bg={'#8AB6F7'}
                        onPress={() => navigation.navigate('ResultBoxScreen')}
                    >
                        <Text color={'white'}>Next</Text>
                    </Button>
                </HStack>
            </Box>

            <Box alignItems={'center'} mb={'60px'}>
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
    </GestureHandlerRootView>
  );
};

export default TamilTestFourScreen;
