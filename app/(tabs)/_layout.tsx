import { Tabs } from "expo-router";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#6e6e6e",
        tabBarStyle: {
          height: 98,
          paddingBottom: 16,
          paddingTop: 12,
          borderTopWidth: 0,
          backgroundColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false, 
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#00bcd4" : "transparent",
                borderRadius: 100,
                padding: 1,
                width: 48,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="home-outline" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="carrito"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#00bcd4" : "transparent",
                borderRadius: 100,
                padding: 1,
                width: 48,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="cart-outline" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#00bcd4" : "transparent",
                borderRadius: 100,
                padding: 1,
                width: 48,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons name="heart-outline" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="usuario"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#00bcd4" : "transparent",
                borderRadius: 100,
                padding: 1,
                width: 48,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="person-outline" color={color} size={size} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}