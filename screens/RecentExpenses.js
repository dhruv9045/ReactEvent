import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpense } from "../util/http";

function RecentExpenses() {
  const expenseCtx = useContext(ExpensesContext);

  // const [fetchExpenses, setFetchExpenses] = useState([]);
  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpense();
      expenseCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });
  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput
        expensesPeriod="Last 7 Days"
        expenses={recentExpenses}
        fallbackText="No expenses register for the last 7 days."
      />
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
