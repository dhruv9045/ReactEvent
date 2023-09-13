import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod="Last 7 Days" expenses={recentExpenses} />
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
