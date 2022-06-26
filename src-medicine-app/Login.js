import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { StatusBar } from "expo-status-bar";
import BannerImage from "../assets/BME.jpg";
export default function Login({navigation}) {
  const [typeScanner, SetTypeScanner] = useState('');
  const onPressHandler = () => {
    navigation.navigate('QRScanner', [typeScanner]);
  }
  return (
    <>
      <StatusBar style="light" />
      <Image source={BannerImage} style={styles.banner} />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.button}
            onPress={onPressHandler}
          >
            <Text style={styles.buttonText}>Scanning QR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    resizeMode: "contain",
    width: "100%",
    height: null,
    aspectRatio: 750 / 460, // Image ratio
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    alignItems: "center",
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcf",
    color: "#333333",
    fontSize: 16,
    height: 44,
    paddingHorizontal: 15,
  },
  inputUsername: {
    borderBottomWidth: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  inputPassword: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  button: {
    height: 42,
    width:'80%',
    borderRadius: 6,
    backgroundColor: "#1977f3",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonText: {
    color: "#f8f8ff",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    paddingVertical: 8,
  },
  linkText: {
    color: "#1c6ede",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    padding: 22,
    paddingBottom: 0,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 10,
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#cbccd0",
  },
  dividerText: {
    width: 50,
    textAlign: "center",
  },
  buttonRegister: {
    width: "100%",
    backgroundColor: "#e7f3ff",
  },
  buttonRegisterText: {
    color: "#1077f7",
  },
});
