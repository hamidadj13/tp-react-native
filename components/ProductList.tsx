// components/ProductList.tsx
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { Product } from '../services/api';

interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => Promise<void>;
}

export default function ProductList({ products, onDelete }: ProductListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Button title="Supprimer" onPress={() => onDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#666',
  },
});