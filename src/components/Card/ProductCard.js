import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './ProductCard.style';


const ProductCard = ({products}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: products.imgURL,
          }}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        {!products.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
