import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="register" options={{ title: 'Cadastro' }} />
      <Stack.Screen name="home" options={{ title: 'Home' }} />
    </Stack>
  );
}
