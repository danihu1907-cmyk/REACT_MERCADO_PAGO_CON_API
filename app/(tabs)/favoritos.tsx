import {
  View,
  Text,
  ScrollView,
  Image,
  useColorScheme,
  Pressable
} from 'react-native';
import { useState } from 'react';
import { Colors } from '../../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../components/styles/favoritosStyles';

interface FavoriteProduct {
  id: number;
  name: string;
  image: any;
  description: string;
  price: string;
}

export default function Favoritos() {
  const colorScheme = useColorScheme();
  const themeApp = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const [productos, setProductos] = useState<FavoriteProduct[]>([
    {
      id: 1,
      name: 'Power Ade',
      image: require('../../assets/images/powerr.png'),
      description: 'Bebida energética',
      price: '32$',
    },
    {
      id: 2,
      name: 'Power Ade',
      image: require('../../assets/images/powerr.png'),
      description: 'Bebida energética',
      price: '32$',
    },
    {
      id: 3,
      name: 'Power Ade',
      image: require('../../assets/images/powerr.png'),
      description: 'Bebida energética',
      price: '46$',
    },
  ]);

  const eliminarFavorito = (id: number) => {
    setProductos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ScrollView style={{ backgroundColor: themeApp.background }}>
      {productos.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={[{ color: themeApp.text, fontSize: 18, textAlign: 'center' }]}>
            No hay productos favoritos
          </Text>
        </View>
      ) : (
        productos.map((productoFavorito) => (
          <View
            key={productoFavorito.id}
            style={[styles.viewCard, { backgroundColor: themeApp.background }]}
          >
            <View style={styles.ImageContainer}>
              <Image source={productoFavorito.image} style={styles.imageProducto} />
            </View>

            <View style={styles.infoContainer}>
              <Text style={[styles.productDescription, { color: themeApp.text }]}>Mora Azul</Text>
              <Text style={[styles.productName, { color: themeApp.text }]}>
                {productoFavorito.name}
              </Text>
              <Text style={[styles.productDescription, { color: themeApp.text }]}>
                {productoFavorito.description}
              </Text>
              <Text style={styles.productPrice}>{productoFavorito.price}</Text>
            </View>

            <Pressable
              style={styles.closeButton}
              onPress={() => eliminarFavorito(productoFavorito.id)}
            >
              <MaterialCommunityIcons name="close" size={20} color="#999" />
            </Pressable>

            <Pressable style={styles.cartButton} onPress={() => console.log('Agregar al carrito')}>
              <MaterialCommunityIcons name="cart" size={22} color="#fff" />
            </Pressable>
          </View>
        ))
      )}
    </ScrollView>
  );
}