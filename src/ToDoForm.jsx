import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

export default function ToDoForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  // Function to handle form submission
  const submitTask = () => {
    onAddTask(taskText);  // Trigger task addition in the parent
    setTaskText('');      // Clear the input field after submission
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={submitTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: '100%',
  },
});
