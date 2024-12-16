import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const GeneralFundScreen = () => {
  // Dữ liệu mẫu cho quỹ chung
  const data = {
    totalFund: '6,700,000 Đ',
    contributions: {
      Bố: '1,000,000 Đ',
      Mẹ: '1,500,000 Đ',
      'Con cái': '200,000 Đ',
    },
    expenses: [
      { category: 'Ăn uống', amount: '1,000,000 Đ' },
      { category: 'Giải trí', amount: '500,000 Đ' },
      { category: 'Học phí', amount: '2,000,000 Đ' },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.details}>
        <Text style={styles.title}>Tổng tiền quỹ chung: {data.totalFund}</Text>

        <Text style={styles.subTitle}>Đóng góp từ các thành viên:</Text>
        {Object.keys(data.contributions).map((member, index) => (
          <View key={index} style={styles.contributionItem}>
            <Text style={styles.contributionMember}>{member}:</Text>
            <Text style={styles.contributionAmount}>{data.contributions[member]}</Text>
          </View>
        ))}

        <Text style={styles.subTitle}>Các khoản chi từ quỹ chung:</Text>
        {data.expenses.map((expense, index) => (
          <View key={index} style={styles.expenseItem}>
            <Text style={styles.expenseCategory}>{expense.category}:</Text>
            <Text style={styles.expenseAmount}>{expense.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  details: { marginTop: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  subTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  contributionItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  contributionMember: { fontSize: 16 },
  contributionAmount: { fontSize: 16, fontWeight: 'bold', color: '#28A745' },
  expenseItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  expenseCategory: { fontSize: 16 },
  expenseAmount: { fontSize: 16, color: '#FF6B6B', fontWeight: 'bold' },
});

export default GeneralFundScreen;
