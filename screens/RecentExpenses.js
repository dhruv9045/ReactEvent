import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import listData from "../data/list_demo";

function RecentExpenses() {
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod="Last 7 Days" expenses={listData} />
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
