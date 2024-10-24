import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ToDoForm from './src/ToDoForm'; // Importing ToDoForm from src directory

export default function App() {
  const [taskList, setTaskList] = useState([]);

  // Function to handle adding a new task
  const handleAddTask = (newTask) => {
    if (newTask && !taskList.includes(newTask)) {
      setTaskList([...taskList, newTask]);
    }
  };

  return (
    <View style={styles.container}>
      <ToDoForm onAddTask={handleAddTask} />
      {taskList.length > 0 && (
        <View style={styles.taskList}>
          {taskList.map((task, index) => (
            <Text key={index} style={styles.taskItem}>
              {task}
            </Text>
          ))}
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  taskList: {
    marginTop: 20,
    width: '100%',
  },
  taskItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'left',
  },
});
