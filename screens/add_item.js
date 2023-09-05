import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  BorderedTextInput,
  TextInput,
  Touchable,
  View,
} from "react-native";

function AddItemScreen() {
  const [amount, setAmount] = useState([]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.fields}>
        <Text>Item Name</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter item name"
            placeholderTextColor="grey"
            value={amount}
            onChange={setAmount}
            color="white"
          />
        </View>
        <Text>Item Price</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter item price"
            placeholderTextColor="grey"
            value={amount}
            color="white"
          />
        </View>
      </View>
      <Pressable onPress={console.log("Item Press")} style={styles.row}>
        <View style={styles.button}>
          <Text style={styles.text}>ADD</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default AddItemScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#1434A4",
  },
  row: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "blue",
  },
  fields: {
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 40,
    width: 180,
  },
  container: {
    borderWidth: 1,
    borderColor: "white",
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
  },
});
