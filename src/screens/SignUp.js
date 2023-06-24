import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Pressable,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import login from "../../assets/login.png";
  import Button from "../components/Button";


export default function SignUp() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
      {/* <KeyboardAvoidingView behavior="padding"> */}
      <Image style={styles.loginImage} source={login} />
            <Text style={styles.loginTitle}>Sign Up</Text>
            <TextInput placeholder="Full Name" style={styles.textInput} />
      <TextInput placeholder="Email ID" style={styles.textInput} />
            <TextInput placeholder="Password" style={styles.textInput} />
            <TextInput placeholder="Confirm Password" style={styles.textInput} />
      <Button
        title="Sign Up"
        customStyles={{ alignSelf: "center", marginTop: 20 }}
      />
      <View style={styles.bottomContent}>
        <Pressable
         onPress={() => {
          navigation.navigate("SignIn");
        }}
        >
          <Text>
            Already have an account?{" "}
            <Text style={{ color: "green", fontWeight: "600" }}>Sign In</Text>
          </Text>
        </Pressable>
      </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
    )
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
    bottomContent: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
  });
  