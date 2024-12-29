import { Box, HStack, VStack, Text, IconButton, Icon, CircularProgress, Pressable, Image, Card } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Homepage: undefined;
  ProfileScreen:undefined;
  SchoolDetails:undefined;
  NinethGradeScreen:undefined;
  SixthGradeScreen:undefined;
  SeventhGradeScreen:undefined;
  EighthGradeScreen:undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Homepage'>;

const Homepage = () => {


  const navigation = useNavigation<NavigationProps>();

  return (
    <Box>
   <Box bgColor={"#8AB6F6"} minHeight={{ base: 180, md: 200, lg: 220 }} borderBottomRadius={{ base: 40 }}>
  <HStack justifyContent="space-between" alignItems="center" px={{base:8,md:10,lg:12}} mt={{ base: 10, md: 16 }}>
    <VStack space={{base:2,md:4,lg:6}} flex={1}>
      <Text color="white" fontFamily="Poppins" textAlign="left">
        Welcome to Your Learning Journey!
      </Text>
      <Text color="white" fontFamily="Poppins-Bold" textAlign="left">
        Raj Kumar
      </Text>
    </VStack>

    <Box alignItems="flex-end">
      <IconButton
        icon={<Icon as={MaterialIcons} name="notifications" />}
        backgroundColor="white"
        size="md"
        _icon={{ color: "#8AB6F6", size: { base: "6", md: "lg" } }}
        _pressed={{ backgroundColor: "violet.300" }}
        shadow={5}
      />
    </Box>
  </HStack>
</Box>
      <Box   bg={"#FFECC8"}  width={{ base: "80%", md: "85%" }} mt={{ base: -30 }} mx="auto" borderRadius={{ base: "md", sm: 'md', md: 'lg' }} shadow={3}>

      <Box
          bg={"white"}
          width={{ base: "60%", sm: "70%", md: "60%" }}
          mx="auto"
          borderRadius={{ base: "md", sm: 'md', md: 'lg' }}
          py={{ base: 3, sm: 4, md: 5 }}
          mt={{ base: -5, sm: -6, md: -7 }}
          alignItems="center"
          justifyContent="center"
          shadow={2}
        >
          <Text style={{
            color: '#8AB6F7',
            fontFamily: 'Poppins-Medium',
          }}>
            Progress Summary
          </Text>
        </Box>
        
      <HStack justifyContent="space-between" alignItems="center" px={{ base: "2", md: "6" }} m={4}>
          <Box flex={1} flexDirection="row" alignItems="center" justifyContent="space-between">
            <Box flex={1} p={{ base: 4, sm: 5, md: 6 }} >
              <Text
                fontSize={{ base: 12, sm: 14, md: 16 }}
                color="#34495E"
                fontFamily="Poppins-Medium"
                textAlign="center"
              >
                Every expert starts as a beginner. Take your first test today and begin your journey to success!
              </Text>
            </Box>


             <Box flex={1} alignItems="center" justifyContent="center">
              <CircularProgress
                value={60}
                color="blue.500"
                size={{ base: 115, sm: 120, md: 130 }}
                trackColor="#F4E25B"
                borderRadius="full"
              >
                <VStack alignItems="center" px={2}>
                  <Text
                    color="#34495E"
                    fontFamily="Poppins-Bold"
                    fontSize={{ base: 12, sm: 14, md: 16 }} >
                    Total Test Completed
                  </Text>
                  <Text
                    color="#34495E"
                    fontFamily="Poppins-Bold"
                    fontSize={{ base: 16, sm: 14, md: 16 }} >
                    {0}
                  </Text>
                </VStack>
              </CircularProgress>
            </Box>
          </Box>
        </HStack>

      </Box>

      <Box justifyContent={'center'} alignItems={'center'} mt={{ base: 8, sm: 8, md: 9 }}>

        <HStack justifyContent="space-around" alignItems="center" width={{ base: '100%' }} >
          <Text
            color="#34495E"
            fontFamily="Poppins-Bold"
            fontSize={{ base: 16, sm: 14, md: 16 }}
            textAlign={'center'}
          >
            Explore Classes
          </Text>
          <Pressable onPress={() => navigation.navigate('SchoolDetails')}>
            <HStack alignItems="center" justifyContent="flex-end">
              <Text
                color="#34495E"
                fontFamily="Poppins-Bold"
                fontSize={{ base: 16, sm: 14, md: 16 }} >
                See All
              </Text>
              <Icon as={MaterialIcons} name="chevron-right" size="sm" color="#34495E" />
            </HStack>
          </Pressable>
        </HStack>
      </Box>

   

      <Box bg={'#F8F8FC'}>
          <VStack space={{base:8}} alignItems="center"  mt={{base:8,md:12,lg:14}}>
            <HStack  justifyContent="center" space={{base:6}}>
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
  
          </VStack>
          </Box>



    </Box>
  );
}

export default Homepage;
