import React from "react";
import { View, FlatList } from "react-native";
import Task from "../Task/Task";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ index, item }) => {
          return (
            <Task
              index={index}
              taskText={item}
              deleteTask={() => deleteTask(index)}
            />
          );
        }}
      />
    </View>
  );
};

export default TaskList;
