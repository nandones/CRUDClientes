import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, TextInput, Title, HelperText } from 'react-native-paper';
import { createClient, updateClient } from '../services/api';

const ClientFormScreen = ({ route, navigation }) => {
  const { client, onGoBack } = route.params || {};
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    aniversario: '',
    time: '',
  });
  const [errors, setErrors] = useState({
    nome: false,
    cpf: false,
  });

  useEffect(() => {
    if (client) {
      setFormData({
        nome: client.nome,
        cpf: client.cpf,
        aniversario: client.aniversario,
        time: client.time,
      });
    }
  }, [client]);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validação simples
    if (name === 'nome') {
      setErrors({
        ...errors,
        nome: value.trim() === '',
      });
    } else if (name === 'cpf') {
      setErrors({
        ...errors,
        cpf: value.trim() === '' || value.length !== 11,
      });
    }
  };

  const handleSubmit = async () => {
    if (formData.nome.trim() === '' || formData.cpf.trim() === '' || formData.cpf.length !== 11) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }

    try {
      if (client) {
        await updateClient(client.id, formData);
      } else {
        await createClient(formData);
      }
      if (onGoBack) onGoBack();
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar o cliente.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>
        {client ? 'Editar Cliente' : 'Novo Cliente'}
      </Title>

      <TextInput
        label="Nome *"
        value={formData.nome}
        onChangeText={(text) => handleChange('nome', text)}
        style={styles.input}
        error={errors.nome}
      />
      <HelperText type="error" visible={errors.nome}>
        Nome é obrigatório
      </HelperText>

      <TextInput
        label="CPF *"
        value={formData.cpf}
        onChangeText={(text) => handleChange('cpf', text)}
        style={styles.input}
        keyboardType="numeric"
        maxLength={11}
        error={errors.cpf}
      />
      <HelperText type="error" visible={errors.cpf}>
        CPF deve ter 11 dígitos
      </HelperText>

      <TextInput
        label="Aniversário"
        value={formData.aniversario}
        onChangeText={(text) => handleChange('aniversario', text)}
        style={styles.input}
        placeholder="DD/MM/AAAA"
      />

      <TextInput
        label="Time de Futebol"
        value={formData.time}
        onChangeText={(text) => handleChange('time', text)}
        style={styles.input}
      />

      <Button 
        mode="contained" 
        onPress={handleSubmit}
        style={styles.button}
      >
        Salvar
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    paddingVertical: 5,
  },
});

export default ClientFormScreen;