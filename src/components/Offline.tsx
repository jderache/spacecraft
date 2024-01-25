import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useIsConnected } from "react-native-offline";
import { ActivityIndicator } from "react-native-paper";


export const Offline = () => {

  const isConnected = useIsConnected();
  if (isConnected === null) return null;
  if (isConnected) return null;

  return (
    <View className="absolute top-20 w-full z-10 justify-center items-center px-8">
      <View className="bg-red-500 w-full rounded-lg justify-center items-center h-10">
        {isConnected && (
          <Text className="text-white font-bold px-10 rounded-lg">
            <ActivityIndicator animating={true} color="white" />
            {" "}No Internet Connection
          </Text>
        )}
      </View>
    </View>
  );
};