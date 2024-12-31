import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const ScreenOne = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Screen One</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("ScreenTwo");
        }}
        title="Go To Screen Two"
      />
    </View>
  );
};

const ScreenTwo = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Screen Two</Text>
    </View>
  );
};

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
