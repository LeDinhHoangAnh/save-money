import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";


const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Trần Hữu Quang</Text>
        <Text style={styles.userEmail}>tranboyta@gmail.com</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
        <Icon name="account-balance-wallet" size={24} />
          <Text style={styles.menuText}>Ví của tôi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} 
        onPress={() => navigation.navigate('ChatScreen')}>
          <Icon name="account-balance-wallet" size={24} />
          <Text style={styles.menuText}>Trợ thủ tài chính</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="group" size={24} />
          <Text style={styles.menuText}>Nhóm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="event" size={24} />
          <Text style={styles.menuText}>Sự kiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="settings" size={24} />
          <Text style={styles.menuText}>Cài đặt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="logout" size={24} />
          <Text style={styles.menuText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    marginLeft: 10,
  },
});

export default ProfileScreen;