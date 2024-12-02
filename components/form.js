import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  }
});

export default function Form({ addHandler }) {
  const [text, setValue] = useState('');
  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Впишите задачу..."
      />
      <Button
        color='#000000'
        onPress={() => {
          if (text.trim()) {
            addHandler(text);
            setValue(''); // Очищаем поле после добавления
          }
        }}
        title="Добавить задачу"
      />
    </View>
  );
}