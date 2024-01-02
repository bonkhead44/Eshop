import React, { useEffect, useState } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchProductsAsync, productSelectors } from './catalogSlice';

// interface Props {
//   products: Product[];
//   addProduct: () => void;
// }

const Catalog = () => {
  // const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState<Product[]>([]);
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/products')
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    if (!productsLoaded) {
      dispatch(fetchProductsAsync());
    }
  }, [productsLoaded, dispatch]);

  if (status.includes('pending'))
    return (
      <LoadingComponent message="Loading products ....."></LoadingComponent>
    );

  // console.log({products});

  // const addProduct = () => {};

  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
};

export default Catalog;
