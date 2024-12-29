import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, Text } from 'native-base';
import HomeScreen from './src/screens/Splash_Screen/HomeScreen';
import Homepage from './src/screens/HomePage/Homepage';
import SchoolDetails from './src/screens/HomePage/sealldetails';
import SixthGradeScreen from './src/screens/Class_grade/sixthgrade';
import SeventhGradeScreen from './src/screens/Class_grade/seventhgrade';
import EighthGradeScreen from './src/screens/Class_grade/eighthgrade';
import NinethGradeScreen from './src/screens/Class_grade/ninethgrade';
import TenthGradeScreen from './src/screens/Class_grade/tenthgrade';
import TamilPageScreen from './src/screens/subject_name/tamilsubject';
import TamilTestScreen from './src/screens/tamil_test/tamiltest';
import TamilScreen from './src/screens/subject_name/test_name/tamil';
import TamilTestTwoScreen from './src/screens/tamil_test/tamiltest2';
import TamilTestThreeScreen from './src/screens/tamil_test/tamiltest3';
import TamilTestFourScreen from './src/screens/tamil_test/tamiltest4';
import ResultBoxScreen from './src/screens/Results/results';
import ProfileScreen from './src/screens/HomePage/profilescreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import store from './src/screens/Redux/store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabsComp = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home'; // 'home' for focused and 'home-outline' for inactive
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'; // 'person' for focused and 'person-outline' for inactive
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          // Add labels under the icons
          if (route.name === 'Dashboard') {
            return <Text style={{ color: color, fontSize: 12 }}>Home</Text>; 
          } else if (route.name === 'Profile') {
            return <Text style={{ color: color, fontSize: 12 }}>Profile</Text>;  
          }
        },
        tabBarStyle: {
          height: 60, 
          paddingBottom: 10, 
        },
        tabBarActiveTintColor: 'blue',  
        tabBarInactiveTintColor: 'gray', 
        headerShown: false 
      })}
    >
      <Tab.Screen name="Dashboard" component={Homepage} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};




const AppNavigator = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Homescreen" component={HomeScreen} />
          <Stack.Screen name="Homepage" component={HomeTabsComp} />
          <Stack.Screen name="SchoolDetails" component={SchoolDetails} />
          <Stack.Screen name="SixthGradeScreen" component={SixthGradeScreen} />
          <Stack.Screen name="SeventhGradeScreen" component={SeventhGradeScreen} />
          <Stack.Screen name="EighthGradeScreen" component={EighthGradeScreen} />
          <Stack.Screen name="NinethGradeScreen" component={NinethGradeScreen} />
          <Stack.Screen name="TenthGradeScreen" component={TenthGradeScreen} />
          <Stack.Screen name="TamilPageScreen" component={TamilPageScreen} />
          <Stack.Screen name="TamilScreen" component={TamilScreen} />
          <Stack.Screen name="TamilTestScreen" component={TamilTestScreen} />
          <Stack.Screen name="TamilTestTwoScreen" component={TamilTestTwoScreen} />
          <Stack.Screen name="TamilTestThreeScreen" component={TamilTestThreeScreen} />
          <Stack.Screen name="TamilTestFourScreen" component={TamilTestFourScreen} />
          <Stack.Screen name="ResultBoxScreen" component={ResultBoxScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default AppNavigator;





































































// ///////////////////////////////////////////////////////////////////////////////////////////////









// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NativeBaseProvider } from 'native-base';
// import Homepage from './src/screens/Homepage';  
// // import Crudoperation from './src/screens/CrudOperation';
// import Addquestion from './src/screens/Addquestion';  
// import QuestionType from './src/screens/QuestionTypes';
// import Matchfollowing from './src/screens/QuestionType/Matchfollowing';
// import TrueOrFalse from './src/screens/QuestionType/Trueorfalse';
// import FillTheBlanks from './src/screens/QuestionType/Filltheblanks';
// import SingleChoice from './src/screens/QuestionType/Singlechoice';
// import Multiplechoice from './src/screens/QuestionType/Multiplechoice';  

// const Stack = createStackNavigator();

// const App = () => { 
//   return (
//     <NativeBaseProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" options={{ headerShown: false }} component={Homepage} />
//           {/* <Stack.Screen name="Questionbank" options={{ headerShown: false }} component={Crudoperation} /> */}
//           <Stack.Screen name="Questiontype" options={{ headerShown: false }} component={QuestionType} />
//           <Stack.Screen name="Addquestion" options={{ headerShown: false }} component={Addquestion} />
//           <Stack.Screen name="Matchfollowing" options={{ headerShown: false }} component={Matchfollowing} />
//           <Stack.Screen name="TrueOrFalse" options={{ headerShown: false }} component={TrueOrFalse} />
//           <Stack.Screen name="FillTheBlanks" options={{ headerShown: false }} component={FillTheBlanks} />
//           <Stack.Screen name="SingleChoice" options={{ headerShown: false }} component={SingleChoice} />
//           <Stack.Screen name="Multiplechoice" options={{ headerShown: false }} component={Multiplechoice} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </NativeBaseProvider>
//   );
// };

// export default App;









// //////////////////////////////////////////////////////////////////////////////////////////////////////////




// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'; 
// import { createDrawerNavigator } from '@react-navigation/drawer'; 
// import Dashboard from './src/screens/Dashboard';
// import Settings from './src/screens/Settings';


// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (

//     <NavigationContainer>
//           <Drawer.Navigator initialRouteName="Home">
//           <Drawer.Screen name='Dashboard' component={Dashboard} />
//             <Drawer.Screen name='Settings' component={Settings}/>
//           </Drawer.Navigator>
//         </NavigationContainer>
//             );
//           };
//         export default App



///////////////////////////////////////////////////////////////////////////////////////////////////////////




// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import  Dashboard from './src/screens/Dashboard';
// import Settings from './src/screens/Settings';
// import Home from './src/screens/Home'

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const HomeStack = () => {
// return (
// <Stack.Navigator>
// <Stack.Screen
// name="Home"
// component={Home}
// />
// </Stack.Navigator>
// );
// };
// const SettingsStack = () => {
// return (
// <Stack.Navigator>
// <Stack.Screen
// name="Settings"
// component={Settings}
// />
// </Stack.Navigator>
// );
// };
// const Navigation: React.FC = () => {
// return (

// <Drawer.Navigator>
// <Drawer.Screen name="Home" component={HomeStack} />
// <Drawer.Screen name="Settings" component={SettingsStack} />
// <Drawer.Screen name="Dashboard" component={Dashboard} />
// </Drawer.Navigator>

// );
// };

