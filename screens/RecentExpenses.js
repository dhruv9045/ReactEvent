import { Text, View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState();
  const expenseCtx = useContext(ExpensesContext);

  // const [fetchExpenses, setFetchExpenses] = useState([]);
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpense();
      setIsFetching(false);
      expenseCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
