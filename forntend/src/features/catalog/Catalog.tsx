import React, { useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';

// interface Props {
//   products: Product[];
//   addProduct: () => void;
// }

const Catalog = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/products')
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .then((error) => console.log(error))
      .finally(() => setLoading(false))
      ;
  }, []);

  if(loading) return <LoadingComponent message="Loading products ....."></LoadingComponent>;

  // console.log({products});

  // const addProduct = () => {};

  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
};

export default Catalog;
