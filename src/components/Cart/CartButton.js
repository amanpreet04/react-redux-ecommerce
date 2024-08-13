import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const uiDispatch = useDispatch(uiActions);

  function toggleHandler() {
    uiDispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
