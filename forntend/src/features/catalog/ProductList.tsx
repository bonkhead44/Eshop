import { Grid } from '@mui/material';
import { Product } from '../../app/models/product';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid key={product.id} item xs={4}>
          <ProductCard product={product}></ProductCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
