import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 8,
    padding: 12,
    flex: 1,
    backgroundColor: '#DBDFEA',
    borderRadius: 16,
  },
  image_container: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 4,
  },
  image: {
    resizeMode: 'center',
    height: Dimensions.get('window').height / 5,
  },
  body: {
    marginTop: 8,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#777',
  },
  stock: {
    fontSize: 14,
    fontWeight: '700',
    color: '#B80000',
  },
});
