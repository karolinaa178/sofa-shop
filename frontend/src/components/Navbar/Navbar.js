import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.navbar__logo}>
          <h2>STYLE29</h2>
        </div>
      </Link>
      
      <ul className={styles.navbar__links}>
        <li>
          <Link to="/cart" className={styles.cart__link}>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className={styles.cartlogo__badge}>{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className={styles.hamburger__menu} onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;