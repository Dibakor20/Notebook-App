import React, { useState } from "react";
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
import Input from "../components/Input";

const genderOption = ['Male', 'Female']

export default function SignUp({ navigation }) {
  const [gender, setGender] = useState(null)
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
        {/* <KeyboardAvoidingView behavior="padding"> */}
        <Text style={styles.loginTitle}>Sign Up</Text>
        <Input placeholder="Full Name" style={styles.textInput} />
        <Input placeholder="Email ID" style={styles.textInput} />
        <Input placeholder="Password" style={styles.textInput} />
        <Input placeholder="Confirm Password" style={styles.textInput} />
      <View style={{marginLeft:30, marginTop:20,marginBottom:10}}>
        <Text>Select Gender</Text>
        </View>
        {
          genderOption.map((option) => {
            const selected = option == gender
            return (
              <>
            <Pressable style={styles.radioContent} onPress={()=>setGender(option)} key={option}>
                  <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                      <View style={[styles.innerCircle,selected && styles.selectedInnerCircle]}/>
                  </View>
              <Text style={styles.radioText}>{option}</Text>
        </Pressable>
          </>
            )
          })
        }
              
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
  );
}

const styles = StyleSheet.create({

  loginTitle: {
    fontSize: 28,
    marginHorizontal: 30,
    marginVertical: 30,
  },

  bottomContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 40,
    },
    radioContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      marginLeft: 30,
    },
    outerCircle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderColor: '#cfcfcf',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    innerCircle: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        borderColor: '#cfcfcf',
        borderWidth: 1,   
    },
    radioText: {
        marginLeft:10,
  },
  selectedOuterCircle: {
    borderColor:'yellow',
  },
  selectedInnerCircle: {
    backgroundColor:'yellow'
  }
});
