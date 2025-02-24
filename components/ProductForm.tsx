// components/ProductForm.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Product } from '../services/api';

interface ProductFormProps {
  onSubmit: (product: Omit<Product, 'id'>) => Promise<void>;
  initialProduct?: Product;
}

export default function ProductForm({ onSubmit, initialProduct }: ProductFormProps) {
  const [title, setTitle] = useState(initialProduct?.title || '');
  const [body, setBody] = useState(initialProduct?.body || '');

  const handleSubmit = async () => {
    if (!title || !body) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    try {
      await onSubmit({ title, body });
      Alert.alert('Succès', 'Produit enregistré avec succès !');
      setTitle('');
      setBody('');
    } catch (error) {
      Alert.alert('Erreur', 'Échec de l\'enregistrement. Veuillez réessayer.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Titre du produit</Text>
      <TextInput
        placeholder="Titre"
        value={title}
        onChangeText={setTitle}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Description du produit</Text>
      <TextInput
        placeholder="Description"
        value={body}
        onChangeText={setBody}
        multiline
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc', height: 100 }}
      />
      <Button title="Enregistrer" onPress={handleSubmit} />
    </View>
  );
}