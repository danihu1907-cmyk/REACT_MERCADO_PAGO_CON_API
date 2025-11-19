import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../components/styles/metodoPagoStyles';

export default function MetodoPagoCard() {
  const [selectedCard, setSelectedCard] = useState('visa');
  const [modalVisible, setModalVisible] = useState(false);
  const [defaultChecked, setDefaultChecked] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Tus tarjetas de pago</Text>

      {/* Tarjeta 1 */}
      <View style={styles.cardWrapper}>
        <Image
          source={require('../assets/images/mastercard.png')}
          style={styles.cardImage}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setSelectedCard('mastercard')}
        >
          <MaterialCommunityIcons
            name={
              selectedCard === 'mastercard'
                ? 'checkbox-marked-outline'
                : 'checkbox-blank-outline'
            }
            size={24}
            color="#000"
          />
          <Text style={styles.checkboxLabel}>
            Utilizar como método de pago predeterminado
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tarjeta 2 */}
      <View style={styles.cardWrapper}>
        <Image
          source={require('../assets/images/visa.png')}
          style={styles.cardImage2}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setSelectedCard('visa')}
        >
          <MaterialCommunityIcons
            name={
              selectedCard === 'visa'
                ? 'checkbox-marked-outline'
                : 'checkbox-blank-outline'
            }
            size={24}
            color="#000"
          />
          <Text style={styles.checkboxLabel}>
            Utilizar como método de pago predeterminado
          </Text>
        </TouchableOpacity>

        {/* Botón circular */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>＋</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar tarjeta</Text>

            <TextInput style={styles.input} placeholder="Nombre en la tarjeta" />
            <TextInput
              style={styles.input}
              placeholder="Número de tarjeta"
              keyboardType="numeric"
            />
            <TextInput style={styles.input} placeholder="Fecha de expiración (MM/AA)" />
            <TextInput style={styles.input} placeholder="CVV" keyboardType="numeric" />

            <TouchableOpacity
              style={styles.checkboxRow}
              onPress={() => setDefaultChecked(!defaultChecked)}
            >
              <MaterialCommunityIcons
                name={
                  defaultChecked
                    ? 'checkbox-marked-outline'
                    : 'checkbox-blank-outline'
                }
                size={24}
                color="#000"
              />
              <Text style={styles.checkboxLabel}>
                Utilizar como método de pago predeterminado
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.submitButtonText}>Agregar tarjeta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}