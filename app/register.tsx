import { View, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import api from '../src/services/api';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    const res = await fetch(api.register, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const json = await res.json();

    if (json.success) {
      Alert.alert('Sucesso', 'Cadastro realizado');
      router.replace('/');
    } else {
      Alert.alert('Erro', 'Falha ao cadastrar');
    }
  };

  return (
    <View>
      <TextInput placeholder="Nome" onChangeText={setName} />
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Cadastrar" onPress={register} />
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
