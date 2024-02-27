import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Routes} from "./Routes";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import StarshipDetailsScreen from "../screens/StarshipDetailsScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.STARSHIP_FEED_SCREEN}>
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name={Routes.STARSHIP_FEED_SCREEN}
                        component={StarshipFeedScreen}
                    />
                </Stack.Group>
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name={Routes.STARSHIP_DETAIL_SCREEN}
                        component={StarshipDetailsScreen}
                        options={{presentation: 'modal'}}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;