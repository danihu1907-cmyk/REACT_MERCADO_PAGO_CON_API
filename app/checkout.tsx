// app/checkout.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../components/styles/checkoutStyles';
import styles2 from '../components/styles/localizacionStyles';


export default function Checkout() {
  // ESTADO PARA MOSTRAR INDICADOR DE CARGA DURANTE EL PROCESO DE PAGO
  const [loading, setLoading] = useState(false);

  // URL DEL BACKEND DONDE SE PROCESA LA PREFERENCIA DE PAGO
  const BACKEND_URL = 'https://3e7748c49619.ngrok-free.app';

  // DATOS DEL CARRITO PARA CALCULAR EL TOTAL A PAGAR
  const subtotal = 112;
  const envio = 15;
  const total = subtotal + envio;

  // INFORMACION DEL CLIENTE QUE SE ENVIARA EN LA METADATA DEL PAGO
  const clienteData = {
    email: 'rumenhussen@gmail.com',
    nombre: 'Jane Doe',
    direccion: '3 Newbridge Court, Chino Hills, CA 91709, United States'
  };

  // CONFIGURACION DE DEEP LINKS PARA CAPTURAR LA RESPUESTA DE MERCADO PAGO
  useEffect(() => {
    // ESCUCHA EVENTOS DE DEEP LINKS MIENTRAS LA APP ESTA ABIERTA
    const subscription = Linking.addEventListener('url', handleDeepLink);

    // VERIFICA SI LA APP SE ABRIO CON UN DEEP LINK INICIAL
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('URL inicial detectada:', url);
        handleDeepLink({ url });
      }
    });

    // LIMPIA EL LISTENER AL DESMONTAR EL COMPONENTE
    return () => subscription.remove();
  }, []);

  // MANEJA LA URL RECIBIDA DESDE MERCADO PAGO CUANDO EL USUARIO REGRESA A LA APP
  const handleDeepLink = async ({ url }: { url: string }) => {
    console.log('DEEP LINK CAPTURADO:', url);
    console.log('URL completa:', url);

    // CIERRA EL NAVEGADOR WEB DE MERCADO PAGO
    WebBrowser.dismissBrowser();

    try {
      // VARIABLES PARA EXTRAER INFORMACION DE LA URL
      let paymentId = null;
      let status = null;

      // EXTRAE EL ID DEL PAGO SI ESTA PRESENTE EN LA URL
      if (url.includes('payment_id=')) {
        const match = url.match(/payment_id=([^&]+)/);
        if (match) paymentId = match[1];
      }

      // EXTRAE EL STATUS DEL PAGO SI ESTA PRESENTE EN LA URL
      if (url.includes('status=')) {
        const match = url.match(/status=([^&]+)/);
        if (match) status = match[1];
      }

      console.log('Payment ID extraido:', paymentId);
      console.log('Status extraido:', status);

      // DETERMINA SI EL PAGO FUE EXITOSO BASANDOSE EN LA URL
      const isSuccess = url.includes('/congrats') ||
        url.includes('success') ||
        url.includes('approved') ||
        status === 'approved';

      // DETERMINA SI EL PAGO FUE RECHAZADO
      const isFailure = url.includes('/failure') ||
        url.includes('fail') ||
        status === 'rejected';

      // DETERMINA SI EL PAGO ESTA PENDIENTE
      const isPending = url.includes('/pending') ||
        status === 'pending';

      // MANEJA EL CASO DE PAGO EXITOSO
      if (isSuccess) {
        console.log('Pago exitoso detectado');
        console.log('El webhook ya debe haber guardado el pago en BD');

        // ESPERA MEDIO SEGUNDO Y REDIRIGE A LA PANTALLA DE EXITO
        setTimeout(() => {
          router.replace({
            pathname: '/successPay',
            params: {
              message: 'Pago procesado exitosamente'
            }
          });
        }, 500);
      }
      // MANEJA EL CASO DE PAGO RECHAZADO
      else if (isFailure) {
        console.log('Pago rechazado');
        Alert.alert(
          'Pago rechazado',
          'No se pudo procesar tu pago.',
          [
            { text: 'Reintentar', onPress: () => handlePayment() },
            { text: 'Cancelar', style: 'cancel' }
          ]
        );
      }
      // MANEJA EL CASO DE PAGO PENDIENTE
      else if (isPending) {
        console.log('Pago pendiente');
        Alert.alert(
          'Pago pendiente',
          'Tu pago está siendo procesado. Te notificaremos cuando se complete.',
          [{ text: 'Entendido', onPress: () => router.replace('/') }]
        );
      }
      // MANEJA ESTADOS DESCONOCIDOS
      else {
        console.log('Estado desconocido del pago');
        console.log('URL recibida:', url);
      }
    } catch (error: any) {
      console.error('Error procesando deep link:', error);
      console.error('Stack:', error.stack);
    }
  };

  // PROCESA EL PAGO CON MERCADO PAGO
  const handlePayment = async () => {
    // ACTIVA EL INDICADOR DE CARGA
    setLoading(true);

    try {
      console.log('Iniciando pago...');
      console.log('URL destino:', `${BACKEND_URL}/api/payments/create-preference`);

      // VALIDA QUE EL TOTAL SEA UN NUMERO VALIDO
      if (isNaN(total) || typeof total !== "number") {
        throw new Error("El total enviado no es un número válido.");
      }

      // PREPARA EL PAYLOAD CON LA INFORMACION DEL PAGO
      const payload = {
        items: [
          {
            title: 'Compra en Mi Tienda',
            description: 'Productos varios',
            quantity: 1,
            unit_price: Number(total),
            currency_id: 'MXN'
          }
        ],
        // URLS DE RETORNO DESPUES DEL PAGO
        back_urls: {
          success: 'abarrotess://checkout/successPay',
          failure: 'abarrotess://checkout/paymentFailure',
          pending: 'abarrotess://checkout/pending'
        },
        auto_return: 'approved',
        // METADATA CON INFORMACION DEL CLIENTE
        metadata: {
          email: clienteData.email,
          nombre: clienteData.nombre,
          direccion: clienteData.direccion
        }
      };

      console.log('Enviando payload:', JSON.stringify(payload, null, 2));

      // ENVIA LA PETICION AL BACKEND PARA CREAR LA PREFERENCIA DE PAGO
      const response = await fetch(`${BACKEND_URL}/api/payments/create-preference`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log('Codigo HTTP:', response.status);

      // PROCESA LA RESPUESTA DEL BACKEND
      let data = null;
      try {
        data = await response.json();
        console.log('RESPUESTA COMPLETA DEL BACKEND:', data);
      } catch (err) {
        throw new Error('El backend no envió JSON válido.');
      }

      // VERIFICA SI LA RESPUESTA FUE EXITOSA
      if (!response.ok) {
        throw new Error(data.error || 'No se pudo crear la preferencia.');
      }

      // OBTIENE LA URL DE PAGO GENERADA POR MERCADO PAGO
      const paymentUrl = data.init_point || data.sandbox_init_point;
      console.log('URL de pago generada:', paymentUrl);

      // VALIDA QUE SE HAYA RECIBIDO LA URL DE PAGO
      if (!paymentUrl) {
        throw new Error("El backend no devolvió la URL de pago (init_point).");
      }

      console.log('Abriendo navegador con Mercado Pago...');
      console.log('El webhook guardara el pago automaticamente cuando se complete');

      // ABRE EL NAVEGADOR CON LA URL DE PAGO DE MERCADO PAGO
      const result = await WebBrowser.openBrowserAsync(paymentUrl, {
        showTitle: true,
        enableBarCollapsing: false,
        toolbarColor: '#009EE3',
      });

      console.log('Resultado del navegador:', result);

      // INICIA UN POLLING PARA VERIFICAR SI EL PAGO YA SE GUARDO EN LA BASE DE DATOS
      // ESTO FUNCIONA COMO RESPALDO EN CASO DE QUE EL DEEP LINK FALLE
      const pollInterval = setInterval(async () => {
        try {
          console.log('Consultando si el pago ya se guardo...');

          // CONSULTA EL ENDPOINT QUE BUSCA EL ULTIMO PAGO DEL USUARIO
          const response = await fetch(
            `${BACKEND_URL}/api/pagos/ultimo/${clienteData.email}`
          );

          // SI ENCUENTRA UN PAGO RECIENTE
          if (response.ok) {
            const pago = await response.json();

            console.log('Pago encontrado:', pago);

            // DETIENE EL POLLING
            clearInterval(pollInterval);

            // CIERRA EL NAVEGADOR DE MERCADO PAGO
            WebBrowser.dismissBrowser();

            // REDIRIGE A LA PANTALLA DE EXITO CON LOS DATOS DEL PAGO
            router.replace({
              pathname: '/successPay',
              params: {
                recibo: JSON.stringify(pago)
              }
            });
          } else {
            console.log('Aun no hay pago registrado...');
          }
        } catch (error) {
          console.log('Esperando pago...', error);
        }
      }, 3000); // CONSULTA CADA 3 SEGUNDOS

      // DETIENE EL POLLING DESPUES DE 2 MINUTOS PARA EVITAR CONSULTAS INFINITAS
      setTimeout(() => {
        clearInterval(pollInterval);
        console.log('Timeout: Se detuvo el polling');
      }, 120000);

      // MANEJA EL CASO DONDE EL USUARIO CIERRA EL NAVEGADOR MANUALMENTE
      if (result.type === 'cancel') {
        clearInterval(pollInterval);
        console.log('Usuario cerro el navegador');
        Alert.alert(
          'Pago cancelado',
          '¿Deseas intentar nuevamente?',
          [
            { text: 'Sí', onPress: () => handlePayment() },
            { text: 'No', style: 'cancel' }
          ]
        );
      }

    } catch (error: any) {
      console.log('ERROR EN PAGO:', error);
      Alert.alert(
        'Error al procesar pago',
        error.message || 'No se pudo conectar con el servidor.',
        [{ text: 'OK' }]
      );
    } finally {
      // DESACTIVA EL INDICADOR DE CARGA AL FINALIZAR
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.root}>
        {/* SECCION DE DIRECCION DE ENVIO */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles2.sectionTitle}>Dirección del envío</Text>
            <View style={styles.cardRow}>
              <View style={styles.cardInfo}>
                <Text style={styles.name}>{clienteData.nombre}</Text>
                <Text style={styles.address}>{clienteData.direccion}</Text>
              </View>
              <TouchableOpacity onPress={() => router.push("/addresses")}>
                <Text style={styles.changeButton}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* SECCION DE INFORMACION DE CONTACTO */}
        <View style={styles.section}>
          <View style={styles2.card}>
            <Text style={styles2.sectionTitle}>Información del contacto</Text>

            {/* CORREO ELECTRONICO */}
            <View style={styles2.infoRow}>
              <View style={styles2.iconCircle}>
                <MaterialCommunityIcons name="email-outline" size={20} color="#000" />
              </View>
              <View style={styles2.infoContent}>
                <View style={styles2.inlineRow}>
                  <Text style={styles2.value}>{clienteData.email}</Text>
                  <View style={styles2.editCircle}>
                    <MaterialCommunityIcons name="pencil-outline" size={24} color="#000" />
                  </View>
                </View>
                <Text style={styles2.label}>Correo</Text>
              </View>
            </View>

            {/* TELEFONO */}
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

            {/* DIRECCION CON MAPA */}
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

        {/* RESUMEN DEL PEDIDO CON SUBTOTAL, ENVIO Y TOTAL */}
        <View style={styles.summarySection}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal:</Text>
            <Text style={styles.summaryValue}>${subtotal}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Envío:</Text>
            <Text style={styles.summaryValue}>${envio}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryTotal}>Total:</Text>
            <Text style={styles.summaryTotal}>${total}</Text>
          </View>
        </View>

        {/* BOTON PARA PROCESAR EL PAGO */}
        <TouchableOpacity
          style={[webViewStyles.payButton, loading && { opacity: 0.6 }]}
          onPress={handlePayment}
          disabled={loading}
        >
          <View style={webViewStyles.payButtonContent}>
            {loading ? (
              <>
                <ActivityIndicator color="#fff" size="small" />
                <Text style={webViewStyles.payButtonText}>Procesando...</Text>
              </>
            ) : (
              <>
                <MaterialCommunityIcons name="credit-card-outline" size={24} color="#fff" />
                <Text style={webViewStyles.payButtonText}>Pagar con Mercado Pago</Text>
              </>
            )}
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// ESTILOS DEL BOTON DE PAGO
const webViewStyles = StyleSheet.create({
  payButton: {
    backgroundColor: '#009EE3',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 20,
    elevation: 3,
  },
  payButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});