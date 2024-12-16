import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Dùng Icon từ thư viện Expo (hoặc react-native-vector-icons)
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      {/* Icon Home */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home-outline" size={24} color="#000" />
        <Text style={styles.navText}>Tổng quan</Text>
      </TouchableOpacity>

      {/* Icon Add */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddExpense')}
      >
        <Ionicons name="add" size={28} color="#FFF" />
      </TouchableOpacity>

      {/* Icon Transactions */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Transactions')}
      >
        <Ionicons name="list-outline" size={24} color="#000" />
        <Text style={styles.navText}>Giao dịch</Text>
      </TouchableOpacity>

      {/* Icon Report */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Report')}>
        <Ionicons name="bar-chart-outline" size={24} color="#000" />
        <Text style={styles.navText}>Báo cáo</Text>
      </TouchableOpacity>

      {/* Icon Settings */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings-outline" size={24} color="#000" />
        <Text style={styles.navText}>Tùy chọn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    color: '#28A745',
    marginTop: 2,
  },
  addButton: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default Navbar;
