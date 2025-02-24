// app/(tabs)/products.tsx
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createProduct, fetchProducts, deleteProduct, Product } from '../../services/api';
import ProductForm from '../../components/ProductForm';
import ProductList from '../../components/ProductList';

export default function ProductScreen() {
  const [products, setProducts] = useState<Product[]>([]);

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
  };

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ProductForm onSubmit={handleCreateProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </View>
  );
}