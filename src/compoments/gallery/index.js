import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Gallery = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            {/* Organizer */}
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                <View style={styles.eventContainerLeft}>
                    <View>
                        <Text style={styles.Title}>
                            Gallery (Pre-Event)
                        </Text>
                    </View>
                </View>
                <View style={styles.eventContainerRight}>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/singer/1.jpeg')} style={styles.image} resizeMode="cover" />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity >
                        <Image source={require('../../../assets/singer/2.jpg')} style={styles.image} resizeMode="cover" />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainerLast}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/singer/3.jpg')} style={styles.image} resizeMode="cover" />
                        <View style={styles.customPosition}>
                            <Text style={styles.customText}>100 + More</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    eventContainerLeft: {
        paddingLeft: 20,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '70%'
    },
    eventContainerRight: {
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    Title: {
        color: 'black',
        fontSize: 22,
        fontFamily: "UbuntuSans-Light",
        fontWeight: 'bold'
    },
    seeAll: {
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        fontSize: 20,
        fontFamily: "UbuntuSans-Light",
        color: 'blue',
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 25,
        width: 120,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 120,
        marginEnd: 10
    },
    imageContainerLast: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 120,
        marginEnd: 10,
        position: 'relative'
    },
    image: {
        width: 130,
        height: 120,
        borderRadius: 10,
    },
    customPosition: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
    },
    customText: {
        color: 'white',
        fontSize: 16,
        fontFamily: "UbuntuSans-Light",
    }
});

export default Gallery;
