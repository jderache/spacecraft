import React from "react";
import { StyleSheet, StatusBar, View, Text, SafeAreaView, FlatList} from "react-native";
import { ActivityIndicator} from 'react-native-paper';
import { useStarships } from '../hooks/useStarships';
import { StarshipCard } from "src/components/StarshipCard";

export const StarshipFeedScreen = () => {
  const { data, isLoading, isError, error } = useStarships();
  
  return (
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
                    <StarshipCard
                      name={item.name}
                      model={item.model}
                      manufacturer={item.manufacturer}
                      cost_in_credits={item.cost_in_credits}
                    ></StarshipCard>
                  </View>
                )}
                keyExtractor={item => item.name}
              />
            </View>
          </View>
        ) : null}
    </SafeAreaView>
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