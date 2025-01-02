import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Steve Jobs',
            status: 'Stay hungry, Stay foolish',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
        },
        {
            uid: 3,
            name: 'Elon Musk',
            status: 'Future is bright',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/330px-Elon_Musk_Royal_Society_crop.jpg',
        },
        {
            uid: 4,
            name: 'Bill Gates',
            status: "Don't compare yourself",
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bill_Gates%2C_September_2024.jpg/330px-Bill_Gates%2C_September_2024.jpg',
        },
        {
            uid: 5,
            name: 'Jeff Bezos',
            status: 'Work hard, have fun, make history',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/300px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg',
        },
        {
            uid: 6,
            name: 'Mark Zuckerberg',
            status: 'Move fast and break things',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                scrollEnabled={false}
                style={styles.container}
            >
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl,
                            }}
                            style={styles.userImage}
                        />
                        <View style={styles.userDetails}>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#C4DEF6',
        padding: 8,
        borderRadius: 10,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14,
    },
    userDetails: {
        marginLeft: 12,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    userStatus: {
        fontSize: 12,
        color: '#666',
    },
});
