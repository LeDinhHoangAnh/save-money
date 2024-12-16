import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const NetIncomeDetailScreen = () => {
  // Dữ liệu giả lập cho biểu đồ
  const data = {
    labels: ['1-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [
      {
        data: [0, 50000, 0, 10000, 0],
        colors: [
          () => `#FF0000`,
          () => `#007AFF`,
          () => `#FFD700`,
          () => `#32CD32`,
          () => `#8A2BE2`,
        ], // Tùy chọn màu sắc cho từng cột
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>08/2024 - 09/2024</Text>
      <Text style={styles.sectionTitleHighlight}>Tháng này</Text>

      <View style={styles.incomeSummary}>
        <Text style={styles.summaryLabel}>Tổng cộng</Text>
        <Text style={styles.summaryValue}>4,990,000 Đ</Text>
      </View>

      {/* Biểu đồ cột */}
      <View style={styles.chartContainer}>
      <BarChart
  data={data}
  width={screenWidth - 32}
  height={220}
  yAxisLabel=""
  yAxisSuffix=" Đ"
  chartConfig={{
    backgroundColor: '#f2f2f2',
    backgroundGradientFrom: '#f2f2f2',
    backgroundGradientTo: '#f2f2f2',
    decimalPlaces: 0, // Không hiển thị số thập phân
    color: (opacity = 1) => `rgba(107, 82, 174, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: { borderRadius: 16 },
    barPercentage: 0.5,
  }}
  verticalLabelRotation={30}
  formatYLabel={(value) =>
    parseInt(value, 10).toLocaleString('vi-VN') + ' đ'
  } // Định dạng cột Y
/>

      </View>

      {/* Dữ liệu theo ngày */}
      <View style={styles.dataRow}>
        <Text>1-3</Text>
        <Text style={styles.incomeText}>0 Đ</Text>
      </View>
      <View style={styles.dataRow}>
        <Text>4-10</Text>
        <Text style={styles.incomeText}>5,000,000 Đ</Text>
      </View>
      <View style={styles.dataRow}>
        <Text>11-17</Text>
        <Text style={styles.incomeText}>0 Đ</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
  sectionTitle: { fontSize: 16, marginTop: 10, color: '#999' },
  sectionTitleHighlight: { fontSize: 16, marginTop: 5, color: 'black', fontWeight: 'bold' },
  incomeSummary: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' },
  summaryLabel: { fontSize: 16 },
  summaryValue: { fontSize: 16, fontWeight: 'bold', color: 'black' },
  chartContainer: { marginTop: 20, borderRadius: 16, overflow: 'hidden' },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#28A745',
    fontWeight: 'bold'
  },
  incomeText:{
    color: '#28A745',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default NetIncomeDetailScreen;
