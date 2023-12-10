import React, { useEffect, useState } from 'react';
import Header from '../../features/catalog/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// import { Product } from '../models/product';
// import Catalog from '../../features/catalog/Catalog';


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }


  // const [products, setProducts] = useState<Product[]>([]);
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/products')
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // const addProduct = () => {};

  return (
   
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
      <Container>
        {/* <Catalog products={products} addProduct={addProduct}></Catalog> */}
        <Outlet ></Outlet>
      </Container>
    </ThemeProvider>
      
    
  );
}

export default App;
