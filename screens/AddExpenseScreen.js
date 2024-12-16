import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Modal,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddExpenseScreen = ({ navigation, route }) => {
  const [amount, setAmount] = useState('0');
  const [note, setNote] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('Chọn nhóm');
  const [date, setDate] = useState(new Date()); // Ngày mặc định là hôm nay
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Cập nhật nhóm từ ExpenseGroupScreen (nếu có)
  React.useEffect(() => {
    if (route.params?.selectedGroup) {
      setSelectedGroup(route.params.selectedGroup);
    }
  }, [route.params?.selectedGroup]);

  // Hàm xử lý số trên bàn phím
  const handleNumberPress = (value) => {
    if (value === 'C') {
      setAmount('0');
    } else if (value === 'X') {
      setAmount(amount.length > 1 ? amount.slice(0, -1) : '0');
    } else {
      setAmount(amount === '0' ? value : amount + value);
    }
  };

  // Hàm hiển thị ngày dạng chữ
  const formatDate = (date) => {
    return date.toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Hàm xử lý lưu chi tiêu
  const handleSave = () => {
    const numericAmount = parseInt(amount);
    if (!numericAmount || numericAmount <= 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập số tiền hợp lệ!');
      return;
    }

    if (selectedGroup === 'Chọn nhóm') {
      Alert.alert('Lỗi', 'Vui lòng chọn nhóm chi tiêu!');
      return;
    }
    // Xử lý lưu dữ liệu (tạm thời chỉ hiển thị thông báo thành công)
    Alert.alert(
      'Thành công',
      'Chi tiêu của bạn đã được lưu!',
      [{ text: 'OK', onPress: () => navigation.goBack() }],
      { cancelable: false }
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.content}>
        {/* Số tiền */}
        <View style={styles.inputRow}>
          <Text style={styles.currencyLabel}>VND</Text>
          <Text style={styles.amount}>{parseInt(amount).toLocaleString()}</Text>
        </View>

        {/* Chọn nhóm */}
        <TouchableOpacity
          style={styles.groupRow}
          onPress={() => navigation.navigate('ExpenseGroupScreen')}
        >
          <Text style={styles.label}>{selectedGroup}</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>

        {/* Ghi chú */}
        <View style={styles.noteRow}>
          <TextInput
            style={styles.input}
            placeholder="Ghi chú"
            value={note}
            onChangeText={(text) => setNote(text)}
          />
        </View>

        {/* Ngày */}
        <TouchableOpacity
          style={styles.dateRow}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.label}>{formatDate(date)}</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>

        {/* Nút lưu */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Lưu</Text>
        </TouchableOpacity>

        {/* Bàn phím số */}
        <View style={styles.numberPad}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '000', 'C', 'X'].map((value, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.numberButton,
                value === 'X' ? styles.confirmButton : value === 'C' ? styles.cancelButton : null,
              ]}
              onPress={() => handleNumberPress(value)}
            >
              <Text
                style={[
                  styles.numberText,
                  value === 'X' || value === 'C' ? styles.actionButtonText : null,
                ]}
              >
                {value === 'X' ? 'XONG' : value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Hiển thị DatePicker nếu cần */}
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false); // Ẩn picker sau khi chọn
              if (selectedDate) setDate(selectedDate); // Cập nhật ngày được chọn
            }}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    padding: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  currencyLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  groupRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingVertical: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 16,
    color: '#AAA',
  },
  noteRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    paddingVertical: 5,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingVertical: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#28A745',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: -5,
  },
  numberButton: {
    width: '30%',
    margin: 5,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
  },
  numberText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#4CD964',
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
  },
  actionButtonText: {
    color: '#FFF',
  },
});

export default AddExpenseScreen;
