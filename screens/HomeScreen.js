import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BarChart } from 'react-native-chart-kit';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Dữ liệu ví dụ
  const familyData = [
    {
      name: 'Bố',
      contribution: 1000000,
      spent: 300000,
      balance: 700000,
    },
    {
      name: 'Mẹ',
      contribution: 2000000,
      spent: 1000000,
      balance: 1000000,
    },
    {
      name: 'Con cái',
      contribution: 500000,
      spent: 200000,
      balance: 300000,
    },
  ];

  const data = {
    labels: ['Ăn uống', 'Giải trí', 'Đi lại', 'Khác'],
    datasets: [
      {
        data: [10000, 5000, 2000, 3000],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      {/* Tổng số dư */}
      <View style={styles.header}>
        <Text style={styles.balance}>Số dư</Text>
        <Text style={styles.amount}>4,990,000 Đ</Text>
        <MaterialIcons
          name="notifications-none"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>

      {/* Ví của tôi */}
      <View style={styles.walletSection}>
        <View style={styles.collab}>
          <Text style={styles.sectionTitle}>Ví của tôi</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.walletItem}>
          <MaterialIcons name="account-balance-wallet" size={24} color="black" />
          <Text style={styles.walletText}>Tiền mặt</Text>
          <Text style={styles.walletAmount}>5,000,000 Đ</Text>
        </View>
      </View>

      {/* Báo cáo tháng */}
      <View style={styles.reportSection}>
        <View style={styles.collab}>
          <Text style={styles.sectionTitle}>Báo cáo tháng này</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Report')}
          >
            <Text style={styles.linkText}>Xem báo cáo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.reportSummary}>
          <View style={styles.reportItem}>
            <Text style={styles.reportLabel}>Tổng đã chi</Text>
            <Text style={styles.reportValue}>10,000 Đ</Text>
          </View>
          <View style={styles.reportItem}>
            <Text style={styles.reportLabel}>Tổng đã thu</Text>
            <Text style={styles.reportValue}>5,000,000 Đ</Text>
          </View>
        </View>

        {/* Biểu đồ chi tiêu */}
        <View style={styles.chartContainer}>
          <BarChart
            data={data}
            width={350}
            height={300}
            yAxisLabel=""
            yAxisSuffix=" Đ"
            chartConfig={{
              backgroundColor: '#f2f2f2',
              backgroundGradientFrom: '#f2f2f2',
              backgroundGradientTo: '#f2f2f2',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(107, 82, 174, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: { borderRadius: 16 },
              barPercentage: 0.5,
            }}
            verticalLabelRotation={30}
            formatYLabel={(value) =>
              parseInt(value, 10).toLocaleString('vi-VN') + ' đ'
            }
          />
        </View>
      </View>

      {/* Thành viên trong gia đình */}
{/* Thành viên trong gia đình */}
<View style={styles.familySection}>
  <View style={styles.collab}>
    <Text style={styles.sectionTitle}>Thành viên trong gia đình</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('FamilyDetailsScreen')}
    >
      <Text style={styles.linkText}>Xem chi tiết</Text>
    </TouchableOpacity>
  </View>

  {familyData.map((member, index) => (
    <View key={index} style={styles.familyItem}>
      <MaterialIcons name="person" size={24} color="black" />
      <View style={styles.familyDetails}>
        <Text style={styles.familyName}>{member.name}</Text>
        <Text style={styles.familyContribution}>
          Đóng góp: {member.contribution.toLocaleString('vi-VN')} Đ
        </Text>
        <Text style={styles.familySpent}>
          Đã chi: {member.spent.toLocaleString('vi-VN')} Đ
        </Text>
        <Text style={styles.familyBalance}>
          Số dư: {member.balance.toLocaleString('vi-VN')} Đ
        </Text>
      </View>
    </View>
  ))}
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7', padding: 16 },
  header: { marginBottom: 20 },
  balance: { fontSize: 16, color: '#888' },
  amount: { fontSize: 32, fontWeight: 'bold' },
  icon: { position: 'absolute', right: 0, top: 10 },
  walletSection: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  linkText: { color: '#6b52ae', fontSize: 14 },
  walletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fce4ec',
    padding: 10,
    borderRadius: 8,
  },
  collab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  walletText: { flex: 1, marginLeft: 10, fontSize: 16 },
  walletAmount: { fontSize: 16, fontWeight: 'bold' },
  reportSection: { marginBottom: 20 },
  reportSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  reportItem: { alignItems: 'center' },
  reportLabel: { fontSize: 14, color: '#888' },
  reportValue: { fontSize: 16, fontWeight: 'bold' },
  chartContainer: { alignItems: 'center', marginVertical: 20 },
  familySection: { marginBottom: 20 },
  familyItem: {
    backgroundColor: '#e3f2fd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  familyDetails: { marginLeft: 10, flex: 1 },
  familyName: { fontSize: 16, fontWeight: 'bold' },
  familyContribution: { fontSize: 14, color: '#28A745',fontWeight: 'bold' },
  familySpent: { fontSize: 14, color: '#FF6B6B',fontWeight: 'bold' },
  familyBalance: { fontSize: 14, color: '#888', marginTop: 5,fontWeight: 'bold'},
});

export default HomeScreen;
