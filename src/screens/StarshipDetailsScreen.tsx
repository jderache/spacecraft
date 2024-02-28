import React from "react";
import { Text, StyleSheet, SafeAreaView, StatusBar, View, Image } from "react-native";
import { Appbar } from "react-native-paper";
import { useImage } from "../hooks/useImage";
import { useEffect } from "react";

type Props = {
  navigation: any,
  route: any
}

const StarshipDetailsScreen = ({ navigation, route }: Props) => {
  
  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
}, []);

  return (
    <>
    {/* <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={route.params.name} />
    </Appbar.Header> */}
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle="dark-content" />
      </View>
      <View>
        <Image source={useImage(route.params.name)} className="w-full" />
        <View className="p-8">
            <Text className="text-2xl text-slate-500">Details</Text> 
            <Text>Name: {route.params.name}</Text>
            <Text>Manufacturer: {route.params.manufacturer}</Text>
            <Text>Model: {route.params.model}</Text>
            <Text>Cost: {route.params.cost_in_credits} $</Text>
            <Text>Hyperdrive: {route.params.hyperdrive_rating}</Text>
        </View>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
});

export default StarshipDetailsScreen;