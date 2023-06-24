import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({ placeholder, secureTextInput }) {
  return <TextInput placeholder={placeholder} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
