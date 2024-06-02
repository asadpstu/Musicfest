import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const EventDetails = () => {
    return (

        <View style={{ flex: 1, flexDirection: 'column' }}>
            
            {/* Date & Time Section */}
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                <View style={styles.eventContainerLeft}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity disabled={true} style={styles.imageWrapper}>
                            <Image source={require('../../../assets/event/calender.png')} style={styles.image} resizeMode="cover" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>

                    {/* Event header */}
                    <View>
                        <Text style={styles.eventDate}>
                            Monday, December 24, 2022
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.eventTime}>
                            18.00 - 23.00 PM (GMT +7)
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.eventBook}>
                            Add to My Calender
                        </Text>
                    </View>

                </View>
            </View>

            {/* Location Section */}
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                <View style={styles.eventContainerLeft}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity disabled={true} style={styles.imageWrapper}>
                            <Image source={require('../../../assets/event/location.png')} style={styles.image} resizeMode="cover" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>

                    {/* Event header */}
                    <View>
                        <Text style={styles.eventLocation}>
                            Grand Park, Newyork City, US
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.eventLocationDetails}>
                            Grand city, st 100, New york, Unites States
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.eventMap}>
                            See location on map
                        </Text>
                    </View>

                </View>
            </View>



            {/* Ticket Section */}
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10,}}>
                <View style={styles.eventContainerLeft}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity disabled={true} style={styles.imageWrapper}>
                            <Image source={require('../../../assets/event/money.png')} style={styles.image} resizeMode="cover" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.eventContainerRight}>

                    {/* Event header */}
                    <View>
                        <Text style={styles.eventTicket}>
                            20.00$ - 100.00$
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.eventPriceDetails}>
                            Ticket Price depends on package
                        </Text>
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
    eventDate: {
        color: 'black',
        fontSize: 22,
        fontFamily: "UbuntuSans-Light",
        fontWeight: 'bold'
    },
    eventTime: {
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        fontSize: 18,
        color: '#6A6260',
        fontFamily: "UbuntuSans-Light",
    },
    eventBook: {
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
        width: '80%'

    },
    eventLocation: {
        color: 'black',
        fontSize: 22,
        fontFamily: "UbuntuSans-Light",
        fontWeight: 'bold'
    },
    eventLocationDetails: {
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        fontSize: 17,
        color: '#6A6260',
        fontFamily: "UbuntuSans-Light",
    },
    eventTicket: {
        color: 'black',
        fontSize: 22,
        fontFamily: "UbuntuSans-Light",
        fontWeight: 'bold'
    },
    eventPriceDetails: {
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        fontSize: 18,
        color: '#6A6260',
        fontFamily: "UbuntuSans-Light",
    },
    eventMap: {
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
        width: '80%'

    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#dddddd',
        width: 70,
        height: 70,
        borderRadius: 50
    },
    image: {
        width: 48,
        height: 48,
    },

});


export default EventDetails;