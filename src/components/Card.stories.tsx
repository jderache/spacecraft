import { View, Text } from 'react-native'
import React from 'react'

export default {
  title: 'StarshipCard',
}

export const StarshipCard = () => (
  <View style={{ padding: 16, justifyContent: 'space-between', flex: 1 }}>
    <Text>StarshipCard</Text>
  </View>
)

StarshipCard.story = {
  name: 'StarshipCard',
}