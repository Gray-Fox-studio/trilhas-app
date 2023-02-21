import React, { useState, useRef, createRef } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, } from 'react-native';
import { ReactNativeZoomableView } from '@dudigital/react-native-zoomable-view/dist';
import ImageRequest from '../Components/ImageRequest.json';
import ImageRepost from '../Components/ImageRepost';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get("window");
const height = width * 100 / 60;

const Gallery = () => {
  //states
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState('');

  const modalVisible = (itemKey) => {
    setModal(true);
    setImage(itemKey);
  }
  const modalClose = () => {
    setModal(false);
  }
  console.log(image);

  return (
    <>
      {
        modal === false ?
          null
          :
          <View style={{
            backgroundColor: '#000000',
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 999,
          }}>
            <TouchableOpacity style={{ zIndex: 99 }} onPress={modalClose}>
              <Ionicons name="ios-close-circle" size={50} color="white" />
            </TouchableOpacity>
            {/* //Legacy */}

            <ReactNativeZoomableView
              maxZoom={2}
              minZoom={0.5}
              zoomStep={0.5}
              initialZoom={1}>
              <Image
                style={{
                  width: 'auto',
                  height: '100%'
                }}
                resizeMode="contain"
                source={ImageRepost[image]}
              />
            </ReactNativeZoomableView>

          </View>
      }
      <View>
        <View style={{ marginTop: 50, width, height }}>
          <ScrollView pagingEnabled horizontal style={{ width, height }}>
            {
              ImageRequest && ImageRequest.map((items, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity onPress={() => modalVisible(items.images)}>
                      <Image
                        key={index.images}
                        style={{ width, height, resizeMode: 'contain', }}
                        source={ImageRepost[items.images]}
                      />
                    </TouchableOpacity>
                    <Text key={index.description}
                      style={{ fontSize: 20, position: 'absolute', color: '#fff', bottom: '20%', backgroundColor: '#000', textAlign: 'center', width: '100%' }}
                    >
                      {items.description}
                    </Text>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    </>
  )
}


export default Gallery;