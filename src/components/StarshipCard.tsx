import React from "react";
import { Card, Text } from "react-native-paper";
import { useImage } from "../hooks/useImage";

interface StarshipCardProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

export function StarshipCard({
  name,
  model,
  manufacturer,
  cost_in_credits,
}: StarshipCardProps) {
  return (
    <Card>
      <Card.Cover source={useImage(name)} />
      <Card.Title title={name} subtitle={model} />
      <Card.Content>
        <Text>{manufacturer}</Text>
        <Text>{cost_in_credits}</Text>
      </Card.Content>
    </Card>
  );
}
