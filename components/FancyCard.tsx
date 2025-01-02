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
                    <Text style={styles.cardDesription}>Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.
                    </Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        height: 350,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#fff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000',
        fontWeight: '300',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDesription: {
        color: '#242B2E',
        fontSize: 15,
        marginTop: 4,
        marginBottom: 12,
        flexShrink: 1,
    },
    cardFooter: {
        fontSize: 12,
        color: '#000',
    },
});
