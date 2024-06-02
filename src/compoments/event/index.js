import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

export default function EventComponent() {
    const images = [
        require('../../../assets/face/1.jpg'),
        require('../../../assets/face/1.jpg'),
        require('../../../assets/face/1.jpg'),
        require('../../../assets/face/1.jpg'),
        require('../../../assets/face/1.jpg'),
        require('../../../assets/face/1.jpg')
    ]
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.eventContainer}>

                {/* Event header */}
                <View>
                    <Text style={styles.eventTitle}>
                        National Musical Festival
                    </Text>
                </View>

                <View style={styles.eventSummary}>
                    <Text style={styles.musicLabel}>
                        Music
                    </Text>
                    <View style={styles.peopleFace}>
                        <FlatList
                            data={images}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={[styles.imageContainer, { marginLeft: index === 0 ? 0 : -20 }]}>
                                        <TouchableOpacity disabled={true} style={styles.imageWrapper}>
                                            <Image source={item} style={styles.image} resizeMode="cover" />
                                        </TouchableOpacity>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <Text style={styles.peopleGoingLabel}>
                        20,000+ going 
                    </Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    eventContainer: {
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    eventTitle: {
        color: 'black',
        fontSize: 30,
        fontFamily: "UbuntuSans-Light",
    },
    eventSummary: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    musicLabel: {
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 40,
        borderColor: 'blue',
        borderWidth: 1,
        width: '20%',
        borderRadius: 5,
        color: 'blue',
        fontFamily: "UbuntuSans-Light",
    },
    peopleFace: {
        height: 50,
        justifyContent: 'center',
        padding: 2,
        marginStart: 20,
        marginEnd: 20
    },
    peopleGoingLabel: {
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 40,
        color: 'black',
        fontSize: 18,
        fontFamily: "UbuntuSans-Light",
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
});
