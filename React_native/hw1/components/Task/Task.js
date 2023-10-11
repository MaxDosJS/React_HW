import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Task = ({ index, taskText, deleteTask }) => {
  return (
    <TouchableOpacity onPress={deleteTask} style={styles.container}>
      <View style={styles.left}>
        <View style={styles.square} />
        <Text style={styles.text}>{taskText}</Text>
      </View>
      <View style={styles.right} />
    </TouchableOpacity>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    borderRadius: 5,
    opacity: 0.4,
    marginRight: 15,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  right: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },

  text: {
    fontSize: 14,
  },
});