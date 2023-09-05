import { View, Text, FlatList, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderItem = ({ item }) => {
  return (
    <ExpenseItem
      date={item.date}
      description={item.description}
      amount={item.amount}
    />
  );
};
function ExpensesList({ expenses }) {
  return (
    <View style={styles.listStyle}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
export default ExpensesList;

const styles = StyleSheet.create({
  listStyle: { flex: 1 },
});
