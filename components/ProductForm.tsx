import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar, ActivityIndicator } from 'react-native-paper';
import { Product } from '../services/api';

interface ProductFormProps {
  onSubmit: (product: Omit<Product, 'id'>) => Promise<void>;
  initialProduct?: Product;
}

export default function ProductForm({ onSubmit, initialProduct }: ProductFormProps) {
  const [title, setTitle] = useState(initialProduct?.title || '');
  const [body, setBody] = useState(initialProduct?.body || '');
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !body) {
      setSnackbarMessage('Veuillez remplir tous les champs.');
      return;
    }

    setLoading(true);
    try {
      await onSubmit({ title, body });
      setSnackbarMessage('Produit ajouté avec succès !');
      setTitle('');
      setBody('');
    } catch (error) {
      setSnackbarMessage('Échec de l\'enregistrement. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Titre du produit"
        value={title}
        onChangeText={setTitle}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Description du produit"
        value={body}
        onChangeText={setBody}
        mode="outlined"
        multiline
        numberOfLines={3}
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : 'Enregistrer'}
      </Button>
      <Snackbar
        visible={!!snackbarMessage}
        onDismiss={() => setSnackbarMessage(null)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});