// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// import React from 'react';
// import {StyleSheet, View, useColorScheme} from 'react-native';
// import {NavigationContainer, StackRouter} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MainScreen from './screens/MainScreen/MainScreen';

// const Stack = createNativeStackNavigator();

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={MainScreen}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// function Content() {
//   return <View style={style.contentContainer}></View>;
// }

// const style = StyleSheet.create({
//   contentContainer: {
//     height: 1000,
//     backgroundColor: '#64a4af66',
//   },
//   container: {
//     backgroundColor: '#64a4af66',
//   },
// });
