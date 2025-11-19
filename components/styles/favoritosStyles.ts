import { StyleSheet } from 'react-native';

const favoritosStyles = StyleSheet.create({
  ViewTop: {
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
  },
  textTop: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  viewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  ImageContainer: {
    width: 90,
    height: 90,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
  },
  imageProducto: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cartButton: {
    backgroundColor: '#0a7ea4',
    borderRadius: 20,
    padding: 10,
    position: 'absolute',
    right: -10,
    bottom: -10,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    marginHorizontal: 20,
  },
});

export default favoritosStyles;