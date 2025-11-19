import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 78, // 👈 Esto baja todo el contenido
    backgroundColor: '#fafafa',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24, //
  },
  locationText: {
    flex: 1,
    fontSize: 19,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  iconWrapper: {
    position: 'relative',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bagIcon: {
    width: 28,
    height: 28,
    backgroundColor: '#fff',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    backgroundColor: '#ff3b30',
    borderRadius: 4,
  },
  searchBar: {
    marginBottom: 12,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  filterRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  filterButton: {
    backgroundColor: '#87ceeb',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sortFilterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sortFilterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  sortFilterIcon: {
    marginRight: 6,
  },
  sortFilterText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  sectionWrapper: {
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 16,
    marginBottom: 3,
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12, // 👈 Más espacio interno
    marginBottom: 16, // 👈 Más separación entre tarjetas
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100, // 👈 Imagen más grande
    borderRadius: 8,
    marginBottom: 8,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  description: {
    fontSize: 12,
    color: '#6e6e6e',
    marginBottom: 2,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 2,
  },
  price: {
    fontSize: 13,
    color: '#007aff',
    fontWeight: 'bold',
  },
});

export default styles;