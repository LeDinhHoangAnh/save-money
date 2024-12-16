import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const HistoryMoney = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Stores selected date
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false); // Controls DatePicker visibility

  // Dummy data with date and time
  const transactions = [
    { id: "1", date: "2024-12-15", time: "08:30 AM", category: "Ăn uống", amount: "-10,000 Đ", icon: "restaurant" },
    { id: "2", date: "2024-12-15", time: "02:15 PM", category: "Lương", amount: "+5,000,000 Đ", icon: "attach-money" },
    { id: "3", date: "2024-12-16", time: "10:00 AM", category: "Mua sắm", amount: "-500,000 Đ", icon: "shopping-cart" },
    { id: "4", date: "2024-12-16", time: "03:45 PM", category: "Đi lại", amount: "-50,000 Đ", icon: "directions-bus" },
    { id: "5", date: "2024-12-16", time: "01:30 PM", category: "Giải trí", amount: "-200,000 Đ", icon: "movie" },
  ];

  // Filter transactions based on the selected date
  const filteredTransactions = selectedDate
    ? transactions.filter((t) => t.date === selectedDate)
    : transactions;

  // Show and hide DatePicker
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  // Handle date selection
  const handleConfirm = (date) => {
    const formattedDate = date.toISOString().split("T")[0]; // Format to YYYY-MM-DD
    setSelectedDate(formattedDate);
    hideDatePicker();
  };

  // Render individual transaction
  const renderTransaction = ({ item }) => (
    <View style={styles.expenseItem}>
      <View style={styles.transactionDate}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
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

      {/* Filter Section */}
      <View style={styles.filterSection}>
        <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
          <Ionicons name="calendar" size={20} color="#fff" style={styles.dateIcon} />
          <Text style={styles.dateButtonText}>
            {selectedDate ? selectedDate : "Chọn ngày"}
          </Text>
        </TouchableOpacity>
        {selectedDate && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => setSelectedDate(null)}
          >
            <Text style={styles.clearButtonText}>Xem tất cả</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* DateTimePicker */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      {/* Transactions List */}
      <FlatList
        data={filteredTransactions}
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
  filterSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dateButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF6B6B",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  dateButtonText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 8,
  },
  dateIcon: {
    marginRight: 8,
  },
  clearButton: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  clearButtonText: {
    color: "#fff",
    fontSize: 16,
  },
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
    alignItems: "flex-start",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF6B6B",
  },
  timeText: {
    fontSize: 14,
    color: "#888",
  },
  transactionDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  expenseText: { flex: 1, marginLeft: 10, fontSize: 16 },
  expenseAmount: { fontSize: 16, fontWeight: "bold" },
});

export default HistoryMoney;
