// app/checkout.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../components/styles/checkoutStyles';
import styles2 from '../components/styles/localizacionStyles';

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  // Datos del carrito (estáticos)
  const subtotal = 112;
  const envio = 15;
  const total = subtotal + envio;

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push('/success');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.root}>

        {/* PRIMERA SECCION */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles2.sectionTitle}>Direccion del envio</Text>
            <View style={styles.cardRow}>
              <View style={styles.cardInfo}>
                <Text style={styles.name}>Jane Doe</Text>
                <Text style={styles.address}>3 Newbridge Court</Text>
                <Text style={styles.address}>Chino Hills, CA 91709, United States</Text>
              </View>
              <TouchableOpacity onPress={() => router.push("/addresses")}>
                <Text style={styles.changeButton}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* SEGUNDA SECCION */}
        <View style={styles.section}>
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
          </View>
        </View>

        {/* RESUMEN */}
        <View style={styles.summarySection}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal:</Text>
            <Text style={styles.summaryValue}>${subtotal}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Envio:</Text>
            <Text style={styles.summaryValue}>${envio}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryTotal}>Total:</Text>
            <Text style={styles.summaryTotal}>${total}</Text>
          </View>
        </View>

        {/* BOTON PAGAR */}
        <TouchableOpacity
          style={[styles.submitButton, loading && { opacity: 0.6 }]}
          onPress={handlePayment}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitButtonText}>Pagar con Mercado Pago</Text>
          )}
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
