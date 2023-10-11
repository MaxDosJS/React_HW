import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import Task from './components/Task/Task';
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const storage = await AsyncStorage.getItem("tasks");
      if (storage) {
        setTasks(JSON.parse(storage));
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    })();
  }, [tasks]);

  const addTask = (textInput) => {
    if (textInput.trim() !== "") {
      const newTasks = [...tasks, textInput];
      setTasks(newTasks);
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, curIndex) => curIndex !== index);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.heading}>Today's tasks</Text>

        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
      >
        <TaskInput addTask={addTask} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    paddingHorizontal: 20,
    paddingTop: 94,
    paddingBottom: 12,
  },

  top: {
    flex: 1,
    marginBottom: 30,
  },
});
