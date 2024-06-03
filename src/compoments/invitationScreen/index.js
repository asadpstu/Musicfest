import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Invitation = () => {
    const navigation = useNavigation()
    const images = [
        {
            "url" : require('../../../assets/face/1.jpg'),
            "Name" : "Alva Edison",
            "mobile" : "+880-012-2343-564"
        },
        {
            "url" : require('../../../assets/face/1.jpg'),
            "Name" : "Alva Edison",
            "mobile" : "+880-012-2343-564"
        },
        {
            "url" : require('../../../assets/face/1.jpg'),
            "Name" : "Alva Edison",
            "mobile" : "+880-012-2343-564"
        },
        {
            "url" : require('../../../assets/face/1.jpg'),
            "Name" : "Alva Edison",
            "mobile" : "+880-012-2343-564"
        },
        {
            "url" : require('../../../assets/face/1.jpg'),
            "Name" : "Alva Edison",
            "mobile" : "+880-012-2343-564"
        },
        {
            "url" : require('../../../assets/face/1.jpg'),
            "Name" : "Alva Edison",
            "mobile" : "+880-012-2343-564"
        },
        {
            "url" : require('../../../assets/face/1.jpg'),
            "Name" : "Alva Edison",
            "mobile" : "+880-012-2343-564"
        },
        {
            "url" : require('../../../assets/face/1.jpg'),
            "Name" : "Alva Edison",
            "mobile" : "+880-012-2343-564"
        },
        {
            "url" : require('../../../assets/face/1.jpg'),
            "Name" : "Alva Edison",
            "mobile" : "+880-012-2343-564"
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
                <FlatList
                    data={images}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 2 }}>
                                <View style={styles.eventContainerLeft}>
                                    <View style={styles.imageContainer}>
                                        <TouchableOpacity 
                                            style={styles.imageWrapper}
                                            onPress={()=>{navigation.navigate('Home')}}
                                        >
                                            <Image source={item.url} style={styles.image} resizeMode="cover" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.MiddleSection}>
                                    <View>
                                        <Text style={styles.Title}>
                                            {item.Name}
                                        </Text>
                                    </View>

                                    <View>
                                        <Text style={styles.mobile}>
                                           {item.mobile}
                                        </Text>
                                    </View>

                                </View>
                                <View style={styles.invitation}>
                                    <TouchableOpacity>
                                        <Text style={index % 3 ? styles.invite : styles.invited}>
                                            {index % 3 ? 'Invite' : 'Invited'}
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        );
                    }}
                />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    eventContainerLeft: {
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '25%'
    },
    MiddleSection: {
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '50%'
    },
    invitation:{
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '25%'
    },
    
    Title: {
        color: 'black',
        fontSize: 22,
        fontFamily: "UbuntuSans-Light",
        fontWeight: 'bold'
    },
    mobile: {
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
    invite: {
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
        width: 100
    },
    invited: {
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: "UbuntuSans-Light",
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor:'blue',
        height: 45,
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 25,
        width: 100,
        color: 'black'
    },
    readmore: {
        color: 'blue',
        fontSize: 15,
        fontFamily: "UbuntuSans-Light",
    }

});

export default Invitation;