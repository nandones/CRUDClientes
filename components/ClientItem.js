import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const ClientItem = ({ client, onEdit, onDelete }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{client.nome}</Title>
        <Paragraph>CPF: {client.cpf}</Paragraph>
        <Paragraph>Aniversário: {client.aniversario || 'Não informado'}</Paragraph>
        <Paragraph>Time: {client.time || 'Não informado'}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onEdit}>Editar</Button>
        <Button onPress={onDelete}>Excluir</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
});

export default ClientItem;