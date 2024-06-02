import { View, Text, FlatList, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { Icon } from 'react-native-elements';

const { height, width } = Dimensions.get('window');

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        require("../../../assets/slider/1.jpg"),
        require("../../../assets/slider/2.jpg"),
        require("../../../assets/slider/3.jpg"),
        require("../../../assets/slider/4.jpg"),
        require("../../../assets/slider/3.jpg"),
    ];

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.sliderContainer}>

                {/* Image slider */}
                <FlatList
                    data={images}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrentIndex((x / width).toFixed(0));
                    }}
                    horizontal
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.imageContainer}>
                                <TouchableOpacity disabled={true} style={styles.imageWrapper}>
                                    <Image source={item} style={styles.image} resizeMode="cover" />
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />

                {/* Image status icon */}
                <View style={styles.pagination}>
                    {images.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    {
                                        width: currentIndex == index ? 50 : 8,
                                        height: currentIndex == index ? 10 : 8,
                                        borderRadius: currentIndex == index ? 5 : 4,
                                        backgroundColor: currentIndex == index ? 'green' : 'white',
                                    },
                                ]}
                            />
                        );
                    })}
                </View>

                {/* Header left & Right navigation icon */}
                <TouchableOpacity style={styles.leftButton}>
                    <Image source={require('../../../assets/header/left.png')} style={styles.headerIcon} resizeMode="cover" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButtonTop}>
                    <Image source={require('../../../assets/header/love.png')} style={styles.headerIcon} resizeMode="cover" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButtonBottom}>
                    <Image source={require('../../../assets/header/send.png')} style={styles.headerIcon} resizeMode="cover" />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    imageContainer: {
        width: width,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
        borderRadius: 0,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    pagination: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    dot: {
        marginLeft: 5,
    },
    leftButton: {
        position: 'absolute',
        left: 10,
        top: '5%',
        padding: 10,
        borderRadius: 20,
    },
    rightButtonTop: {
        position: 'absolute',
        right: 50,
        top: '5%',
        padding: 10,
        borderRadius: 20,
    },
    rightButtonBottom: {
        position: 'absolute',
        right: 10,
        top: '5%',
        padding: 10,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
    },
    headerIcon: {
        height: 24,
        width: 24
    }
});
