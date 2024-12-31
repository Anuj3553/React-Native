import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'; // true if dark mode is enabled

    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.lightText : styles.darkText}>Hello Anuj 🌍</Text>
        </View>
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

export default AppPro;
