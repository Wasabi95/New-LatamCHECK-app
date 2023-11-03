import { NavLink } from 'react-router-dom';
import styles from './LinksContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the Font Awesome brand icons
import { useAllProductsContext } from '../../contexts/ProductsContextProvider';
import ItemCount from './ItemCount';

const LinksContainer = () => {
  const { wishlist: wishlistFromContext, cart: cartFromContext } =
    useAllProductsContext();

  const navStyle = ({ isActive }) => {
    const outputClass = styles.linkCSS;
    if (isActive) return `${outputClass} ${styles.active}`;
    return outputClass;
  };

  // Add the Font Awesome brand icons to the library
  library.add(faXTwitter, faFacebook, faInstagram, faLinkedin);

  return (
    <div className={styles.linksContainer}>
      <NavLink className={styles.exploreLink} to='/products'>
        Explore
      </NavLink>
      <NavLink className={navStyle} to='https://twitter.com/AndreyCarvaja17' target="_blank">
        <div className={styles.socialMediaIcon}>
          <FontAwesomeIcon icon={faXTwitter} />
          <ItemCount count={wishlistFromContext.length} />
        </div>
      </NavLink>

      <NavLink className={navStyle} to='https://www.linkedin.com/in/andy-sanclemente-58b134283/' target="_blank">
        <div className={styles.socialMediaIcon}>
          <FontAwesomeIcon icon={faLinkedin} />
          <ItemCount count={wishlistFromContext.length} />
        </div>
      </NavLink>

      <NavLink className={navStyle} to='https://www.facebook.com/AndyCarvajal100fx' target="_blank">
        <div className={styles.socialMediaIcon}>
          <FontAwesomeIcon icon={faFacebook} />
          <ItemCount count={cartFromContext.length} />
        </div>
      </NavLink>

      <NavLink className={navStyle} to='https://www.instagram.com/carvajal.ups/' target="_blank">
        <div className={styles.socialMediaIcon}>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </NavLink>
    </div>
  );
};

export default LinksContainer;


