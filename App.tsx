import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  useColorScheme,
  StyleSheet,
} from 'react-native';

function App(): JSX.Element {

  const isDarkMode = useColorScheme() === 'dark'; // true if dark mode is enabled

  function alert(message: string) {
    Alert.alert('Alert', message);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.lightText : styles.darkText}>Hello World 🌍</Text>
        <Text style={isDarkMode ? styles.lightText : styles.darkText}>Hello World 🌍</Text>
        <Text style={isDarkMode ? styles.lightText : styles.darkText}>Hello World 🌍</Text>
        <Text style={isDarkMode ? styles.lightText : styles.darkText}>Hello World 🌍</Text>
        <Text style={isDarkMode ? styles.lightText : styles.darkText}>Hello World 🌍</Text>
        <Button title="Click me" onPress={() => alert('Button clicked')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});

export default App;
