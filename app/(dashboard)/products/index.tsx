import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createProduct, fetchProducts, deleteProduct, Product } from '../../../services/api';
import ProductForm from '../../../components/ProductForm';
import ProductList from '../../../components/ProductList';
import { Snackbar } from 'react-native-paper';

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const handleCreateProduct = async (product: Omit<Product, 'id'>) => {
    const newProduct = await createProduct(product);
    setProducts([...products, newProduct]);
    setSnackbarMessage('Produit ajouté avec succès !');
  };

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id);
    setProducts(products.filter(product => product.id !== id));
    setSnackbarMessage('Produit supprimé.');
  };

  return (
    <View style={styles.container}>
      <ProductForm onSubmit={handleCreateProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} />
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
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
});
