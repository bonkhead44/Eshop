
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { decrement, increment } from '../contact/counterSlice';
import { Button, ButtonGroup, Typography } from '@mui/material';

const ContactPage = () => {
    

    const dispatch = useAppDispatch();
  const { data, title } = useAppSelector((state) => state.counter);
  return (
    <>
      <Typography gutterBottom variant="h3">
        {title}
      </Typography>
      <Typography variant="h5">The Data is: {data}</Typography>
      <ButtonGroup>
        <Button
          onClick={() => dispatch(decrement(1))}
          variant="contained"
          color="error"
        >
          Decrement
        </Button>
        <Button
          onClick={() => dispatch(increment(1))}
          variant="contained"
          color="secondary"
        >
          Increment
        </Button>
        <Button
          onClick={() => dispatch(increment(5))}
          variant="contained"
          color="primary"
        >
          Increment by 5
        </Button>
      </ButtonGroup>
    </>
  );
}

export default ContactPage;