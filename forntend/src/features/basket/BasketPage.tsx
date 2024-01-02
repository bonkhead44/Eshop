import axios from 'axios';
import { useState, useEffect } from 'react';
import agent from '../../app/api/agent';
import { Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { Basket, BasketItem } from '../../app/models/basket';
import BasketTable from './BasketTable';
import { useStoreContext } from '../../app/context/StoreContext';
import BasketSummary from './BasketSummary';
import { useAppSelector } from '../../app/store/configureStore';

const BasketPage = () => {
  // const b:Basket = {id: 0, buyerId: '', items: []};

  // const [loading, setLoading] = useState(true);
  // const [basket, setBasket] = useState<Basket>({
  //   id: 0,
  //   buyerId: '',
  //   items: [],
  // });

  // useEffect(() => {
  //   agent.Basket.list()
  //     .then((basket) => setBasket(basket))
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // }, []);

  // if (loading)
  //   return <LoadingComponent message="Loading busket ....."></LoadingComponent>;

  // const { basket } = useStoreContext();
  const { basket } = useAppSelector(state => state.basket);

  return (
    <>
      <BasketTable items={basket.items} />
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
          <Button
            component={Link}
            to="/checkout"
            variant="contained"
            size="large"
            fullWidth
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default BasketPage;
