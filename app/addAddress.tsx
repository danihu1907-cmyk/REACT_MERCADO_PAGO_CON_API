import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import styles from "../components/styles/addAddressStyle";

export default function AddAddress() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        { /*CONTENEDOR DEL FORMULARIO */}
        <View style={styles.formContainer}>

          {/* Calle y número */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Direccion o lugar de entrega</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. Av. Insurgentes 123"
              placeholderTextColor="#C7C7CC"
            />
          </View>

          {/* Colonia */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Colonia</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. Centro"
              placeholderTextColor="#C7C7CC"
            />
          </View>

          {/* Código Postal */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Código Postal</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. 94150"
              placeholderTextColor="#C7C7CC"
              keyboardType="numeric"
              maxLength={5}
            />
          </View>

          {/* Estado */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Estado</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. Veracruz"
              placeholderTextColor="#C7C7CC"
            />
          </View>

          {/* Municipio o localidad */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}> Municipio o localidad </Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. Ixhuatlan del cafe"
              placeholderTextColor="#C7C7CC"
            />
          </View>

          {/* Referencias */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Referencias (opcional)</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Ej. Entre calle 5 y 7, casa color blanco"
              placeholderTextColor="#C7C7CC"
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />
          </View>

          {/* CONTENEDOR PARA LA SECCION*/}
          <TouchableOpacity style={styles.checkboxContainer}>
            <View style={styles.checkbox} />
            <Text style={styles.checkboxLabel}>
              Usar como dirección de envío predeterminada
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* BOTON DE GUARDAR*/}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Agregar dirección</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}