import React from 'react';
import { Text, StyleSheet, View, Image, ImageSourcePropType } from 'react-native';

interface ImageDetailProps {
  imageSource: ImageSourcePropType;
  title: string;
  score: number;
}

const ImageDetail: React.FC<ImageDetailProps> = ({ imageSource, title, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
});

export default ImageDetail;
