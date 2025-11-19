import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../components/styles/indexStyles'; // ✅ Estilos externos

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado superior */}
      <View style={styles.headerRow}>
        <Text style={styles.locationText}>Bienvenido Alexis</Text>
        <View style={styles.iconWrapper}>
          <View style={styles.bagIcon}>
            <MaterialCommunityIcons name="bell-outline" size={27} color="#000" />
          </View>
          <View style={styles.notificationDot} />
        </View>
      </View>

      {/* Barra de búsqueda */}
      <View style={styles.searchBar}>
        <View style={styles.searchInputWrapper}>
          <MaterialCommunityIcons name="magnify" size={20} color="#6e6e6e" style={styles.searchIcon} />
          <TextInput placeholder="Buscar" style={styles.searchInput} />
        </View>
      </View>

      {/* Filtros */}
      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Refrescos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Sabritas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Limpieza</Text>
        </TouchableOpacity>
      </View>

      {/* Barra de filtros y ordenamiento */}
      <View style={styles.sortFilterBar}>
        <TouchableOpacity style={styles.sortFilterItem}>
          <MaterialCommunityIcons name="tune" size={18} color="#000" style={styles.sortFilterIcon} />
          <Text style={styles.sortFilterText}>Filtros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortFilterItem}>
          <MaterialCommunityIcons name="swap-vertical" size={18} color="#000" style={styles.sortFilterIcon} />
          <Text style={styles.sortFilterText}>Precio</Text>
        </TouchableOpacity>
      </View>

      {/* Catálogo de productos */}
      <View style={styles.sectionWrapper}>
        <View style={styles.cardRow}>
          {[58.70, 37.80, 42.50, 39.90].map((price, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.imageWrapper}>
                <Image
                  source={require('../../assets/images/Azul.webp')}
                  style={styles.image}
                  resizeMode="contain"
                />
                <View style={styles.favoriteIcon}>
                  <MaterialCommunityIcons name="heart-outline" size={16} color="#000" />
                </View>
              </View>
              <Text style={styles.description}>Bebida energética</Text>
              <Text style={styles.name}>Power Ade Azul</Text>
              <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}