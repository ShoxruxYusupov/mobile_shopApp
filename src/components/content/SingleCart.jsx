import { useApp } from '../../hooks/useApp';
import styles from './content.module.css';

function SingleCart({ props }) {
  const { addToCart, setTotal, total, cartItems, removeById, innerToCart } =
    useApp();

  function adderToCart(id) {
    if (cartItems.length === 0) {
      addToCart(props);
      setTotal(total + +props.price);
    } else {
      cartItems.map((item) => {
        if (item.id !== id) {
          addToCart(props);
          setTotal(total + +props.price);
        }
      });
    }
  }

  return (
    <div className={styles.singleFood}>
      <div className={styles.wrap}>
        <div className={styles.img}>
          <img
            src={props.img}
            alt={props.name}
          />
        </div>
        <div className={styles.foodInfo}>
          <h3>{props.name}</h3>
          <p>{props.restaurant}</p>
        </div>
      </div>
      <div className={styles.foodPrice}>
        <span>${props.price}</span>
        <button
          className={
            styles.addToCart + ' ' + `${props.inCart ? styles.inCart : ''}`
          }
          onClick={() => {
            if (props.inCart) {
              removeById(props.id);
              setTotal(total - +props.price);
            } else {
              adderToCart(props.id);
            }
            innerToCart(props.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleCart;
