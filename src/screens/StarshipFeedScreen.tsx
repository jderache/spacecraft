import React from "react";
import { StyleSheet, StatusBar, View, Text, SafeAreaView, FlatList} from "react-native";
import { Card, ActivityIndicator} from 'react-native-paper';
import { useStarships } from '../hooks/useStarships';

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
                    <Card>
                      <Card.Cover source={useImage(item.name)} />
                      <Card.Title title={item.name} subtitle={item.model} />
                      <Card.Content>
                        <Text>{item.crew}</Text>
                        <Text>{item.hyperdrive_rating}</Text>
                        <Text>{item.cost_in_credits}</Text>
                      </Card.Content>
                    </Card>
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

export const useImage = (title: string) => {
  const imageName = `${title.toLowerCase().replace(" ", "")}`;

  let source;
  switch (imageName) {
    case "cr90corvette":
      source = require("~/../assets/starships/CR90corvette.jpg");
      break;
    case "stardestroyer":
      source = require("~/../assets/starships/stardestroyer.jpg");
      break;
    case "sentinel-classlanding craft":
      source = require("~/../assets/starships/sentinel-classlandingcraft.jpg");
      break;
    case "deathstar":
      source = require("~/../assets/starships/deathstar.jpg");
      break;
    case "millenniumfalcon":
      source = require("~/../assets/starships/millenniumfalcon.jpg");
      break;
    case "y-wing":
      source = require("~/../assets/starships/y-wing.jpg");
      break;
    case "x-wing":
      source = require("~/../assets/starships/x-wing.jpg");
      break;
    case "tieadvanced x1":
      source = require("~/../assets/starships/tieadvancedx1.jpg");
      break;
    case "executor":
      source = require("~/../assets/starships/executor.jpg");
      break;
    case "rebeltransport":
      source = require("~/../assets/starships/rebeltransport.jpg");
      break;
  }
  return source;
};