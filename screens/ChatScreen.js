import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";



const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Moni</Text>
        <Text style={styles.headerSubtitle}>
          Chào Quang, mình là trợ lí Moni của riêng bạn
        </Text>
      </View>

      {/* Chat area */}
      <ScrollView style={styles.chatArea}>
        <View style={styles.botMessage}>
          <Text style={styles.botMessageText}>
            Chào bạn 👋, mình là trợ lý Moni. Mình có thể giúp gì để chi tiêu
            hiệu quả hơn?
          </Text>
        </View>
      </ScrollView>

      {/* Button options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={[styles.optionButton, styles.optionGreen]} onPress={() => navigation.navigate('BudgetSuggestionScreen')}>
          <Text style={styles.optionText}>
            Ngân sách của mình còn lại bao nhiêu?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionButton, styles.optionBlue]}>
          <Text style={styles.optionText}>
            Ghi chép chi tiêu nhanh giúp mình
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionButton, styles.optionRed]}>
          <Text style={styles.optionText}>
            Mình chi tiêu có hiệu quả không?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionButton, styles.optionYellow]}>
          <Text style={styles.optionText}>
            Nợ càng nhiều, thu nhập càng cao?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Input area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tin nhắn của bạn..."
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  header: {
    backgroundColor: "#FFF",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#AAA",
    textAlign: "center",
    marginTop: 4,
  },
  chatArea: {
    flex: 1,
    padding: 16,
  },
  botMessage: {
    backgroundColor: "#E8EAF6",
    padding: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  botMessageText: {
    fontSize: 14,
    color: "#333",
  },
  optionsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  optionButton: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
  },
  optionGreen: {
    backgroundColor: "#A5D6A7",
  },
  optionBlue: {
    backgroundColor: "#90CAF9",
  },
  optionRed: {
    backgroundColor: "#EF9A9A",
  },
  optionYellow: {
    backgroundColor: "#FFF59D",
  },
  optionText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    backgroundColor: "#FFF",
    padding: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    backgroundColor: "#F9F9F9",
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  sendButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ChatScreen;
