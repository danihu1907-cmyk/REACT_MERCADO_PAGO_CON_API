// app/success.tsx
import styles from '@/components/styles/succesPayStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// INTERFACE QUE DEFINE LA ESTRUCTURA DEL RECIBO DE PAGO
interface Recibo {
  folio: string;
  mercadoPagoId: string;
  montoTotal: number;
  moneda: string;
  estado: string;
  metodoPago: string;
  ultimosDigitos: string;
  fechaPago: string;
  emailCliente: string;
  nombreCliente: string;
  direccionEnvio: string;
  pagoId?: string;
}

export default function Success() {
  // OBTIENE LOS PARAMETROS ENVIADOS DESDE LA PANTALLA ANTERIOR
  const params = useLocalSearchParams();

  // ESTADO PARA ALMACENAR EL RECIBO PARSEADO
  const [recibo, setRecibo] = useState<Recibo | null>(null);

  // ESTADO PARA CONTROLAR EL INDICADOR DE CARGA
  const [loading, setLoading] = useState(true);

  // REF PARA EVITAR QUE EL EFECTO SE EJECUTE MULTIPLES VECES
  const hasLoaded = useRef(false);

  useEffect(() => {
    // EVITA QUE SE EJECUTE MULTIPLES VECES
    if (hasLoaded.current) return;

    // SI SE RECIBIO UN RECIBO EN LOS PARAMETROS
    if (params.recibo) {
      try {
        // PARSEA EL JSON DEL RECIBO
        const data = JSON.parse(params.recibo as string);
        console.log('Recibo recibido:', data);
        setRecibo(data);
      } catch (error) {
        console.error('Error parseando recibo:', error);
      }
    }
    // DESACTIVA EL INDICADOR DE CARGA
    setLoading(false);
    hasLoaded.current = true;
  }, [params.recibo]);

  // MUESTRA UN INDICADOR DE CARGA MIENTRAS SE PROCESA EL RECIBO
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ICONO DE EXITO */}
        <View style={styles.successIcon}>
          <MaterialCommunityIcons name="check-circle" size={80} color="#4CAF50" />
        </View>

        <Text style={styles.title}>¡Pago Exitoso!</Text>
        <Text style={styles.subtitle}>Tu pedido ha sido procesado correctamente</Text>

        {/* TARJETA DE RECIBO - SOLO SE MUESTRA SI HAY DATOS DEL RECIBO */}
        {recibo && (
          <View style={styles.receiptCard}>
            {/* ENCABEZADO DEL RECIBO */}
            <View style={styles.receiptHeader}>
              <MaterialCommunityIcons name="receipt" size={24} color="#333" />
              <Text style={styles.receiptTitle}>Recibo de Compra</Text>
            </View>

            <View style={styles.divider} />

            {/* NUMERO DE FOLIO */}
            <View style={styles.receiptRow}>
              <Text style={styles.label}>Folio:</Text>
              <Text style={styles.value}>{recibo.folio}</Text>
            </View>

            {/* FECHA Y HORA DEL PAGO */}
            <View style={styles.receiptRow}>
              <Text style={styles.label}>Fecha:</Text>
              <Text style={styles.value}>
                {new Date(recibo.fechaPago).toLocaleDateString('es-MX', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </Text>
            </View>

            {/* MONTO TOTAL PAGADO */}
            <View style={styles.receiptRow}>
              <Text style={styles.label}>Monto Total:</Text>
              <Text style={styles.valueHighlight}>
                ${recibo.montoTotal.toFixed(2)} {recibo.moneda}
              </Text>
            </View>

            {/* ESTADO DEL PAGO */}
            <View style={styles.receiptRow}>
              <Text style={styles.label}>Estado:</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>
                  {recibo.estado === 'approved' ? 'Aprobado ✅' : recibo.estado}
                </Text>
              </View>
            </View>

            {/* METODO DE PAGO UTILIZADO */}
            <View style={styles.receiptRow}>
              <Text style={styles.label}>Método de pago:</Text>
              <Text style={styles.value}>{recibo.metodoPago}</Text>
            </View>

            {/* ULTIMOS DIGITOS DE LA TARJETA SI EXISTE */}
            {recibo.ultimosDigitos && (
              <View style={styles.receiptRow}>
                <Text style={styles.label}>Terminación:</Text>
                <Text style={styles.value}>**** {recibo.ultimosDigitos}</Text>
              </View>
            )}

            <View style={styles.divider} />

            {/* NOMBRE DEL CLIENTE */}
            <View style={styles.receiptRow}>
              <Text style={styles.label}>Cliente:</Text>
              <Text style={styles.value}>{recibo.nombreCliente}</Text>
            </View>

            {/* EMAIL DEL CLIENTE */}
            <View style={styles.receiptRow}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{recibo.emailCliente}</Text>
            </View>

            {/* DIRECCION DE ENVIO */}
            <View style={styles.receiptRow}>
              <Text style={styles.label}>Dirección:</Text>
              <Text style={styles.value}>{recibo.direccionEnvio}</Text>
            </View>

            {/* ID DE TRANSACCION DE MERCADO PAGO */}
            <View style={styles.idSection}>
              <Text style={styles.idLabel}>ID de transacción:</Text>
              <Text style={styles.idValue}>{recibo.mercadoPagoId}</Text>
            </View>
          </View>
        )}

        {/* BOTON PARA VOLVER AL INICIO */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => router.replace('/')}
          >
            <MaterialCommunityIcons name="home" size={20} color="#009EE3" />
            <Text style={styles.homeButtonText}>Volver al inicio</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

