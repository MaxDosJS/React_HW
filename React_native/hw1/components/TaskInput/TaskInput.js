import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const TaskInput = ({ addTask }) => {
  const [textInput, setTextInput] = useState("");

  const handleAddTask = () => {
    if (textInput.trim() !== "") {
      addTask(textInput);
      setTextInput("");
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.bottom}>
      <TextInput
        style={[styles.textInput, !textInput && styles.centeredText]}
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
        placeholder="Write a Task"
        placeholderTextColor={"grey"}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addButton}>
          <Icon name="add-sharp" size={32} color="#c0c0c0" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  centeredText: {
    textAlign: "center",
  },

  bottom: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    position: "absolute",
    bottom: 36,
  },

  addButton: {
    borderRadius: 52,
    width: 60,
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    backgroundColor: "white",
    color: "black",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 60,
    width: "80%",
    flexGrow: 1,
  },
});