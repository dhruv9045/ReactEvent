import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import listData from "../data/list_demo";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod="Total" expenses={expenseCtx.expenses} />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
