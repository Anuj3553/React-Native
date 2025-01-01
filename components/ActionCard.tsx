import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebSite(websiteLink: string) {
        Linking.openURL(websiteLink); // Linking is used to open URLs in the browser
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in JavaScript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        JavaScript is one of the most popular programming languages in the world. It is a versatile language that is used for web development, game development, mobile app development, and more.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebSite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
                    >
                        <Text style={styles.socialLinks}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebSite('https://www.instagram.com/hiteshchoudharyofficial/')}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    elevatedCard: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardImage: {
        width: '100%',
        height: 170,
        borderRadius: 10,
        marginTop: 10,
    },
    bodyContainer: {
        marginTop: 10,
    },
    footerContainer: {
        marginTop: 10,
    },
    socialLinks: {
        color: 'blue',
        fontSize: 16,
        margin: 5,
    },
});
