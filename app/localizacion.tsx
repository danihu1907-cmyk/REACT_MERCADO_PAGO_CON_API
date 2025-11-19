import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles2 from '../components/styles/localizacionStyles';


export default function Localizacion() {
  return (
    <ScrollView style={styles2.container}>
      {/* Tarjeta principal: Contacto + Dirección + Método de pago */}
      <View style={styles2.card}>
        <Text style={styles2.sectionTitle}>Información del contacto</Text>

        {/* Correo */}
        <View style={styles2.infoRow}>
          <View style={styles2.iconCircle}>
            <MaterialCommunityIcons name="email-outline" size={20} color="#000" />
          </View>
          <View style={styles2.infoContent}>
            <View style={styles2.inlineRow}>
              <Text style={styles2.value}>rumenhussen@gmail.com</Text>
              <View style={styles2.editCircle}>
                <MaterialCommunityIcons name="pencil-outline" size={24} color="#000" />
              </View>
            </View>
            <Text style={styles2.label}>Correo</Text>
          </View>
        </View>

        {/* Teléfono */}
        <View style={styles2.infoRow}>
          <View style={styles2.iconCircle}>
            <MaterialCommunityIcons name="phone-outline" size={20} color="#000" />
          </View>
          <View style={styles2.infoContent}>
            <View style={styles2.inlineRow}>
              <Text style={styles2.value}>+88-692-764-269</Text>
              <View style={styles2.editCircle}>
                <MaterialCommunityIcons name="pencil-outline" size={24} color="#000" />
              </View>
            </View>
            <Text style={styles2.label}>Teléfono</Text>
          </View>
        </View>

        {/* Dirección */}
        <Text style={styles2.sectionTitle}>Dirección</Text>
        <View style={styles2.infoRow}>
          <View style={styles2.iconCircle}>
            <MaterialCommunityIcons name="map-marker-outline" size={20} color="#000" />
          </View>
          <View>
            <Text style={styles2.value}>Marquez Hoyos, Veracruz, 12908</Text>
          </View>
        </View>

        <Image
          source={require('../assets/images/map.png')}
          style={styles2.map}
          resizeMode="cover"
        />

        {/* Método de pago */}
        <Text style={styles2.sectionTitle}>Método de pago</Text>
        <View style={styles2.infoRow}>
          <View style={styles2.iconCircle}>
            <Image
              source={require('../assets/images/Paypal.jpg')}
              style={styles2.iconImage}
            />
          </View>
          <View>
            <Text style={styles2.value}>Paypal Card •••• 4629</Text>
          </View>
        </View>
      </View>

      {/* Tarjeta de costos + botón */}
      <View style={styles2.cardcosto}>
        <View style={styles2.costRow}>
          <Text style={styles2.label}>Subtotal:</Text>
          <Text style={styles2.value}>$112.00</Text>
        </View>
        <View style={styles2.costRow}>
          <Text style={styles2.label}>Envío</Text>
          <Text style={styles2.value}>$15.00</Text>
        </View>
        <View style={styles2.costRow}>
          <Text style={styles2.labelTotal}>Total:</Text>
          <Text style={styles2.valueTotal}>$127.00</Text>
        </View>

        {/* Botón de pago dentro de la tarjeta */}
        <TouchableOpacity style={styles2.paymentButton} onPress={() => router.push("/success")}>
          <Text style={styles2.paymentText}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}