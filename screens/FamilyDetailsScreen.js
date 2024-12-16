import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FamilyDetailsScreen = () => {
  const [selectedMember, setSelectedMember] = useState('Bố');
  const navigation = useNavigation();

  // Dữ liệu mẫu cho thành viên
  const data = {
    Bố: {
      contribution: '1,000,000 Đ',
      transactions: [
        { type: 'Thu', category: 'Lương', amount: '5,000,000 Đ' },
        { type: 'Chi', category: 'Ăn uống', amount: '1,000,000 Đ' },
      ],
    },
    Mẹ: {
      contribution: '1,500,000 Đ',
      transactions: [
        { type: 'Thu', category: 'Kinh doanh', amount: '3,000,000 Đ' },
        { type: 'Chi', category: 'Giải trí', amount: '500,000 Đ' },
      ],
    },
    'Con cái': {
      contribution: '200,000 Đ',
      transactions: [
        { type: 'Chi', category: 'Học phí', amount: '2,000,000 Đ' },
      ],
    },
  };

  const selectedData = data[selectedMember];
  const totalContribution = Object.values(data)
    .map((member) => parseInt(member.contribution.replace(' Đ', '').replace(',', ''), 10))
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {Object.keys(data).map((member) => (
          <TouchableOpacity
            key={member}
            style={[styles.tab, selectedMember === member && styles.activeTab]}
            onPress={() => setSelectedMember(member)}
          >
            <Text
              style={[styles.tabText, selectedMember === member && styles.activeTabText]}
            >
              {member}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.details}>
        <View style={styles.contribution}>
          <Text style={styles.contributionText}>
            Đóng góp vào quỹ chung: {selectedData.contribution}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('GeneralFundScreen')}
          
        >
          <Text style={styles.viewFundText}>Xem quỹ chung</Text>
        </TouchableOpacity>
        {selectedData.transactions.map((item, index) => (
          <View key={index} style={styles.detailItem}>
            <Text style={styles.detailCategory}>{item.category}</Text>
            <Text style={styles.detailType}>{item.type}</Text>
            <Text
              style={[
                styles.detailAmount,
                item.type === 'Chi' ? styles.expenseAmount : styles.incomeAmount,
              ]}
            >
              {item.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  tabs: { flexDirection: 'row', justifyContent: 'space-around', padding: 10 },
  tab: { padding: 10, borderBottomWidth: 2, borderBottomColor: '#ccc' },
  activeTab: { borderBottomColor: '#FF6B6B' },
  tabText: { fontSize: 16, color: '#888' },
  activeTabText: { color: '#FF6B6B', fontWeight: 'bold' },
  details: { padding: 16 },
  contribution: { marginBottom: 20 },
  contributionText: { fontSize: 16, color: '#4CAF50', fontWeight: 'bold' },
  viewFundButton: { marginTop: 10, padding: 10, backgroundColor: '#6b52ae', borderRadius: 8 },
  viewFundText: {  color: "#6b52ae", fontSize: 16,marginBottom: 10, textAlign: 'center' },
  detailItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  detailCategory: { fontSize: 16, flex: 1 },
  detailType: { fontSize: 14, color: '#888', flex: 1 },
  detailAmount: { fontSize: 16, fontWeight: 'bold', flex: 1 },
  expenseAmount: { color: '#FF6B6B' },  // Màu đỏ cho chi
  incomeAmount: { color: '#28A745' },      // Màu đen cho thu
});

export default FamilyDetailsScreen;
