import { View, Text, StyleSheet, Pressable } from "react-native";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ description, amount, date }) {
  const navigator = useNavigation();
  function expensePressHandler() {
    navigator.navigate("ManageExpense");
  }
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.inner}>
        <View style={styles.innerItems}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.text}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.button}>
          <Text>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  inner: {
    padding: 10,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "blue",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  innerItems: {
    justifyContent: "space-between",
    flexDirection: "column",
  },
  text: {
    color: "white",
  },

  button: {
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 80,
  },
});
