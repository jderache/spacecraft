// ./src/components/Button.stories.tsx

import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default {
  title: "Button",
};

export const Default = () => (
  <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
    {/* Create a new Button.stories.tsx and add all types of buttons when mode is 'text' | 'outlined' | 'contained' */}
    <Button mode="text" onPress={() => console.log("Pressed")}>
      Press me
    </Button>
    <Button mode="outlined" onPress={() => console.log("Pressed")}>
      Press me
    </Button>
    <Button mode="contained" onPress={() => console.log("Pressed")}>
      Press me
    </Button>
    <Button icon="camera" mode="contained" onPress={() => console.log("Pressed")}>
      Press me
    </Button>
    <Button onPress={() => console.log("Pressed")}>
      Press me
    </Button>
  </View>
);

Default.story = {
  name: "Default",
};
