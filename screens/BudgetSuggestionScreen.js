import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const BudgetSuggestionScreen = () => {
  // State lưu dữ liệu ngân sách
  const [budgets, setBudgets] = useState([
    { id: "1", name: "Ăn uống", remaining: 1200000 },
    { id: "2", name: "Giải trí", remaining: 800000 },
    { id: "3", name: "Di chuyển", remaining: 100000 },
    { id: "4", name: "Học tập", remaining: 500000 },
  ]);

  // Hàm đưa ra gợi ý
  const getSuggestion = (remaining) => {
    if (remaining >= 1000000) {
      return "Bạn đang chi tiêu hợp lý, tiếp tục duy trì nhé!";
    } else if (remaining > 200000) {
      return "Ngân sách sắp hết, hãy cân nhắc các khoản chi tiêu tiếp theo.";
    } else {
      return "Cẩn thận! Ngân sách của bạn đang rất thấp.";
    }
  };

  // Hàm khi nhấn vào hạng mục
  const handlePress = (item) => {
    Alert.alert(
      `Gợi ý cho ${item.name}`,
      getSuggestion(item.remaining),
      [{ text: "OK", style: "default" }],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ngân sách chi tiêu còn lại</Text>
      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.budgetItem,
              item.remaining < 200000 && styles.warningBudget,
            ]}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.budgetName}>{item.name}:</Text>
            <Text style={styles.budgetRemaining}>
              {item.remaining.toLocaleString()} VND
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#003580",
  },
  budgetItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#F2F2F2",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  warningBudget: {
    backgroundColor: "#FFF3CD",
    borderColor: "#FFCC00",
  },
  budgetName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  budgetRemaining: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
  },
});

export default BudgetSuggestionScreen;
