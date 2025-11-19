import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../components/styles/successStyles";
import { router } from 'expo-router';

export default function Success() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* CONTENEDOR DE LA IMAGEN*/}
        <View style={styles.illustrationContainer}>
          <Image
            source={require("../assets/images/shopping-bags.jpg")}
            style={styles.imagen}
            resizeMode="contain"
          />
        </View>

        {/* Título */}
        <Text style={styles.title}>Compra exitosa</Text>

        {/* DESCRIPCION*/}
        <Text style={styles.description}>
          Tu compra esta en preparación pronto{"\n"}
          será enviada por tu repartidor asignado
        </Text>

        {/* BOTON*/}
        <TouchableOpacity style={styles.button} onPress={() => router.push("/carrito")}>
          <Text style={styles.buttonText}>Continuar comprando</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

}
