// app/paymentFailure.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaymentFailure() {
  const shakeValue = new Animated.Value(0);

  useEffect(() => {
    // Animación de sacudida
    Animated.sequence([
      Animated.timing(shakeValue, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeValue, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeValue, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleRetry = () => {
    router.back();
  };

  const handleChangePayment = () => {
    router.replace('/checkout');
  };

  const handleGoHome = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Icono de error animado */}
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [{ translateX: shakeValue }],
            },
          ]}
        >
          <View style={styles.errorCircle}>
            <MaterialCommunityIcons name="close" size={80} color="#fff" />
          </View>
        </Animated.View>

        {/* Título */}
        <Text style={styles.title}>Pago Rechazado</Text>

        {/* Mensaje */}
        <Text style={styles.message}>
          Lo sentimos, no pudimos procesar tu pago.{'\n'}
          Por favor, intenta nuevamente.
        </Text>

        {/* Razones comunes */}
        <View style={styles.reasonsCard}>
          <Text style={styles.cardTitle}>Razones comunes:</Text>

          <View style={styles.reasonItem}>
            <MaterialCommunityIcons name="alert-circle" size={20} color="#F44336" />
            <Text style={styles.reasonText}>Fondos insuficientes</Text>
          </View>

          <View style={styles.reasonItem}>
            <MaterialCommunityIcons name="alert-circle" size={20} color="#F44336" />
            <Text style={styles.reasonText}>Datos de tarjeta incorrectos</Text>
          </View>

          <View style={styles.reasonItem}>
            <MaterialCommunityIcons name="alert-circle" size={20} color="#F44336" />
            <Text style={styles.reasonText}>Límite de transacciones excedido</Text>
          </View>

          <View style={styles.reasonItem}>
            <MaterialCommunityIcons name="alert-circle" size={20} color="#F44336" />
            <Text style={styles.reasonText}>Tarjeta bloqueada o vencida</Text>
          </View>
        </View>

        {/* Detalles del intento */}
        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>ID de Transacción:</Text>
            <Text style={styles.detailValue}>#MP{Date.now().toString().slice(-8)}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Monto:</Text>
            <Text style={styles.detailValue}>$127.00 MXN</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Estado:</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Rechazado</Text>
            </View>
          </View>
        </View>

        {/* Botones de acción */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleRetry}>
          <MaterialCommunityIcons name="refresh" size={24} color="#fff" />
          <Text style={styles.primaryButtonText}>Intentar nuevamente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleChangePayment}>
          <MaterialCommunityIcons name="credit-card-outline" size={24} color="#F44336" />
          <Text style={styles.secondaryButtonText}>Cambiar método de pago</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textButton} onPress={handleGoHome}>
          <Text style={styles.textButtonText}>Volver al inicio</Text>
        </TouchableOpacity>

        {/* Ayuda */}
        <View style={styles.helpSection}>
          <MaterialCommunityIcons name="help-circle-outline" size={20} color="#666" />
          <Text style={styles.helpText}>
            ¿Necesitas ayuda? Contacta a nuestro equipo de soporte
          </Text>
        </View>
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
  errorCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#F44336',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F44336',
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
  reasonsCard: {
    width: '100%',
    backgroundColor: '#FFEBEE',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#F44336',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  reasonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  reasonText: {
    fontSize: 14,
    color: '#C62828',
    flex: 1,
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
  statusBadge: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#F44336',
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
    backgroundColor: '#F44336',
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
    borderColor: '#F44336',
    marginBottom: 12,
    gap: 8,
  },
  secondaryButtonText: {
    color: '#F44336',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textButton: {
    paddingVertical: 12,
    marginBottom: 24,
  },
  textButtonText: {
    color: '#666',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  helpSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
  },
  helpText: {
    fontSize: 12,
    color: '#666',
    flex: 1,
  },
});