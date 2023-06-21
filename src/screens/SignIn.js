import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import login from "../../assets/login.png";
import Button from "../components/Button";

export default function SignIn() {
  return (
    <SafeAreaView>
      <Image style={styles.loginImage} source={login} />
      <Text style={styles.loginTitle}>Login</Text>
      <View>
        <TextInput placeholder="Email ID" style={styles.textInput} />
        <TextInput placeholder="Password" style={styles.textInput} />
        <Button
          title="Login"
          customStyles={{ alignSelf: "center", marginTop: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 350,
    height: 250,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  loginTitle: {
    fontSize: 28,
    marginHorizontal: 30,
    marginVertical: 30,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
