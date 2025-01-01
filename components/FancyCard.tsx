import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=t0ko7jh9zongS9G3f7pzApnMnoO4beCaXlEMwiR1Bc8=',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Taj Mahal</Text>
                    <Text style={styles.cardLabel}>Agra, India</Text>
                    <Text style={styles.cardDesription}>Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.
                    </Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
            </View>
        </View>
        </View >
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 23,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {},
    cardElevated: {
        padding: 8,
        elevation: 4,
    },
    cardImage: {
        height: 250,
    },
    cardBody: {
        padding: 8,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardLabel: {
        fontSize: 16,
        color: '#666',
    },
    cardDesription: {
        fontSize: 16,
        color: '#666',
    },
    cardFooter: {
        fontSize: 16,
        color: '#666',
    },
});
