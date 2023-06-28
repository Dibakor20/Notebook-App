import { StatusBar } from 'expo-status-bar';
import { initializeApp } from "firebase/app";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRAviTUgMLUO-VSc1zxwxEGnE89CMs-eg",
  authDomain: "notebook-app-29440.firebaseapp.com",
  projectId: "notebook-app-29440",
  storageBucket: "notebook-app-29440.appspot.com",
  messagingSenderId: "54630571494",
  appId: "1:54630571494:web:1b93a8ac1956a12bea4a27" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
