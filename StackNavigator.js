import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ReportScreen from "./screens/ReportScreen";
import NetIncomeDetailScreen from "./screens/NetIncomeDetailScreen";
import ExpenseDetailsScreen from "./screens/ExpenseDetailsScreen";
import IncomingDetailsScreen from "./screens/IncomingDetailsScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import TransactionScreen from "./screens/TransactionScreen";
import ExpenseGroupScreen from "./screens/ExpenseGroupScreen";
import ChatScreen from "./screens/ChatScreen";
import BudgetSuggestionScreen from "./screens/BudgetSuggestionScreen";
import HistoryMoney from "./screens/HistoryMoney";
import MemberDetailsScreen from "./screens/MemberDetailsScreen";
import FamilyDetailsScreen from "./screens/FamilyDetailsScreen";
import GeneralFundScreen from "./screens/GeneralFundScreen";
const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Tổng quan",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={30} color="#28A745" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Transaction"
          component={TransactionScreen}
          options={{
            tabBarLabel: "Giao dịch",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="reader" size={30} color="#28A745" />
              ) : (
                <Ionicons name="reader-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="AddExpense"
          component={AddExpenseScreen}
          options={{
            tabBarLabel: "Thêm chi tiêu",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="add-circle" size={30} color="#28A745" />
              ) : (
                <Ionicons name="add-circle-outline" size={28} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={HistoryMoney}
          options={{
            tabBarLabel: "Lịch sử",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="receipt" size={24} color="#28A745" />
              ) : (
                <Ionicons name="receipt-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Cá nhân",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#28A745" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Trợ thủ tài chính" component={BottomTabs} options={{headerShown:true}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
      
      <Stack.Screen 
          name="Home" 
          component={HomeScreen}          
          options={{ title: 'Trang chủ', headerShown:true }}
        />
        <Stack.Screen 
          name="Report" 
          component={ReportScreen} 
          options={{ title: 'Xem báo cáo' }}
        />
         <Stack.Screen 
          name="NetIncomeDetail" 
          component={NetIncomeDetailScreen} 
          options={{ title: 'Chi tiết thu nhập ròng' }} 
        />
          <Stack.Screen 
          name="ExpenseDetailsScreen" 
          component={ExpenseDetailsScreen} 
          options={{ title: 'Chi tiết khoản chi' }} 
        />
          <Stack.Screen 
          name="IncomingDetailsScreen" 
          component={IncomingDetailsScreen} 
          options={{ title: 'Chi tiết khoản thu' }} 
        />
          <Stack.Screen 
          name="TransactionScreen" 
          component={TransactionScreen} 
          options={{ title: 'Chi tiết giao dịch' }} 
        />
          <Stack.Screen 
          name="ExpenseGroupScreen" 
          component={ExpenseGroupScreen} 
          options={{ title: 'Thêm chi tiêu' }} 
        />
          <Stack.Screen 
          name="ChatScreen" 
          component={ChatScreen} 
          options={{ title: 'Trợ thủ tài chính' }} 
        />
          <Stack.Screen 
          name="BudgetSuggestionScreen" 
          component={BudgetSuggestionScreen} 
          options={{ title: 'Gợi ý' }} 
        /> 
          <Stack.Screen 
          name="MemberDetailsScreen" 
          component={MemberDetailsScreen} 
          options={{ title: 'Chi tiết thành viên' }} 
        />

          <Stack.Screen 
          name="FamilyDetailsScreen" 
          component={FamilyDetailsScreen} 
          options={{ title: 'Chi tiết thành viên' }} 
        />

          <Stack.Screen 
          name="GeneralFundScreen" 
          component={GeneralFundScreen} 
          options={{ title: 'Chi tiết quỹ chung' }} 
        />


        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default StackNavigator;
// const styles = StyleSheet.create({
//   addButton: {
//     position: "absolute",
//     bottom: 10,
//     alignSelf: "center",
//     backgroundColor: "#007AFF",
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//   },
// });
