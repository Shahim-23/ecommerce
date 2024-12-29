import React from 'react';
import { Box, Card, Center, HStack, Pressable, Progress, Text } from 'native-base';

const TenthGradeScreen = () => {
  return (
    <Box safeArea flex={1} bg="amber.100">

      {/* header section */}
      <Center >
        <Text fontSize="2xl" fontWeight="bold" color="red.800" mt={20}>
          Tenth Grade Quiz Test
        </Text>
      </Center>

      {/* content section */}

      <Box>
        <HStack mt={10} space={5} justifyContent={'center'}>

          {/* Tamil */}
          <Pressable>
            <Card p="5" borderRadius={10} bg="white" borderWidth={1} borderColor="gray.300">
               <Text bold fontSize="lg" color={'blue.700'}> Tamil </Text>
               <Text fontSize="md" color={'gray.600'} mt={2}> You Completed 0% </Text>
              <Progress value={0} size="md" colorScheme="blue" mt={3} bg="gray.200"/>
            </Card>
          </Pressable>

          {/* English */}
          <Pressable>
            <Card p="5" borderRadius={10} bg="white" borderWidth={1} borderColor="gray.300">
              <Text bold fontSize="lg" color={'blue.700'}> English </Text>
              <Text fontSize="md" color={'gray.600'} mt={2}> You Completed 0% </Text>
              <Progress value={0} size="md" colorScheme="blue" mt={3} bg="gray.200" />
            </Card>
          </Pressable>
        </HStack>
      </Box>

      <Box>
        <HStack space={5} mt={10} justifyContent={'center'}>

          {/* Maths */}
          <Pressable>
            <Card p="5" borderRadius={10} bg="white" borderWidth={1} borderColor="gray.300">
              <Text bold fontSize="lg" color={'blue.700'}> Maths </Text>
              <Text fontSize="md" color={'gray.600'} mt={2}> You Completed 0% </Text>
              <Progress value={0} size="md" colorScheme="blue" mt={3} bg="gray.200" />
            </Card>
          </Pressable>

        {/* science */}

          <Pressable>
            <Card p="5" borderRadius={10} bg="white" borderWidth={1} borderColor="gray.300">
              <Text bold fontSize="lg" color={'blue.700'}> Science</Text>
              <Text fontSize="md" color={'gray.600'} mt={2}> You Completed 0% </Text>
              <Progress value={0} size="md" colorScheme="blue" mt={3} bg="gray.200"/>
            </Card>
          </Pressable>
        </HStack>
      </Box>

      
      {/* social science */}
                  <Box>
                    <HStack mx={'30px'} mt={'40px'}>
                      <Pressable>
                        <Card borderRadius={10} bg="white" borderWidth={1} borderColor="gray.300">
                          <Text bold fontSize="lg" color={'blue.700'}> Social Science</Text>
                          <Text fontSize="md" color={'gray.600'} mt={2}> You Completed 0% </Text>
                          <Progress value={0} size="md"  colorScheme="blue" mt={3} bg="gray.200" />
                        </Card>
                    </Pressable>
                  </HStack>
                 </Box>

              </Box>
  );
};

export default TenthGradeScreen;
