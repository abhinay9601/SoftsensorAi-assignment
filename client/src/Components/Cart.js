import styles from "./cart.module.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <p>
        <Link to="/">{"<"} Back to home</Link>
      </p>
    </div>
  );
};
export default Cart;
