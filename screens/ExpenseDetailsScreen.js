import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ExpenseDetailsScreen = () => {
  // Dữ liệu giả lập
  const totalExpense = 10000;
  const averageDailyExpense = 588.24;
  const categoryExpense = [
    {
      name: 'Ăn uống',
      amount: 10000,
      color: '#FF6B6B',
    },
  ];

  return (
    <ScrollView style={styles.container}>


      {/* Bộ lọc ngày */}
      <View style={styles.dateFilter}>
        <Text style={styles.dateOption}>08/2024</Text>
        <Text style={styles.dateOption}>09/2024</Text>
        <Text style={[styles.dateOption, styles.selectedDateOption]}>THÁNG TRƯỚC</Text>
        <Text style={styles.dateOption}>THÁNG NÀY</Text>
      </View>

      {/* Tổng và trung bình */}
      <View style={styles.summary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Tổng cộng</Text>
          <Text style={styles.summaryAmount}>{totalExpense.toLocaleString()} Đ</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Trung bình hàng ngày</Text>
          <Text style={styles.summaryAmount}>{averageDailyExpense.toLocaleString()}Đ</Text>
        </View>
      </View>

      {/* Biểu đồ (thay bằng mô phỏng hình tròn đơn giản) */}
      <View style={styles.chartContainer}>
        <View style={[styles.chartCircle, { backgroundColor: categoryExpense[0].color }]}>
          <Text style={styles.chartLabel}>100%</Text>
        </View>
      </View>

      {/* Chi tiết khoản chi */}
      <View style={styles.expenseList}>
        {categoryExpense.map((category, index) => (
          <View key={index} style={styles.expenseItem}>
            <View style={[styles.expenseIcon, { backgroundColor: category.color }]} />
            <Text style={styles.expenseName}>{category.name}</Text>
            <Text style={styles.expenseAmount}>
              {category.amount.toLocaleString()} Đ
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
  header: {
    marginVertical: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  dateOption: {
    fontSize: 14,
    color: '#7F7F7F',
  },
  selectedDateOption: {
    fontWeight: 'bold',
    color: '#000',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryText: {
    fontSize: 14,
    color: '#7F7F7F',
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF3B30',
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  chartCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  expenseList: {
    marginVertical: 15,
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  expenseIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  expenseName: {
    fontSize: 14,
    flex: 1,
  },
  expenseAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF3B30',
  },
});

export default ExpenseDetailsScreen;
