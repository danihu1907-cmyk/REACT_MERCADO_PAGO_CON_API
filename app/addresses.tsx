import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';
import styles from "../components/styles/addressesStyle";

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
}

export default function Addresses() {
  const addresses: Address[] = [
    {
      id: "1",
      name: "Jane Doe",
      street: "3 Newbridge Court",
      city: "Chino Hills, CA 91709, United States",
    },
    {
      id: "2",
      name: "John Doe",
      street: "3 Newbridge Court",
      city: "Chino Hills, CA 91709, United States",
    },
    {
      id: "3",
      name: "John Doe",
      street: "51 Riverside",
      city: "Chino Hills, CA 91709, United States",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {addresses.map((address) => (
          <View key={address.id} style={styles.addressCard}>
            <View style={styles.addressHeader}>
              <Text style={styles.addressName}>{address.name}</Text>
              <TouchableOpacity>
                <Text style={styles.editButton}>Editar</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.addressStreet}>{address.street}</Text>
            <Text style={styles.addressCity}>{address.city}</Text>

            <TouchableOpacity style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>
                Utilizar como dirección de envío
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={() => { router.push("/addAddress") }}>
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}