import styles from "./HomeScreen.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../../components/Product/Product";

//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";
import CarouselContainer from "../../components/Carousel/CarouselContainer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className={styles.homescreen}>
      <CarouselContainer />
      <h2 className={styles.homescreen__title}>Latest Products</h2>
      <div className={styles.homescreen__products}>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;