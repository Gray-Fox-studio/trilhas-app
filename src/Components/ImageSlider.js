import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImageZoomViewer from 'react-native-image-zoom-viewer';

const ImageSlider = ({ images }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setModalImageIndex(index);
                    setModalVisible(true);
                }}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={item.uri}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderModalContent = () => {
        const imagesForZoom = images.map(image => ({ url: image.uri }));

        return (
            <ImageZoomViewer
                imageUrls={imagesForZoom}
                index={modalImageIndex}
                enableSwipeDown={true}
                onSwipeDown={() => setModalVisible(false)}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                data={images}
                renderItem={renderItem}
                sliderWidth={300}
                itemWidth={250}
                loop={true}
            />
            {modalVisible && renderModalContent()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        width: 250,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ImageSlider;
