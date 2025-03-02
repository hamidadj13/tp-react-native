import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import { Product } from '../services/api';

interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => Promise<void>;
}

export default function ProductList({ products, onDelete }: ProductListProps) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </Card.Content>
          <Card.Actions>
            <IconButton
              icon="delete"
              iconColor="red"
              size={24}
              onPress={() => onDelete(item.id)}
            />
          </Card.Actions>
        </Card>
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  body: {
    fontSize: 14,
    color: '#666',
  },
});