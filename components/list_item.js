// import { FlatList, StyleSheet, View, Text, Button } from "react-native";
// import listData from "../data/list_demo";

// const renderItem = ({ item }) => {
//   return (
//     <View style={styles.inner}>
//       <View style={styles.innerItems}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.text}>{item.date}</Text>
//       </View>

//       <View style={styles.button}>
//         <Button
//           title={item.prise}
//           onPress={console.log("jdnlkdnlk")}
//           color="#1434A4"
//           backgroundColor="white"
//         />
//       </View>
//     </View>
//   );
// };

// function ListItem() {
//   return (
//     <View style={styles.listStyle}>
//       <FlatList
//         data={listData}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// }
// export default ListItem;

// const styles = StyleSheet.create({
//   listStyle: { flex: 1 },

//   inner: {
//     padding: 10,
//     margin: 10,
//     borderRadius: 8,
//     backgroundColor: "blue",
//     justifyContent: "space-between",
//     flexDirection: "row",
//   },
//   innerItems: {
//     justifyContent: "space-between",
//     flexDirection: "column",
//   },
//   text: {
//     color: "white",
//   },
//   title: {
//     color: "white",
//     fontSize: 14,
//     fontWeight: "800",
//   },
//   button: {
//     backgroundColor: "white",
//     borderRadius: 8,
//     height: 40,
//     width: 80,
//   },
// });
