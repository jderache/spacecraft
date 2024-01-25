import type { ReactNode } from "react";
import React from "react";
import { View } from "react-native";
import { Offline } from "./Offline";


interface ScreenContainerProps {
  children?: ReactNode;
}

export const ScreenContainer = ({
  children,
}: ScreenContainerProps) => {
  return (
    <View>
      <Offline/>
      {children}
    </View>
  );
};