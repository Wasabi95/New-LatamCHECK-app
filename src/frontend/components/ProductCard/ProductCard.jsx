

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import {
  AiFillCheckCircle,
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
} from 'react-icons/ai';
import styles from './ProductCard.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Price from '../Price';
import {
  LOGIN_TOAST,
  calculateDiscountPercent,
  isPresent,
} from '../../utils/utils';
import { useAllProductsContext } from '../../contexts/ProductsContextProvider';
import { useAuthContext } from '../../contexts/AuthContextProvider';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCardInWishlistPage = location.pathname === '/wishlist';

  const { user } = useAuthContext();
  const {
    wishlist: wishlistFromContext,
    cart: cartFromContext,
    addToCartDispatch,
    moveToCartDispatch,
    addToWishlistDispatch,
    removeFromWishlistDispatch,
  } = useAllProductsContext();

  const { colors, stock } = product;
  const inStock = stock > 0;

  const [activeColorObj, setActiveColorObj] = useState(colors[0]);

  const [isBothDisable, setIsBothBtnDisable] = useState(false);

  const isProductInCart = isPresent(
    isCardInWishlistPage
      ? product._id
      : `${product._id}${activeColorObj.color}`,
    cartFromContext
  );

  const isProductInWishlist = isPresent(
    isCardInWishlistPage
      ? product._id
      : `${product._id}${activeColorObj.color}`,
    wishlistFromContext
  );

  // If card is in wishlist page & product is in cartContext show- "go to cart" else show 'move to cart'

  // In productListing page, if this product is in cart- "go to cart" else show 'add to cart'
  let productBtnText = isCardInWishlistPage ? 'move to cart' : 'add to cart';

  if (isProductInCart) {
    productBtnText = 'go to cart';
  }

  const discountPercent = calculateDiscountPercent(
    product.price,
    product.originalPrice
  );

  // functions

  // this is accepting dispatch functions on conditonal basis depending on the page
  const handleCartBtnClick = async (dispatchFunction) => {
    // for wishlist page, there will be a user always

    if (!user) {
      LOGIN_TOAST();
      navigate('/login', { state: { from: location.pathname } });
      return;
    }

    if (isProductInCart) {
      navigate('/cart');
      return;
    }

    setIsBothBtnDisable(true);
    // dispatch function takes a product
    await dispatchFunction({
      ...product,
      _id: isCardInWishlistPage
        ? product._id
        : `${product._id}${activeColorObj.color}`,
      colors: [activeColorObj],
    });
    setIsBothBtnDisable(false);
  };

  const handleWishlistBtnClick = async () => {
    if (!user) {
      LOGIN_TOAST();
      navigate('/login', { state: { from: location.pathname } });
      return;
    }

    setIsBothBtnDisable(true);

    if (isProductInWishlist) {
      // delete from wishlist
      await removeFromWishlistDispatch(
        isCardInWishlistPage
          ? product._id
          : `${product._id}${activeColorObj.color}`
      );
      setIsBothBtnDisable(false);
      return;
    }

    await addToWishlistDispatch({
      ...product,
      _id: `${product._id}${activeColorObj.color}`,
      colors: [activeColorObj],
    });
    setIsBothBtnDisable(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const shareUrl = window.location.href;

  const getStatusColor = (status) => {
    if (status === 'FALSO') {
      return styles.statusRed;
    } else if (status === 'VERDADERO') {
      return styles.statusGreen;
    } else if (status === 'PARCIAL') {
      return styles.statusOrange;
    } else {
      return '';
    }
  };
        

  return (
    <article
      className={
        inStock
          ? styles.productStyle
          : `${styles.productStyle} ${styles.disabledProduct}`
      }
    >
      <div className={styles.imgContainer}>
        <Link to={`/products/${product._id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
     

      <div className={styles.cardInfo}>
        <header className={styles.cardHeader}>
        <div className={styles.socialSharing}>
            <FacebookShareButton url={shareUrl}>
              <FaFacebook className={styles.facebookIcon} />
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl}>
              <FaLinkedin className={styles.linkedinIcon} />
            </LinkedinShareButton>
            <TwitterShareButton url={shareUrl}>
              <FaTwitter className={styles.twitterIcon} />
            </TwitterShareButton>
            <EmailShareButton url={shareUrl}>
              <FaEnvelope className={styles.emailIcon} />
            </EmailShareButton>
          </div>
          <span className={styles.rating}>{product.category}</span>
     
          <p>{product.name}</p>
          <p>{product.author}</p>         
          
        </header>
        <p className="product-date">{formatDate(product.date)}</p>

        <span className={`product-status ${getStatusColor(product.status)}`}>
          {product.status}
        </span>      
      </div>
      
    </article>
    
    
    
  );
};

export default ProductCard;



