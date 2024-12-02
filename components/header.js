import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    // здесь будут стили для основного контейнера
  },
  text: {
    // здесь будут стили для текста
  },
});