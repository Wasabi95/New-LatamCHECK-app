/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProductService } from '../../Services/services';
import styles from './SingleProductPage.module.css';
import { Error } from '../../components';
import { calculateDiscountPercent, isPresent } from '../../utils/utils';
import { useAllProductsContext } from '../../contexts/ProductsContextProvider';

const SingleProductPage = () => {
  const { productId } = useParams();
  const {
    wishlist: wishlistFromContext,
    cart: cartFromContext,
    showMainPageLoader,
    hideMainPageLoader,
    addToCartDispatch,
    addToWishlistDispatch,
  } = useAllProductsContext();

  const [singleProductState, setSingleProductState] = useState({
    isSinglePageLoading: true,
    singleProductData: [],
    isSinglePageError: false,
  });

  const [activeColorObj, setActiveColorObj] = useState(null);
  const [setIsWishlistBtnDisable] = useState(false);
  const [isCartBtnDisable, setIsCartBtnDisable] = useState(false);

  const fetchSingleProduct = async () => {
    setSingleProductState({ ...singleProductState, isSinglePageLoading: true });

    showMainPageLoader();

    try {
      const product = await getSingleProductService(productId);

      hideMainPageLoader();
      setSingleProductState({
        isSinglePageLoading: false,
        singleProductData: product,
        isSinglePageError: false,
      });
      setActiveColorObj(product?.colors[0]);
    } catch (error) {
      console.error(error.response);

      hideMainPageLoader();

      setSingleProductState({
        ...singleProductState,
        isSinglePageLoading: false,
        isSinglePageError: true,
      });
    }
  };

  useEffect(() => {
    fetchSingleProduct();
    // eslint-disable-next-line
  }, [productId]);

  const { isSinglePageLoading, singleProductData, isSinglePageError } =
    singleProductState;

  if (isSinglePageLoading) {
    return <main className='full-page'></main>;
  }

  if (isSinglePageError) {
    return <Error errorText='Error: Product Not Found' />;
  }

  const {
    _id: singlePageProductId,
    name,
    price,
    originalPrice,
    image,
    description,
    category,
    afirmacion,
    analisis,
    veredicto,
  } = singleProductData;

  const discountPercent = calculateDiscountPercent(price, originalPrice);
  const isSinglePageProductInCart = isPresent(
    `${singlePageProductId}${activeColorObj?.color}`,
    cartFromContext
  );
  const isSinglePageProductInWishlist = isPresent(
    `${singlePageProductId}${activeColorObj?.color}`,
    wishlistFromContext
  );

  const handleCartBtnClick = async () => {
    if (isSinglePageProductInCart) {
      // Handle cart button click when product is already in cart
    } else {
      setIsCartBtnDisable(true);
      await addToCartDispatch({
        ...singleProductData,
        _id: `${singleProductData._id}${activeColorObj.color}`,
        colors: [activeColorObj],
      });
      setIsCartBtnDisable(false);
    }
  };

  const handleWishlistBtnClick = async () => {
    if (isSinglePageProductInWishlist) {
      // Handle wishlist button click when product is already in wishlist
    } else {
      setIsWishlistBtnDisable(true);
      await addToWishlistDispatch({
        ...singleProductData,
        _id: `${singleProductData._id}${activeColorObj.color}`,
        colors: [activeColorObj],
      });
      setIsWishlistBtnDisable(false);
    }
  };

  const handleColorClick = (colorData) => setActiveColorObj(colorData);

  return (
    <main className={`container half-page ${styles.productPageCenter}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.productContent}>
        <h3 className='primary-color-text'>{name}</h3>
        <p className={styles.desc}>{description}</p>

        <div className={styles.row}>
          <span>Afirmacion:</span>
          <p className={styles.afirmacion}>{afirmacion}</p>
        </div>
        <div className={styles.row}>
          <span>Analisis:</span>
          <p className={styles.analisis}>{analisis}</p>
        </div>
        <div className={styles.row}>
          <span>Veredicto:</span>
          <p className={styles.veredicto}>{veredicto}</p>
        </div>

        <div className={styles.row}>
          <span>Category:</span>
          <p>{category}</p>
        </div>

        <hr />
      </div>
    </main>
  );
};

export default SingleProductPage;


