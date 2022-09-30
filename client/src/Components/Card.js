import styles from "./Card.module.css";
import {Link} from "react-router-dom"

const Card = (props) => {
  return (
    <div className={styles.card} key={props.key}>
      <p className={styles.category}>
        <b>Category:</b> {props.category}
      </p>
      <div className={styles.image}>
        <img src={props.image} alt="garbage"></img>
      </div>
      <div className={styles.left}>
        <div>
          <p className={styles.title}><b>{props.title}</b></p>
        </div>
        <div>
        <p><b>Description: </b>{props.description}</p>
        </div>
        <div>
          <p><b>Cost: $</b>{props.price}</p>
        </div>
        <Link to="/cart"><button className={styles.button}>Add To Cart</button></Link>
      </div>
    </div>
  );
};
export default Card;
