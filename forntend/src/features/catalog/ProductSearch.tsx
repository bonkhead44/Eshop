import { TextField, debounce } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { useState } from 'react';
import { setProductParams } from './catalogSlice';

export default function ProductSearch() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { productParams } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);

  const debouncedSearch = debounce((event: any) => {
    dispatch(setProductParams({ searchTerm: event.target.value }));
  }, 1000);
  return (
    <TextField
      label="Search products"
      variant="outlined"
      fullWidth
      value={searchTerm || ''}
      onChange={(event: any) => {
        setSearchTerm(event.target.value);
        debouncedSearch(event);
      }}
    />
  );
}
