import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View>
      <Text>Bem-vindo 🎉</Text>
      <Button
        title="Logout"
        onPress={() => router.replace('/')}
      />
    </View>
  );
}
