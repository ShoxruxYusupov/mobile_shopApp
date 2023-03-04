import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Content from '../../components/content/Content';
import Search from '../../components/search/Search';
import styles from './shop.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useApp } from '../../hooks/useApp';
import { GiShoppingCart } from 'react-icons/gi';

function Shop() {
  const { total, cartItems, foods } = useApp();
  return (
    <div className="main">
      <div className="container">
        <div className={styles.title}>
          <Link to="/">
            <AiOutlineArrowLeft />
          </Link>
          <h1>Cart</h1>
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="content">
          <Content
            props={foods}
            wc={true}
          />
        </div>
        {(total === 0 || cartItems.length === 0) ? (
          <div className={styles.emptyCart}>
            <GiShoppingCart />
            <h3>Your cart is empty</h3>
          </div>
        ) : (
          <div className={styles.pay}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <p>Subtotal</p>
                <span>${total}</span>
              </li>
              <li className={styles.li}>
                <p>Delivery charge</p>
                <span>${total ? 5 : 0}</span>
              </li>
              <li className={styles.li}>
                <p>Discount</p>
                <span>${total ? 10 : 0}</span>
              </li>
              <li className={styles.total + ' ' + styles.li}>
                <p>Total</p>
                <span>${total ? total - 5 : 0}</span>
              </li>
            </ul>
            <Link to={total ? '/contact' : ''}>
              <Button
                variant="contained"
                className={styles.loginBtn}
              >
                Place my order
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
