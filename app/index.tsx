import React from "react";
import { View } from "react-native";
import SubmitIngredients from "../components/SubmitIngredients";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SubmitIngredients />
    </View>
  );
}
