import React from "react";
import { Text, View, Button, Alert } from "react-native";
import { postIngridients } from "./../services/postIngridients";

const SubmitIngredients = () => {
  let ingredients = [
    "Aqua/Water",
    "Sodium Laureth Sulfate",
    "Cocamidopropyl Betaine",
    "Sodium Lauryl Sulfate",
    "Glycol Distearate",
    "Ppg-5-Ceteth-20",
    "Sodium Chloride",
    "Amodimethicone",
    "Parfum/Fragrance",
    "Sodium Benzoate",
    "Sodium Hydroxide",
    "Citric Acid",
    "Coco-Betaine",
    "Salicylic Acid",
    "Guar Hydroxypropyltrimonium Chloride",
    "Trideceth-6",
    "Carbomer",
    "Lactic Acid",
    "Linalool",
    "Arginine",
    "Glutamic Acid",
    "Benzyl Salicylate",
    "Benzyl Alcohol",
    "Serine",
    "Limonene",
    "Hydroxypropyltrimonium Hydrolyzed Wheat Protein",
    "Cetrimonium Chloride",
    "Amyl Cinnamal",
    "Coumarin",
    "Citronellol",
    "2-Oleamido-1, 3-Octadecanediol",
    "Alpha-Isomethyl Ionone",
    "Fumaric Acid",
    "Phenoxyethanol",
  ];

  const handleSubmit = async () => {
    try {
      const response = await postIngridients(ingredients.join(", "));
      console.log(response, "response");

      Alert.alert("Success", "Data submitted successfully");
    } catch (error) {
      Alert.alert("Error", "There was an error submitting the data");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Send ingridients</Text>
      <Button title="Submit Ingredients" onPress={handleSubmit} />
    </View>
  );
};

export default SubmitIngredients;