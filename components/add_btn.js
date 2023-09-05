import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Or use another icon library
import { useNavigation } from "@react-navigation/native";

const CommonHeaderRight = () => {
  const navigation = useNavigation();

  const handleIconPress = () => {
    // Implement the behavior when the icon is pressed
    // For example, navigate to a specific screen
    navigation.navigate("Add Expense");
  };

  return (
    <View style={{ marginRight: 16 }}>
      <Ionicons name="add" size={24} color="white" onPress={handleIconPress} />
    </View>
  );
};

export default CommonHeaderRight;
