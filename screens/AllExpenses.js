import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import listData from "../data/list_demo";

function AllExpenses() {
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod="Total" expenses={listData} />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
