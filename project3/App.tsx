import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  // Generate random color
  const generateRandomColor = () => {
    const hexRange = '0123456789ABCDEF'; // Hexadecimal color range
    let color = '#'; // Hexadecimal color starts with #

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]; // Random color
    }

    setRandomBackground(color); // Set random color
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />

      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateRandomColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Click me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnText: {
    color: '#fff',
    fontSize: 24,
    textTransform: 'uppercase',
  },
});

export default App;
