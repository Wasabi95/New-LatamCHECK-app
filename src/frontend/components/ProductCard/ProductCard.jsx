import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styles from './ProductCard.module.css';
import { Link, useLocation } from 'react-router-dom';
import { 
  isPresent,
} from '../../utils/utils';
import { useAllProductsContext } from '../../contexts/ProductsContextProvider';
import { useAuthContext } from '../../contexts/AuthContextProvider';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const location = useLocation();
  const isCardInWishlistPage = location.pathname === '/wishlist';

  useAuthContext();
  const {
    cart: cartFromContext,   
   
  } = useAllProductsContext();

  const { colors, stock } = product;
  const inStock = stock > 0;

  const [activeColorObj] = useState(colors[0]);

  // eslint-disable-next-line no-empty-pattern
  const [] = useState(false);

  const isProductInCart = isPresent(
    isCardInWishlistPage
      ? product._id
      : `${product._id}${activeColorObj.color}`,
    cartFromContext
  );


  if (isProductInCart) {
  }


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
    <img className={styles.productImage} src={product.image} alt={product.name} />
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



