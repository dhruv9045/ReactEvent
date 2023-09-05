import { View, Text, StyleSheet } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.bannerContainer}>
      <Text>{periodName}</Text>
      <Text style={styles.bannerAmount}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "purple",
  },
  bannerAmount: {
    fontSize: 16,
    fontWeight: "600",
  },
});
