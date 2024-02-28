import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Routes} from "./Routes";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import StarshipDetailsScreen from "../screens/StarshipDetailsScreen";
import CustomNavigationBar from "../navigation/CustomNavigationBar";
import { useAuthContext } from "../contexts/AuthContext";


const Stack = createNativeStackNavigator();


const RootNavigator = () => {
    const { toggleIsSignedIn } = useAuthContext();

    return (
        <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    header: (props) => <CustomNavigationBar {...props} />,
                }} initialRouteName={Routes.STARSHIP_FEED_SCREEN}>
                <Stack.Group>
                    <Stack.Screen
                        name={Routes.STARSHIP_FEED_SCREEN}
                        component={StarshipFeedScreen}
                        options={{
                            header: (props) => <CustomNavigationBar {...props} logout={toggleIsSignedIn} />,
                        }}
                    />
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