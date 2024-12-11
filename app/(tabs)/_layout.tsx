import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#61dafb',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#25292e',
      }
    }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, focused }) => (
        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
      ) }} />
      <Tabs.Screen name="about" options={{ title: 'About', tabBarIcon: ({ color, focused }) => (
        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={24} color={color} />
      ) }} />
    </Tabs>
  );
}