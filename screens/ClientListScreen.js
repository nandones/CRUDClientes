import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { Button, Card, Title, Paragraph, FAB } from 'react-native-paper';
import { getClients, deleteClient } from '../services/api';
import ClientItem from '../components/ClientItem';

const ClientListScreen = ({ navigation }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    try {
      const data = await getClients();
      setClients(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

const handleDelete = async (id) => {
  try {
    await deleteClient(id);
    setClients(prevClients => prevClients.filter(client => client.id !== id));
  } catch (error) {
    console.error('Erro ao excluir:', error);
  }
};

  return (
    <View style={styles.container}>
      <FlatList
        data={clients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ClientItem 
            client={item} 
            onEdit={() => navigation.navigate('ClientForm', { client: item, onGoBack: loadClients })}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        refreshing={loading}
        onRefresh={loadClients}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('ClientForm', { onGoBack: loadClients })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6200ee',
  },
});

export default ClientListScreen;