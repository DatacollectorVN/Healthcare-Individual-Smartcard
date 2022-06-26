import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function QRScanner({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [useName, setUseName] = useState("");
  const [scanned, setScanned] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  const [text, setText] = useState('Please scanning the QR Code on smart card!') // text get qr code result
  const existUsers = [
    'Jisoo',
    'User2',
    'User3'
  ]
  const existURL = [
    'https://me-qr.com/RDw90x',
    'codeUser2',
    'codeUser3'
  ]

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // setText(data)
    if (existURL.includes(data)){
      let idx
      idx = existURL.indexOf(data)
      setUseName(existUsers[idx])
    }
    else{
      setUseName("None")
    }
    console.log('Type: ' + type + '\nData: ' + data)
  };

  const handleScanAgain = () => {
    setText('Please scanning the QR Code on smart card!')
    setScanned(false)
  }

  const handleOpenCamera = () => {
    setText('Please scanning the QR Code on smart card!')
    setOpenCamera(true)
  }

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      {(scanned || openCamera) && 
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }} />
        </View>
      }
      {openCamera === false && <Text style={styles.maintext}>{text}</Text> &&
        <Button title={'Open camera'} onPress={handleOpenCamera} color='tomato' />
      }
      {scanned && useName !== "None" && 
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen', {user:useName})} color='tomato'>
        <Text style={styles.buttonText}>Continue with {useName}</Text>
      </TouchableOpacity>
        }
      {scanned && <Button title={'Scan again?'} onPress={handleScanAgain} color='tomato' />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
    alignItems: 'center'
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  button: {
    width:'80%',
    height: 50,
    borderRadius: 6,
    backgroundColor: "#1977f3",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonText: {
    color: "#f8f8ff",
    textAlign: "center",
    fontSize: 16,
  }
});