// app/mercadopagoPayment.tsx
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MercadopagoPayment() {
  const params = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');

  // URL de pago que viene como parámetro
  const paymentUrl = Array.isArray(params.url) ? params.url[0] : params.url || '';

  // Timeout para ocultar loading después de 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigationStateChange = (navState: any) => {
    const { url, loading: navLoading, canGoBack, canGoForward } = navState;

    setCurrentUrl(url);
    console.log('📍 Navegando a:', url);
    console.log('🔄 Cargando:', navLoading);
    console.log('⬅️ Puede retroceder:', canGoBack);
    console.log('➡️ Puede avanzar:', canGoForward);

    // ✅ DETECCIÓN MEJORADA DE URLs DE MERCADO PAGO

    // Éxito - Pago aprobado
    if (url.includes('/congrats') ||
      url.includes('status=approved') ||
      url.includes('collection_status=approved')) {
      console.log('✅ Pago exitoso detectado');
      router.replace('/successPay');
    }
    // Falla - Pago rechazado
    else if (url.includes('/failure') ||
      url.includes('status=rejected') ||
      url.includes('collection_status=rejected')) {
      console.log('❌ Pago rechazado detectado');
      router.replace('/paymentFailure');
    }
    // Pendiente - Pago en proceso
    else if (url.includes('/pending') ||
      url.includes('status=pending') ||
      url.includes('status=in_process') ||
      url.includes('collection_status=pending')) {
      console.log('⏳ Pago pendiente detectado');
      router.replace('/pending');
    }
    // En revisión
    else if (url.includes('/review')) {
      console.log('🔍 Pago en revisión');
      router.replace('/pending');
    }
    // Detectar si llegó al formulario de pago
    else if (url.includes('payment-option-form')) {
      console.log('💳 Formulario de pago cargado');
    }
  };

  const handleError = (syntheticEvent: any) => {
    const { nativeEvent } = syntheticEvent;
    console.error('❌ WebView Error:', nativeEvent);
    setLoading(false);

    Alert.alert(
      'Error de conexión',
      '¿Deseas reintentar la conexión con Mercado Pago?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: () => router.back()
        },
        {
          text: 'Reintentar',
          onPress: () => {
            setLoading(true);
            // Force reload
          }
        }
      ]
    );
  };

  const handleHttpError = (syntheticEvent: any) => {
    const { nativeEvent } = syntheticEvent;
    console.warn('⚠️ HTTP Error:', nativeEvent.statusCode);
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#009EE3" />
          <Text style={styles.loadingText}>Cargando Mercado Pago...</Text>
          <Text style={styles.subText}>Configurando tu pago seguro</Text>
        </View>
      )}

      <WebView
        source={{ uri: paymentUrl }}

        // ✅ Callbacks optimizados
        onLoadStart={() => {
          console.log('🔵 WebView: Iniciando carga...');
          setLoading(true);
        }}
        onLoadEnd={() => {
          console.log('🟢 WebView: Carga completada');
          setLoading(false);
        }}
        onNavigationStateChange={handleNavigationStateChange}
        onError={handleError}
        onHttpError={handleHttpError}

        style={styles.webview}

        // ✅ CONFIGURACIONES CRÍTICAS PARA MERCADO PAGO
        javaScriptEnabled={true}
        domStorageEnabled={true}

        // Cookies y storage
        thirdPartyCookiesEnabled={true}
        sharedCookiesEnabled={true}

        // Navegación y contenido
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        setSupportMultipleWindows={false}

        // Seguridad y permisos
        originWhitelist={['*']}
        mixedContentMode="always"

        // User Agent optimizado para mobile
        userAgent="Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36"

        // Performance
        startInLoadingState={false}
        renderLoading={() => <></>}

        // iOS específico
        allowsBackForwardNavigationGestures={true}
        bounces={false}
      />

      {/* Debug info - Solo en desarrollo */}
      {__DEV__ && (
        <View style={styles.debugContainer}>
          <Text style={styles.debugText} numberOfLines={2}>
            {currentUrl || 'Esperando URL...'}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 1,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  subText: {
    marginTop: 5,
    fontSize: 14,
    color: '#999',
  },
  debugContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  debugText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'monospace',
  },
});