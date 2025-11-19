import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router"; // ← Expo Router
import styles from "@/components/styles/carritoStyles";

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  cantidad: number;
  imagen: any;
}

export default function Cart() {
  const router = useRouter(); // ← Hook de navegación
  const [productos, setProductos] = useState<Producto[]>([
    {
      id: 1,
      nombre: "Power Ade",
      categoria: "Bebidas energéticas",
      precio: 30,
      cantidad: 1,
      imagen: require("../../assets/images/Power.png"),
    },
    {
      id: 2,
      nombre: "Power Ade",
      categoria: "Bebidas energéticas",
      precio: 35,
      cantidad: 2,
      imagen: require("../../assets/images/Power.png"),
    },
    {
      id: 3,
      nombre: "Power Ade",
      categoria: "Bebidas energéticas",
      precio: 45,
      cantidad: 1,
      imagen: require("../../assets/images/Power.png"),
    },
    {
      id: 4,
      nombre: "Power Ade",
      categoria: "Bebidas",
      precio: 45,
      cantidad: 1,
      imagen: require("../../assets/images/Power.png"),
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  const actualizarCantidad = (id: number, cambio: number) => {
    setProductos(productos.map(producto =>
      producto.id === id
        ? { ...producto, cantidad: Math.max(1, producto.cantidad + cambio) }
        : producto
    ));
  };

  const eliminarProducto = (id: number) => {
    setProductos(productos.filter(producto => producto.id !== id));
    setModalVisible(false);
  };

  const añadirAFavoritos = (nombre: string) => {
    console.log(`${nombre} añadido a favoritos`);
    setModalVisible(false);
  };

  const mostrarOpciones = (id: number) => {
    const producto = productos.find(p => p.id === id);
    if (producto) {
      setProductoSeleccionado(producto);
      setModalVisible(true);
    }
  };

  const calcularSubtotal = () => {
    return productos.reduce((total, producto) =>
      total + (producto.precio * producto.cantidad), 0
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.root} contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Carrito</Text>

          {productos.map((producto) => (
            <View key={producto.id} style={styles.card}>
              <Image source={producto.imagen} style={styles.productImage} />

              <View style={styles.productInfo}>
                <Text style={styles.productName}>{producto.nombre}</Text>
                <Text style={styles.productCategory}>{producto.categoria}</Text>

                <View style={styles.quantityRow}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => actualizarCantidad(producto.id, -1)}
                  >
                    <Text style={styles.quantityButtonText}>−</Text>
                  </TouchableOpacity>

                  <Text style={styles.quantityText}>{producto.cantidad}</Text>

                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => actualizarCantidad(producto.id, 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.rightSection}>
                <TouchableOpacity
                  style={styles.menuButton}
                  onPress={() => mostrarOpciones(producto.id)}
                >
                  <Text style={styles.menuDots}>⋮</Text>
                </TouchableOpacity>

                <Text style={styles.price}>{producto.precio * producto.cantidad}$</Text>
              </View>
            </View>
          ))}

          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalLabel}>Subtotal total</Text>
            <Text style={styles.subtotalAmount}>${calcularSubtotal()}</Text>
          </View>
        </View>
      </ScrollView>

      {/* ✅ Botón Verificar con router.push */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => router.push("/checkout")} // ← Navegación con Expo Router
        >
          <Text style={styles.verifyButtonText}>Verificar</Text>
        </TouchableOpacity>
      </View>

      {/* Modal personalizado */}
      {modalVisible && productoSeleccionado && (
        <View style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.3)"
        }}>
          <View style={styles.alertContainer}>
            <Text style={styles.alertText}>
              ¿Qué deseas hacer con {productoSeleccionado.nombre}?
            </Text>

            <TouchableOpacity
              style={styles.alertButton}
              onPress={() => añadirAFavoritos(productoSeleccionado.nombre)}
            >
              <Text style={styles.alertButtonText}>Añadir a favoritos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.alertButton, { backgroundColor: "#FF3B30", marginTop: 8 }]}
              onPress={() => eliminarProducto(productoSeleccionado.id)}
            >
              <Text style={styles.alertButtonText}>Eliminar de la lista</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.alertButton, { backgroundColor: "#8E8E93", marginTop: 8 }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.alertButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}