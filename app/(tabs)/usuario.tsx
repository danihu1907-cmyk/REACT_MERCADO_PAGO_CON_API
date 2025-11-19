import { View, Text, useColorScheme, ScrollView,StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Colors } from '../../constants/theme';
import { Background } from '@react-navigation/elements';
import { use } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';



export default function Usuario() {
  const colorScheme = useColorScheme();
  const themeApp = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return(
    <ScrollView style={{ backgroundColor: themeApp.background }}>

    <View style={styles.viewTop}>
      <Text style = {{color: themeApp.text, fontSize: 42, fontWeight:"bold"}}>Mi perfil</Text>
    </View>

      <View style={styles.userContainer}>
        <Image
          source={require("../../assets/images/perfil.jpg")}
          style={styles.avatar}
        />
        <View>
          <Text style={[styles.userName, { color: themeApp.text }]}>Alexishh</Text>
          <Text style={[styles.userEmail, { color: themeApp.textSecondary || "#888" }]}>
            alexishh@gmail.com
          </Text>
        </View>
      </View>

        <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.sectionItem} onPress={() => router.push("/compras")}                                    >
          <View>
            <Text style={[styles.sectionTitle, { color: themeApp.text }]}>Mis compras</Text>
            <Text style={styles.sectionSubtitle}>Tengo 3 compras</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sectionItem}>
          <View>
            <Text style={[styles.sectionTitle, { color: themeApp.text }]}>Direcciones de envío</Text>
            <Text style={styles.sectionSubtitle}>3 direcciones</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sectionItem}>
          <View>
            <Text style={[styles.sectionTitle, { color: themeApp.text }]}>Métodos de pago</Text>
            <Text style={styles.sectionSubtitle}>Visa **34</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sectionItem} onPress={() => router.push("/configuracion")}>
          <View>
            <Text style={[styles.sectionTitle, { color: themeApp.text }]}>Configuración</Text>
            <Text style={styles.sectionSubtitle}>Notificaciones, contraseña</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#999" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles =  StyleSheet.create({
  viewTop:{
     marginTop: 50,
     marginLeft:25,
     marginRight:25,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    marginLeft: 25,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 14,
    color: "#777",
  },
   sectionContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  sectionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  sectionSubtitle: {
    fontSize: 13,
    color: "#999",
  },
});