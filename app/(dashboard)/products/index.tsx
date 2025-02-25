import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { createProduct, fetchProducts, deleteProduct, Product } from '../../../services/api';
import ProductForm from '../../../components/ProductForm';
import ProductList from '../../../components/ProductList';
import { Snackbar, Appbar } from 'react-native-paper';

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  // Charger les produits au démarrage
  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  // Gérer la création d'un produit
  const handleCreateProduct = async (product: Omit<Product, 'id'>) => {
    try {
      const newProduct = await createProduct(product);
      setProducts([...products, newProduct]);
      setSnackbarMessage('Produit ajouté avec succès !');
    } catch (error) {
      setSnackbarMessage('Erreur lors de l\'ajout du produit.');
    }
  };

  // Gérer la suppression d'un produit
  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter(product => product.id !== id));
      setSnackbarMessage('Produit supprimé.');
    } catch (error) {
      setSnackbarMessage('Erreur lors de la suppression du produit.');
    }
  };

  return (
    <View style={styles.container}>
      {/* En-tête personnalisé */}
      <Appbar.Header>
        <Appbar.Content title="Produits" />
      </Appbar.Header>

      {/* Formulaire et liste de produits */}
      <ScrollView contentContainerStyle={styles.content}>
        <ProductForm onSubmit={handleCreateProduct} />
        <ProductList products={products} onDelete={handleDeleteProduct} />
      </ScrollView>

      {/* Snackbar pour les messages */}
      <Snackbar
        visible={!!snackbarMessage}
        onDismiss={() => setSnackbarMessage(null)}
        duration={3000}
        style={styles.snackbar}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 20,
  },
  snackbar: {
    backgroundColor: '#6200ee', // Couleur du Snackbar
  },
});