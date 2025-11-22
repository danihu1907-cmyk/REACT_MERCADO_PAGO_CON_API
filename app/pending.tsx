// app/pending.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pending() {
  const rotateValue = new Animated.Value(0);

  useEffect(() => {
    // Animación de rotación para el reloj
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleGoHome = () => {
    router.replace('/(tabs)');
  };

  const handleViewOrder = () => {
    router.push('/compras');
  };

  const handleContactSupport = () => {
    console.log('Contactar soporte');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Icono de pendiente animado */}
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [{ rotate }],
            },
          ]}
        >
          <View style={styles.pendingCircle}>
            <MaterialCommunityIcons name="clock-outline" size={80} color="#fff" />
          </View>
        </Animated.View>

        {/* Título */}
        <Text style={styles.title}>Pago Pendiente</Text>

        {/* Mensaje */}
        <Text style={styles.message}>
          Tu pago está siendo procesado.{'\n'}
          Te notificaremos cuando se confirme.
        </Text>

        {/* Tarjeta informativa */}
        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <MaterialCommunityIcons name="information" size={24} color="#FF9800" />
          </View>
          <Text style={styles.infoText}>
            Los pagos pueden tardar entre 2 y 48 horas en confirmarse,
            dependiendo del método de pago seleccionado.
          </Text>
        </View>

        {/* Detalles del pedido */}
        <View style={styles.detailsCard}>
          <Text style={styles.cardTitle}>Detalles del Pedido</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>ID de Transacción:</Text>
            <Text style={styles.detailValue}>#MP{Date.now().toString().slice(-8)}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Monto Total:</Text>
            <Text style={styles.detailValueBold}>$127.00 MXN</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Estado:</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>En proceso</Text>
            </View>
          </View>
        </View>

        {/* Botones de acción */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleViewOrder}>
          <MaterialCommunityIcons name="package-variant" size={24} color="#fff" />
          <Text style={styles.primaryButtonText}>Ver mi pedido</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleContactSupport}>
          <MaterialCommunityIcons name="headset" size={24} color="#FF9800" />
          <Text style={styles.secondaryButtonText}>Contactar soporte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textButton} onPress={handleGoHome}>
          <Text style={styles.textButtonText}>Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconContainer: {
    marginBottom: 32,
  },
  pendingCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#FF9800',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF9800',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#FFF3E0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  infoIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#E65100',
    lineHeight: 20,
  },
  detailsCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  detailValueBold: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
  statusBadge: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#FF9800',
    fontSize: 12,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  primaryButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9800',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
    gap: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FF9800',
    marginBottom: 12,
    gap: 8,
  },
  secondaryButtonText: {
    color: '#FF9800',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textButton: {
    paddingVertical: 12,
  },
  textButtonText: {
    color: '#666',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});