import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

// Màn hình chi tiết của từng thành viên
const MemberDetailScreen = ({ route }) => {
  const { memberName, contributions, expenses, income } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{memberName}</Text>
      <View style={styles.section}>
        <Text style={styles.title}>Đóng góp</Text>
        <Text style={styles.value}>{contributions.toLocaleString('vi-VN')} Đ</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Khoản chi</Text>
        <Text style={styles.value}>{expenses.toLocaleString('vi-VN')} Đ</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Khoản thu</Text>
        <Text style={styles.value}>{income.toLocaleString('vi-VN')} Đ</Text>
      </View>
    </ScrollView>
  );
};

// Tab Navigator
const Tab = createBottomTabNavigator();

const FamilyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Bố') iconName = 'person';
          if (route.name === 'Mẹ') iconName = 'person';
          if (route.name === 'Con cái') iconName = 'child-care';
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Bố"
        component={MemberDetailScreen}
        initialParams={{
          memberName: 'Bố',
          contributions: 1000000,
          expenses: 500000,
          income: 1500000,
        }}
      />
      <Tab.Screen
        name="Mẹ"
        component={MemberDetailScreen}
        initialParams={{
          memberName: 'Mẹ',
          contributions: 2000000,
          expenses: 1000000,
          income: 2500000,
        }}
      />
      <Tab.Screen
        name="Con cái"
        component={MemberDetailScreen}
        initialParams={{
          memberName: 'Con cái',
          contributions: 500000,
          expenses: 300000,
          income: 700000,
        }}
      />
    </Tab.Navigator>
  );
};

// App chính
export default function App() {
  return (
    <NavigationContainer>
      <FamilyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#e3f2fd',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});
