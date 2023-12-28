import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import ProductCard from './src/components/Card/ProductCard';
import products from './src/products_data.json';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const renderProduct = ({item}) => <ProductCard products={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PATISTORE</Text>
      <View style={styles.search_container}>
        <TextInput style={styles.search} placeholder="Search" />
        <Icon name="search" size={24} color="#999" />
      </View>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F8',
    position: 'relative',
  },

  header: {
    color: '#893753',
    margin: 8,
    fontWeight: '900',
    fontSize: 40,
    letterSpacing: 1.8,
  },
  search_container: {
    backgroundColor: '#DBDFEA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 8,
    padding: 6,
    borderRadius: 9,
  },
  search: {
    flex: 1,
    fontSize: 16,
  },
});

export default App;
