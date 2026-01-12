import { View, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import api from '../src/services/api';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const res = await fetch(api.login, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const json = await res.json();

    if (json.success) {
      router.replace('/home');
    } else {
      Alert.alert('Erro', 'Login inválido');
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Entrar" onPress={login} />
      <Button title="Cadastrar" onPress={() => router.push('/register')} />
    </View>
  );
}
