import React from 'react';
import { Box, Center, Text, VStack, Button, HStack, IconButton, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Svg, { Path, } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    ProfileScreen: undefined; 
    Homepage: undefined; 
  };


type NavigationProps = StackNavigationProp<RootStackParamList, 'ProfileScreen'>;

const ProfileScreen = () => {

    const navigation = useNavigation<NavigationProps>();
    return (

        <Box>
            <Box bg="#8AB6F6" minH="100px" p={8} borderRadius="md">
                <HStack alignItems="center" justifyContent="space-between">
                    {/* Left Side Content */}
                    <Box >
                        <Text
                            style={{
                                color: 'white',
                                fontFamily: 'Poppins-Bold', // Ensure Poppins font is properly linked to your project
                                fontSize: 20, // 1.25rem ≈ 20px
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: 24, // Adjusted to suit `line-height: normal`
                                letterSpacing: 0.8, // 0.05rem ≈ 0.8px
                                textTransform: 'capitalize',
                            }}
                        >
                            Raj Kumar
                        </Text>
                        <Text
                            style={{
                                color: '#FFF', // Matches color: #FFF
                                fontFamily: 'Poppins-Medium',
                                fontSize: 14, // 0.875rem ≈ 14px
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: 18, // Adjusted for `line-height: normal`
                                textTransform: 'capitalize',
                                marginTop: '3%',
                            }}
                        >
                            Roll No: CS6B23
                        </Text>
                    </Box>

                    {/* Right Side Icon */}
                    <Box>
                        <IconButton
                            icon={<Icon as={MaterialIcons} name="edit" />}
                            backgroundColor="white"
                            size="md"
                            _icon={{
                                color: "#8AB6F6",
                                size: {
                                    base: "6",
                                    md: "lg",
                                },
                            }}
                            _pressed={{
                                backgroundColor: "violet.300",
                            }}
                            shadow={5}
                        />
                    </Box>
                </HStack>
                <Box>
                    <HStack space={3} justifyContent="center" alignItems="center" mt={'15%'}>
                        {/* First Box */}
                        <Box
                            bg={'white'}
                            rounded={'lg'}
                            style={{
                                width: 100,
                                height: 100,
                                padding: 15,
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            {/* SVG Icon Above Text */}
                            <Svg width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <Path
                                    d="M15.5 24.5562C13.8113 23.3675 11.8563 22.61 9.80625 22.355C8.35231 22.0596 6.87102 21.92 5.3875 21.9387C5.19768 21.9404 5.0094 21.9044 4.83355 21.8329C4.6577 21.7614 4.49775 21.6558 4.36294 21.5221C4.22813 21.3885 4.12113 21.2294 4.04811 21.0542C3.97509 20.879 3.93749 20.691 3.9375 20.5012L3.96375 6.88496C3.96295 6.51961 4.10129 6.16767 4.35066 5.90066C4.60002 5.63365 4.9417 5.4716 5.30625 5.44746C6.81643 5.41744 8.32537 5.5524 9.80625 5.84996C11.854 6.11415 13.8075 6.86981 15.5 8.05246M15.5 24.5562V8.05246M15.5 24.5562C17.1887 23.3675 19.1438 22.61 21.1938 22.355C22.6477 22.0596 24.129 21.92 25.6125 21.9387C25.8023 21.9404 25.9906 21.9044 26.1664 21.8329C26.3423 21.7614 26.5022 21.6558 26.6371 21.5221C26.7719 21.3885 26.8789 21.2294 26.9519 21.0542C27.0249 20.879 27.0625 20.691 27.0625 20.5012L27.035 6.88496C27.0358 6.51981 26.8977 6.16804 26.6485 5.90106C26.3994 5.63408 26.0581 5.47191 25.6938 5.44746C24.1836 5.41744 22.6746 5.5524 21.1938 5.84996C19.146 6.11415 17.1925 6.86981 15.5 8.05246"
                                    stroke="#34495E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>

                            {/* Text */}
                            <Text
                                style={{
                                    color: '#34495E',
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 12,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                    textAlign: 'center',
                                }}
                            >
                                Study Timetable
                            </Text>
                        </Box>

                        {/* Second Box */}
                        <Box
                            bg={'white'}
                            rounded={'lg'}
                            style={{
                                width: 100,
                                height: 100,
                                padding: 15,
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}
                        >
                            <Svg width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <Path
                                    d="M17.84 13.0562L22.5 2.5M11.645 13.29L6.25 2.5M15.9525 12.56L11.0438 2.5M17.95 2.5L16.65 5.625M7.5 20C7.5 21.9891 8.29018 23.8968 9.6967 25.3033C11.1032 26.7098 13.0109 27.5 15 27.5C16.9891 27.5 18.8968 26.7098 20.3033 25.3033C21.7098 23.8968 22.5 21.9891 22.5 20C22.5 18.0109 21.7098 16.1032 20.3033 14.6967C18.8968 13.2902 16.9891 12.5 15 12.5C13.0109 12.5 11.1032 13.2902 9.6967 14.6967C8.29018 16.1032 7.5 18.0109 7.5 20Z"
                                    stroke="#34495E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>

                            <Text
                                style={{
                                    color: '#34495E',
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 12,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                    textAlign: 'center',
                                }}
                            >
                                Badges
                            </Text>
                        </Box>

                        {/* Third Box */}
                        <Box
                            bg={'white'}
                            rounded={'lg'}
                            style={{
                                width: 100,
                                height: 100,
                                padding: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Svg width="31" height="30" viewBox="0 0 31 30" fill="none">
                                <Path
                                    id="Vector"
                                    d="M28.125 24.375V26.25H2.8125L1.875 25.3125V0H3.75V24.375H28.125Z"
                                    fill="#34495E"
                                />
                                <Path
                                    id="Vector_2"
                                    d="M24.3752 6.0133L14.7264 15.6639H13.3989L10.3127 12.5758L3.47643 19.4139L2.14893 18.0864L9.64893 10.5864H10.9764L14.0627 13.6746L23.7114 4.02393H25.0371L28.7871 7.77393L27.4614 9.10143L24.3752 6.0133Z"
                                    fill="#34495E"
                                />
                            </Svg>

                            <Text
                                style={{
                                    color: '#34495E',
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 12,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                    textAlign: 'center',
                                }}
                            >
                                Performance Overview
                            </Text>
                        </Box>
                    </HStack>
                </Box>

            </Box>

            <Box>
                <VStack space={6} mt={'8'}>
                    <HStack justifyContent="space-around">
                        <HStack alignItems="center" space={3}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <Path
                                    id="Vector"
                                    d="M2.25 12H6.75L9.75 3.75L14.25 20.25L17.25 12H21.75"
                                    stroke="#34495E"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                            <Text
                                style={{
                                    color: '#34495E',
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 16,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                }}
                            >
                                Activity
                            </Text>
                        </HStack>
                        <Box marginLeft={'16'}>
                            <Svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                                <Path
                                    id="Vector"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.1569 12.7111L4.49994 18.3681L3.08594 16.9541L8.03594 12.0041L3.08594 7.05414L4.49994 5.64014L10.1569 11.2971C10.3444 11.4847 10.4497 11.739 10.4497 12.0041C10.4497 12.2693 10.3444 12.5236 10.1569 12.7111Z"
                                    fill="#34495E"
                                />
                            </Svg>
                        </Box>
                    </HStack>

                    {/* Second HStack */}
                    <HStack justifyContent="space-around" >
                        <HStack alignItems="center" space={3}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <Path id="Vector" d="M6 22C5.45 22 4.97933 21.8043 4.588 21.413C4.19667 21.0217 4.00067 20.5507 4 20V10C4 9.45 4.196 8.97933 4.588 8.588C4.98 8.19667 5.45067 8.00067 6 8H7V6C7 4.61667 7.48767 3.43767 8.463 2.463C9.43833 1.48833 10.6173 1.00067 12 1C13.3827 0.999334 14.562 1.487 15.538 2.463C16.514 3.439 17.0013 4.618 17 6V8H18C18.55 8 19.021 8.196 19.413 8.588C19.805 8.98 20.0007 9.45067 20 10V11.3C19.7 11.2 19.3877 11.125 19.063 11.075C18.7383 11.025 18.384 11 18 11C16.0667 11 14.4167 11.6833 13.05 13.05C11.6833 14.4167 11 16.0667 11 18C11 18.75 11.1083 19.45 11.325 20.1C11.5417 20.75 11.85 21.3833 12.25 22H6ZM18 23C16.6167 23 15.4377 22.5123 14.463 21.537C13.4883 20.5617 13.0007 19.3827 13 18C12.9993 16.6173 13.487 15.4383 14.463 14.463C15.439 13.4877 16.618 13 18 13C19.382 13 20.5613 13.4877 21.538 14.463C22.5147 15.4383 23.002 16.6173 23 18C22.998 19.3827 22.5103 20.562 21.537 21.538C20.5637 22.514 19.3847 23.0013 18 23ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8ZM18 18C18.4167 18 18.771 17.8543 19.063 17.563C19.355 17.2717 19.5007 16.9173 19.5 16.5C19.4993 16.0827 19.3537 15.7287 19.063 15.438C18.7723 15.1473 18.418 15.0013 18 15C17.582 14.9987 17.228 15.1447 16.938 15.438C16.648 15.7313 16.502 16.0853 16.5 16.5C16.498 16.9147 16.644 17.269 16.938 17.563C17.232 17.857 17.586 18.0027 18 18ZM18 21C18.5 21 18.9667 20.8833 19.4 20.65C19.8333 20.4167 20.1917 20.0917 20.475 19.675C20.0917 19.4417 19.6917 19.2707 19.275 19.162C18.8583 19.0533 18.4333 18.9993 18 19C17.5667 19.0007 17.1417 19.0547 16.725 19.162C16.3083 19.2693 15.9083 19.4403 15.525 19.675C15.8083 20.0917 16.1667 20.4167 16.6 20.65C17.0333 20.8833 17.5 21 18 21Z" fill="#34495E"
                                    stroke="#34495E"
                                />
                            </Svg>
                            <Text
                                style={{
                                    color: '#34495E',
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 16,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                }}
                            >
                                Announcements
                            </Text>
                        </HStack>
                        <Box>
                            <Svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                                <Path
                                    id="Vector"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.1569 12.7111L4.49994 18.3681L3.08594 16.9541L8.03594 12.0041L3.08594 7.05414L4.49994 5.64014L10.1569 11.2971C10.3444 11.4847 10.4497 11.739 10.4497 12.0041C10.4497 12.2693 10.3444 12.5236 10.1569 12.7111Z"
                                    fill="#34495E"
                                />
                            </Svg>
                        </Box>
                    </HStack>

                    {/* third hstack */}

                    <HStack justifyContent="space-around" >
                        <HStack alignItems="center" space={3}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <Path id="Vector" d="M6.42895 2.41283C6.55502 2.26235 6.61707 2.06845 6.60178 1.87273C6.58649 1.67702 6.49508 1.49511 6.34716 1.36604C6.19925 1.23697 6.00662 1.17105 5.81064 1.18241C5.61466 1.19378 5.43095 1.28153 5.29895 1.42683L4.00695 2.90683C3.27433 3.74639 2.86018 4.8168 2.83695 5.93083L2.77995 8.64983C2.77583 8.84874 2.85091 9.04114 2.98866 9.1847C3.1264 9.32826 3.31553 9.41121 3.51445 9.41533C3.71336 9.41944 3.90576 9.34436 4.04932 9.20662C4.19287 9.06887 4.27583 8.87974 4.27995 8.68083L4.33595 5.96283C4.35199 5.20055 4.63552 4.46819 5.13695 3.89383L6.42895 2.41283Z" fill="#34495E" />
                                <Path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M6.23695 7.7C6.30411 6.63014 6.77647 5.62608 7.55787 4.89224C8.33928 4.15839 9.37098 3.74993 10.4429 3.75H10.9999V3C10.9999 2.73478 11.1053 2.48043 11.2928 2.29289C11.4804 2.10536 11.7347 2 11.9999 2C12.2652 2 12.5195 2.10536 12.7071 2.29289C12.8946 2.48043 12.9999 2.73478 12.9999 3V3.75H13.5569C14.6289 3.74993 15.6606 4.15839 16.442 4.89224C17.2234 5.62608 17.6958 6.63014 17.7629 7.7L17.9839 11.234C18.0694 12.5812 18.5217 13.8794 19.2919 14.988C19.4513 15.2171 19.5487 15.4835 19.5746 15.7613C19.6005 16.0392 19.5541 16.319 19.4398 16.5736C19.3256 16.8281 19.1474 17.0488 18.9226 17.2142C18.6978 17.3795 18.434 17.4838 18.1569 17.517L14.7499 17.925V19C14.7499 19.7293 14.4602 20.4288 13.9445 20.9445C13.4288 21.4603 12.7293 21.75 11.9999 21.75C11.2706 21.75 10.5711 21.4603 10.0554 20.9445C9.53968 20.4288 9.24995 19.7293 9.24995 19V17.925L5.84295 17.516C5.56604 17.4827 5.30246 17.3784 5.0778 17.2131C4.85313 17.0478 4.67503 16.8273 4.5608 16.5729C4.44657 16.3184 4.40009 16.0388 4.42587 15.7611C4.45165 15.4834 4.54883 15.2171 4.70795 14.988C5.47819 13.8794 5.93052 12.5812 6.01595 11.234L6.23695 7.7ZM10.7499 19C10.7499 19.3315 10.8816 19.6495 11.1161 19.8839C11.3505 20.1183 11.6684 20.25 11.9999 20.25C12.3315 20.25 12.6494 20.1183 12.8838 19.8839C13.1183 19.6495 13.2499 19.3315 13.2499 19V18.25H10.7499V19Z" fill="#34495E" />
                                <Path id="Vector_3" d="M17.643 1.3552C17.4932 1.48597 17.4015 1.67089 17.388 1.86929C17.3745 2.06769 17.4403 2.26333 17.571 2.4132L18.863 3.8932C19.3643 4.46796 19.6475 5.20071 19.663 5.9632L19.72 8.6802C19.7221 8.77869 19.7435 8.87582 19.783 8.96603C19.8226 9.05625 19.8796 9.13779 19.9506 9.20599C20.0217 9.27419 20.1056 9.32773 20.1973 9.36354C20.2891 9.39935 20.387 9.41673 20.4855 9.4147C20.584 9.41266 20.6811 9.39125 20.7714 9.35168C20.8616 9.31211 20.9431 9.25515 21.0113 9.18407C21.0795 9.11299 21.133 9.02916 21.1689 8.93739C21.2047 8.84562 21.2221 8.74769 21.22 8.6492L21.163 5.9312C21.1398 4.81717 20.7256 3.74677 19.993 2.9072L18.701 1.4272C18.5702 1.27739 18.3853 1.18564 18.1869 1.17214C17.9885 1.15864 17.7929 1.22449 17.643 1.3552Z" fill="#34495E" />
                            </Svg>
                            <Text
                                style={{
                                    color: '#34495E',
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 16,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                }}
                            >
                                Notification
                            </Text>
                        </HStack>
                        <Box marginLeft={8}>
                            <Svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                                <Path
                                    id="Vector"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.1569 12.7111L4.49994 18.3681L3.08594 16.9541L8.03594 12.0041L3.08594 7.05414L4.49994 5.64014L10.1569 11.2971C10.3444 11.4847 10.4497 11.739 10.4497 12.0041C10.4497 12.2693 10.3444 12.5236 10.1569 12.7111Z"
                                    fill="#34495E"
                                />
                            </Svg>
                        </Box>
                    </HStack>

                    {/* Fourth Hstack */}

                    <HStack justifyContent="space-around" >
                        <HStack alignItems="center" space={3}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <Path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M11.606 2.07991C11.7305 2.02654 11.8645 1.99902 12 1.99902C12.1355 1.99902 12.2695 2.02654 12.394 2.07991L18.788 4.82091C19.1478 4.97517 19.4545 5.23165 19.6699 5.55855C19.8854 5.88545 20.0002 6.2684 20 6.65991V13.5199C19.9999 14.7538 19.6736 15.9658 19.0542 17.033C18.4348 18.1002 17.5443 18.9847 16.473 19.5969L12.496 21.8689C12.3449 21.9552 12.174 22.0006 12 22.0006C11.826 22.0006 11.6551 21.9552 11.504 21.8689L7.527 19.5969C6.45537 18.9845 5.5647 18.0997 4.94529 17.0321C4.32589 15.9645 3.99977 14.7522 4 13.5179V6.65991C4.00004 6.26857 4.1149 5.88584 4.33033 5.55913C4.54576 5.23243 4.85231 4.9761 5.212 4.82191L11.606 2.07991ZM15.707 10.7069C15.8892 10.5183 15.99 10.2657 15.9877 10.0035C15.9854 9.74132 15.8802 9.4905 15.6948 9.30509C15.5094 9.11969 15.2586 9.01452 14.9964 9.01224C14.7342 9.00996 14.4816 9.11076 14.293 9.29291L11 12.5859L9.707 11.2929C9.5184 11.1108 9.2658 11.01 9.0036 11.0122C8.7414 11.0145 8.49059 11.1197 8.30518 11.3051C8.11977 11.4905 8.0146 11.7413 8.01233 12.0035C8.01005 12.2657 8.11084 12.5183 8.293 12.7069L10.293 14.7069C10.4805 14.8944 10.7348 14.9997 11 14.9997C11.2652 14.9997 11.5195 14.8944 11.707 14.7069L15.707 10.7069Z" fill="#34495E" />
                            </Svg>
                            <Text
                                style={{
                                    color: '#34495E',
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 16,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                }}
                            >
                                Privacy & data
                            </Text>
                        </HStack>
                        <Box>
                            <Svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                                <Path
                                    id="Vector"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.1569 12.7111L4.49994 18.3681L3.08594 16.9541L8.03594 12.0041L3.08594 7.05414L4.49994 5.64014L10.1569 11.2971C10.3444 11.4847 10.4497 11.739 10.4497 12.0041C10.4497 12.2693 10.3444 12.5236 10.1569 12.7111Z"
                                    fill="#34495E"
                                />
                            </Svg>
                        </Box>
                    </HStack>

                    {/* Fifth Hstack */}

                    <HStack justifyContent="space-around" >
                        <HStack alignItems="center" space={3}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <Path id="Vector" d="M13 9H11V7H13M13 17H11V11H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="#34495E" />
                            </Svg>
                            <Text
                                style={{
                                    color: '#34495E',
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 16,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                }}
                            >
                                About
                            </Text>
                        </HStack>
                        <Box marginLeft={16}>
                            <Svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                                <Path
                                    id="Vector"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.1569 12.7111L4.49994 18.3681L3.08594 16.9541L8.03594 12.0041L3.08594 7.05414L4.49994 5.64014L10.1569 11.2971C10.3444 11.4847 10.4497 11.739 10.4497 12.0041C10.4497 12.2693 10.3444 12.5236 10.1569 12.7111Z"
                                    fill="#34495E"
                                />
                            </Svg>
                        </Box>
                    </HStack>


                    {/* Sixth Hstack */}


                    <HStack justifyContent="space-around" >
                        <HStack alignItems="center" space={3}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <Path id="Vector" d="M9 22C8.4 22 8 21.6 8 21V18H4C2.9 18 2 17.1 2 16V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H13.9L10.2 21.7C10 21.9 9.8 22 9.5 22H9ZM10 16V19.1L13.1 16H20V4H4V16H10ZM16.3 6L14.9 9H17V13H13V8.8L14.3 6H16.3ZM10.3 6L8.9 9H11V13H7V8.8L8.3 6H10.3Z" fill="#34495E" />
                            </Svg>
                            <Text
                                style={{
                                    color: '#34495E',
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 16,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                }}
                            >
                                Feedback
                            </Text>
                        </HStack>
                        <Box marginLeft={8}>
                            <Svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                                <Path
                                    id="Vector"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.1569 12.7111L4.49994 18.3681L3.08594 16.9541L8.03594 12.0041L3.08594 7.05414L4.49994 5.64014L10.1569 11.2971C10.3444 11.4847 10.4497 11.739 10.4497 12.0041C10.4497 12.2693 10.3444 12.5236 10.1569 12.7111Z"
                                    fill="#34495E"
                                />
                            </Svg>
                        </Box>
                    </HStack>
                </VStack>
            </Box>

            <Center  mt={'20%'}>
                <Button bg={'#FF4C4C'} w={'50%'} onPress={() => navigation.navigate('Homepage')}>
                    <Text
                        style={{
                            color: 'white',
                            fontFamily: 'Poppins-Bold',
                            fontSize: 16,
                            lineHeight: 18,
                        }}
                    >
                        Log Out
                    </Text>
                </Button>
            </Center>



        </Box>

    );
};

export default ProfileScreen;










