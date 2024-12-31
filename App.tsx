import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const ScreenOne = (props: { navigation: { navigate: (arg0: string) => void } }) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-color-literals
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
    >
      <Text>Screen One</Text>
      <Button
        onPress={() => {
          props.navigation.navigate('ScreenTwo');
        }}
        title="Go To Screen Two"
      />
    </View>
  );
};

const ScreenTwo = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-color-literals
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
    >
      <Text>Screen Two</Text>
    </View>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
