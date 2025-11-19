import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24, // mueve todo hacia abajo
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  cardWrapper: {
    marginBottom: 24,
    alignItems: 'center',
    marginTop: 16, // mueve cada tarjeta hacia abajo
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold', // texto en negritas
  },
  addButton: {
    width: 38,
    height: 38,
    borderRadius: 24,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    marginLeft: 230, 
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
  },

  cardImage2: {
    width: '70%',
    height: 160,
    borderRadius: 12,
  },

  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  width: '90%',
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 20,
},
modalTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 16,
  color: '#333',
},
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 10,
  marginBottom: 12,
},
submitButton: {
  backgroundColor: '#007bff',
  paddingVertical: 12,
  borderRadius: 8,
  marginTop: 16,
},
submitButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},

});

export default styles;