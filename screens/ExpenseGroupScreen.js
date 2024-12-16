import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ExpenseGroupScreen = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState('expense'); // Mặc định: Khoản chi
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [customGroup, setCustomGroup] = useState('');

  // Danh sách nhóm chi tiêu
  const expenseGroups = [
    { id: '1', name: 'Ăn uống', icon: 'restaurant' },
    { id: '2', name: 'Di chuyển', icon: 'directions-car' },
    { id: '3', name: 'Mua sắm', icon: 'shopping-cart' },
    { id: '4', name: 'Giải trí', icon: 'movie' },
    { id: '5', name: 'Hóa đơn', icon: 'receipt' },
    { id: '6', name: 'Sức khỏe', icon: 'health-and-safety' },
    { id: '7', name: 'Giáo dục', icon: 'school' },
  ];

  const incomeGroups = [
    { id: '1', name: 'Lương', icon: 'work' },
    { id: '2', name: 'Đầu tư', icon: 'trending-up' },
    { id: '3', name: 'Tiết kiệm', icon: 'savings' },
    { id: '4', name: 'Quà tặng', icon: 'card-giftcard' },
    { id: '5', name: 'Kinh doanh', icon: 'business-center' },
  ];

  const groups = selectedType === 'expense' ? expenseGroups : incomeGroups;

  const handleSelectGroup = (group) => {
    navigation.navigate('AddExpense', { selectedGroup: group.name });
  };

  const handleSaveCustomGroup = () => {
    if (customGroup.trim()) {
      navigation.navigate('AddExpense', { selectedGroup: customGroup });
    }
  };

  const renderGroup = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.groupItem,
        selectedGroup === item.id ? styles.selectedGroup : null,
      ]}
      onPress={() => handleSelectGroup(item)}
    >
      <MaterialIcons name={item.icon} size={24} color="#FF6B6B" />
      <Text style={styles.groupText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chọn nhóm</Text>
      <View style={styles.typeSelector}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            selectedType === 'expense' && styles.selectedTypeButton,
          ]}
          onPress={() => setSelectedType('expense')}
        >
          <Text
            style={[
              styles.typeButtonText,
              selectedType === 'expense' && styles.selectedTypeText,
            ]}
          >
            Khoản chi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.typeButton,
            selectedType === 'income' && styles.selectedTypeButton,
          ]}
          onPress={() => setSelectedType('income')}
        >
          <Text
            style={[
              styles.typeButtonText,
              selectedType === 'income' && styles.selectedTypeText,
            ]}
          >
            Khoản thu
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={renderGroup}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.customGroupContainer}>
        <Text style={styles.customGroupLabel}>Nhóm khác:</Text>
        <TextInput
          style={styles.customGroupInput}
          placeholder="Nhập nhóm tùy chỉnh"
          value={customGroup}
          onChangeText={setCustomGroup}
        />
        <TouchableOpacity
          style={styles.saveCustomButton}
          onPress={handleSaveCustomGroup}
        >
          <Text style={styles.saveCustomButtonText}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f7f7", padding: 16 },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  typeSelector: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  typeButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    marginHorizontal: 5,
  },
  selectedTypeButton: {
    backgroundColor: "#FF6B6B",
  },
  typeButtonText: {
    fontSize: 16,
    color: "#FF6B6B",
  },
  selectedTypeText: {
    color: "#FFF",
  },
  listContainer: { paddingBottom: 20 },
  groupItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fce4ec",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  groupText: { flex: 1, marginLeft: 10, fontSize: 16 },
  selectedGroup: {
    backgroundColor: "#e8f5e9",
  },
  customGroupContainer: {
    marginTop: 20,
  },
  customGroupLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  customGroupInput: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  saveCustomButton: {
    backgroundColor: "#28A745",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  saveCustomButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ExpenseGroupScreen;
