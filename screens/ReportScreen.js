import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ReportScreen = () => {
  const navigation = useNavigation();
  // Dữ liệu mẫu cho biểu đồ
  const lineChartData = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
    datasets: [
      {
        data: [10000, 20000, 15000, 30000, 40000],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Đường nét
        strokeWidth: 2,
      },
    ],
  };

  const pieChartData1 = [
    { name: 'Đ Ăn uống', population: 1500000, color: '#8B8B00', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Đ Giải trí', population: 1000000, color: '#0f0', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Đ Di chuyển', population: 500000, color: '#66CD00', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  ];

  const pieChartData2 = [
    { name: 'Đ Lương', population: 150000, color: '#8B8B00', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Đ Đầu tư', population: 10000, color: '#0f0', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Đ Thưởng', population: 50000, color: '#66CD00', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="close" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.balance}>4,990,000 Đ</Text>
        <TouchableOpacity>
          <MaterialIcons name="filter-list" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Bộ lọc thời gian */}
      <View style={styles.filterSection}>
        <Text style={styles.filterText}>08/2024</Text>
        <Text style={styles.filterText}>09/2024</Text>
        <Text style={[styles.filterText, styles.activeFilter]}>THÁNG NÀY</Text>
      </View>

      {/* Tổng hợp */}
      <View style={styles.summarySection}>
        <Text style={styles.summaryLabel}>Số dư đầu</Text>
        <Text style={styles.summaryValue}>0 Đ</Text>
        <Text style={styles.summaryLabel}>Số dư cuối</Text>
        <Text style={styles.summaryValue}>4,990,000 Đ</Text>
      </View>

      {/* Thu nhập ròng */}
      <View style={styles.incomeSection}>
        <View style={styles.incomeHeader}>
          <Text style={styles.sectionTitle}>Thu nhập ròng</Text>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => navigation.navigate('NetIncomeDetail')}
          >
            <Text style={styles.linkText}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View>
        <LineChart
          data={lineChartData}
          width={screenWidth - 32}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#f7f7f7',
            backgroundGradientTo: '#f7f7f7',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          formatYLabel={(value) =>
            parseInt(value, 10).toLocaleString('vi-VN') + ' Đ'
          } // Định dạng c
          bezier
          style={{ marginVertical: 10 }}
        />
      </View>

      {/* Khoản chi */}
      <View style={styles.expenseSection}>
        <View style={styles.incomeHeader}>
          <Text style={styles.sectionTitle}>Khoản chi</Text>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => navigation.navigate('ExpenseDetailsScreen')}
          >
            <Text style={styles.linkText}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View>
        <PieChart
          data={pieChartData1}
          width={screenWidth - 32}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
       {/* Khoản chi */}
       <View style={styles.expenseSection}>
        <View style={styles.incomeHeader}>
          <Text style={styles.sectionTitle}>Khoản thu</Text>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => navigation.navigate('IncomingDetailsScreen')}
          >
            <Text style={styles.linkText}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View>
        <PieChart
          data={pieChartData2}
          width={screenWidth - 32}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7', padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  balance: { fontSize: 32, fontWeight: 'bold', color: '#000' },
  filterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterText: { fontSize: 14, color: '#888' },
  activeFilter: { fontWeight: 'bold', color: '#000' },
  summarySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  summaryLabel: { fontSize: 14, color: '#888' },
  summaryValue: { fontSize: 16, fontWeight: 'bold' },
  incomeSection: { marginBottom: 20 },
  incomeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  linkText: { color: '#6b52ae', fontSize: 14 },
  expenseSection: { marginBottom: 20 },
});

export default ReportScreen;
