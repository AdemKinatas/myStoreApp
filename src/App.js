
import React from 'react';
import { SafeAreaView, FlatList, Text, } from 'react-native';
import styles from './App.styles'
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import products from './products.json'

const App = () => {

  const renderItem = ({ item }) => <ProductCard product={item} />

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Store</Text>
      <FlatList
        ListHeaderComponent={<SearchBar/>}
        horizontal={false}
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default App;
