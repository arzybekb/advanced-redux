import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/slices/uiSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleHandler = () => {
    dispatch(uiActions.toggle()) // dispatch({type: 'increment', ....})
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
