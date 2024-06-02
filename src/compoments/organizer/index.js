import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const Organizer = () => {
    return (

        <View style={{ flex: 1, flexDirection: 'column' }}>

            {/* Organizer */}
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                <View style={styles.eventContainerLeft}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity disabled={true} style={styles.imageWrapper}>
                            <Image source={require('../../../assets/event/organizer.jpg')} style={styles.image} resizeMode="cover" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.eventContainerRight}>
                    <View>
                        <Text style={styles.Title}>
                            World of Music
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.organizer}>
                            Organizer
                        </Text>
                    </View>

                </View>
                <View style={styles.eventContainerLeft}>
                    <TouchableOpacity>
                        <Text style={styles.follow}>
                            Follow
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>



            {/* Organizer */}
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>

                <View style={styles.eventContainerRight}>
                    <View>
                        <Text style={styles.Title}>
                            About Event
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.organizer}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.readmore}>
                            Read more...
                            </Text>    
                        </TouchableOpacity>
                        
                    </View>

                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    eventContainerLeft: {
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    eventContainerRight: {
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    Title: {
        color: 'black',
        fontSize: 22,
        fontFamily: "UbuntuSans-Light",
        fontWeight: 'bold'
    },
    organizer: {
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        fontSize: 18,
        color: '#6A6260',
        fontFamily: "UbuntuSans-Light",
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    follow: {
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: "UbuntuSans-Light",
        backgroundColor: 'blue',
        borderRadius: 20,
        height: 45,
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 25,
        width: 120
    },
    readmore:{
        color: 'blue',
        fontSize: 15,
        fontFamily: "UbuntuSans-Light",
    }

});

export default Organizer;