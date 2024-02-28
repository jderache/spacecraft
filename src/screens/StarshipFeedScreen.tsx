// src/screens/StarshipFeedScreen.tsx

import React from "react";
import { StyleSheet, StatusBar, View, Text, SafeAreaView, FlatList, TouchableOpacity} from "react-native";
import { ActivityIndicator } from 'react-native-paper';
import { useStarships } from '../hooks/useStarships';
import { StarshipCard } from "src/components/StarshipCard";
import { Routes } from "../navigation/Routes";

export const StarshipFeedScreen = ({navigation} : {navigation: any }) => {
  const { data, isLoading, isError, error } = useStarships();
  
  return (
      <>
        {/* Ancienne gestion de l'Appbar */}
        {/* 
        <Appbar.Header>
          <Appbar.BackAction onPress={signOutAndGoBack} />
          <Appbar.Content title="Starships" />
        </Appbar.Header>
        */}

        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" />
            {isError && !isLoading ? <Text>An error has occurred : {error.message}</Text> : null}
            {isLoading && <Text>Loading...<ActivityIndicator animating={true} /></Text>}
            {data && data.results && !isLoading ? (
              <View style={styles.container}>
                <View style={styles.headerContainer}>
                  <FlatList style={{padding: 20}}
                    data={data.results}
                    renderItem={({item}) => (
                      <View className="mt-5">
                        <TouchableOpacity onPress={() => {
                              navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, {
                                  name: item.name,
                                  manufacturer: item.manufacturer,
                                  model: item.model,
                                  cost_in_credits: item.cost_in_credits,
                                  hyperdrive_rating: item.hyperdrive_rating,
                              })
                          }}>
                          <StarshipCard {...item} />
                        </TouchableOpacity>
                      </View>
                    )}
                    keyExtractor={item => item.name}
                  />
                </View>
              </View>
            ) : null}
        </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    paddingHorizontal: 0,
    marginTop: 20,
  },
});