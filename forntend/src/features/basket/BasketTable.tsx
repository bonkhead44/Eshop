import { Remove, Add, Delete, DeleteOutlined, DeleteForeverOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from '@mui/material';
import { BasketItem } from '../../app/models/basket';
import { useState } from 'react';
import agent from '../../app/api/agent';
// import { useStoreContext } from '../../app/context/StoreContext';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { addBasketItemAsync, removeBasketItemAsync, setBasket } from '../../features/basket/basketSlice';

interface Props {
  items: BasketItem[];
}

 const BasketTable = ({ items }: Props) => {
  // const [status, setStatus] = useState({
  //   loading: false,
  //   name: '',
  // });
  // const { setBasket, removeItem } = useStoreContext();
  const {status} = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();

  // const handleAddItem = (productId: number, name: string) => {
  //   setStatus({loading: true, name});
  //   agent.Basket.addItem(productId)
  //     .then(basket => dispatch(setBasket(basket)))
  //     .catch((error) => console.log(error))
  //     .finally(() => setStatus({loading: false, name: ''}));
  // };

  // const handleRemoveItem = (productId: number, quantity = 1, name: string) => {
  //   setStatus({loading: true, name});
  //   agent.Basket.removeItem(productId, quantity)
  //     .then(() => dispatch(removeItem({productId, quantity})))
  //     .catch((error) => console.log(error))
  //     .finally(() => setStatus({loading: false, name: ''}));
  // };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.productId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display="flex" alignItems="center">
                  <img
                    style={{ height: 50, marginRight: 20 }}
                    src={item.pictureUrl}
                    alt={item.name}
                  />
                  <span>{item.name}</span>
                </Box>
              </TableCell>
              <TableCell align="right">
                ${(item.price / 100).toFixed(2)}
              </TableCell>
              <TableCell align="center">
                <LoadingButton
                  loading={status === 'pendingRemoveItem' + item.productId + 'remove'}
                  onClick={() => dispatch(removeBasketItemAsync({productId: item.productId, quantity:1, name: 'remove'}))}
                  color="error"
                >
                  <Remove />
                </LoadingButton>
                {item.quantity}
                <LoadingButton
                  loading={status === 'pendingAddItem' + item.productId}
                  onClick={() => dispatch(addBasketItemAsync({productId: item.productId}))}
                  color="secondary"
                >
                  <Add />
                </LoadingButton>
              </TableCell>
              <TableCell align="right">
                ${((item.price / 100) * item.quantity).toFixed(2)}
              </TableCell>

              <TableCell align="right">
                <LoadingButton
                  loading={status === 'pendingRemoveItem' + item.productId + 'delete'}
                  onClick={() =>
                    dispatch(removeBasketItemAsync({productId: item.productId, quantity:item.quantity, name: 'delete'}))
                  }
                  color="error"
                >
                  <DeleteForeverOutlined />
                </LoadingButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasketTable;
