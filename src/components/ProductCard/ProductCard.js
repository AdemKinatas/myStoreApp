import React from 'react'
import { View, Text, Image } from "react-native"
import styles from "./ProductCard.style"

const ProductCard = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: product.imgURL }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.inStock}>{product.inStock === true ? '' : 'Stokta Yok'}</Text>
            </View>
        </View>
    )
}

export default ProductCard;