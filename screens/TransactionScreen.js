import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation} from "@react-navigation/native";


const TransactionScreen = () => {
  const navigation = useNavigation();
  // Dummy data
  const transactions = [
    { id: "1", date: "09/11", category: "Ăn uống", amount: "-10,000 Đ", icon: "restaurant" },
    { id: "2", date: "09/11", category: "Lương", amount: "+5,000,000 Đ", icon: "attach-money" },
  ];

  const renderTransaction = ({ item }) => (
    <View style={styles.expenseItem}>
      <View style={styles.transactionDate}>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      <View style={styles.transactionDetails}>
        <MaterialIcons name={item.icon} size={24} color="#FF6B6B" />
        <Text style={styles.expenseText}>{item.category}</Text>
      </View>
      <Text
        style={[
          styles.expenseAmount,
          item.amount.startsWith("-") ? { color: "#FF6B6B" } : { color: "#28A745" },
        ]}
      >
        {item.amount}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.balance}>Số dư</Text>
        <Text style={styles.amount}>4,990,000 Đ</Text>
        <Ionicons name="ellipsis-vertical" size={24} color="#888" style={styles.icon} />
      </View>

      {/* Time Navigation */}
      <View style={styles.expenseTab}>
        <Text style={[styles.tab, styles.activeTab]}>THÁNG NAY</Text>
        <Text style={styles.tab}>THÁNG TRƯỚC</Text>
        <Text style={styles.tab}>TƯƠNG LAI</Text>
      </View>

      {/* Summary */}
      <View style={styles.walletSection}>
        <Text style={styles.sectionTitle}>Tóm tắt</Text>
        <View style={styles.walletItem}>
          <Text style={styles.walletText}>Số dư đầu</Text>
          <Text style={styles.walletAmount}>0 Đ</Text>
        </View>
        <View style={styles.walletItem}>
          <Text style={styles.walletText}>Số dư cuối</Text>
          <Text style={styles.walletAmount}>4,990,000 Đ</Text>
        </View>
        <View style={styles.walletItem}>
          <Text style={styles.walletText}>Thay đổi</Text>
          <Text style={[styles.walletAmount, { color: "#28A745" }]}>+4,990,000 Đ</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Report')}
          
        >
          <Text style={styles.linkText}>Xem báo cáo cho giai đoạn này</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions List */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f7f7", padding: 16 },
  header: { marginBottom: 20 },
  balance: { fontSize: 16, color: "#888" },
  amount: { fontSize: 32, fontWeight: "bold" },
  icon: { position: "absolute", right: 0, top: 10 },
  walletSection: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  linkText: { color: "#6b52ae", fontSize: 14 },
  walletItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fce4ec",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  walletText: { flex: 1, marginLeft: 10, fontSize: 16 },
  walletAmount: { fontSize: 16, fontWeight: "bold" },
  expenseTab: { flexDirection: "row", marginVertical: 10 },
  tab: {
    flex: 1,
    textAlign: "center",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  activeTab: { borderBottomColor: "#6b52ae", color: "#6b52ae" },
  expenseItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fde8f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  transactionDate: {
    marginRight: 10,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6B6B",
  },
  transactionDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  expenseText: { flex: 1, marginLeft: 10, fontSize: 16 },
  expenseAmount: { fontSize: 16, fontWeight: "bold" },
});

export default TransactionScreen;
