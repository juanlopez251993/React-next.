import React, { useContext } from 'react';
import Image from 'next/image'
import '../styles/ProductItem.module.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import addedToCartImage from '../assets/icons/bt_added_to_cart.svg'
import styles from "../styles/ProductItem.module.scss";

const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = item => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item)
	}

	return (
		<div className={styles.ProductItem}>
			<Image src={product.images[0]} width={240} height={240} alt={product.title} />
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className={styles['more-clickable-area']} onClick={() => handleClick(product)} >
					{state.cart.includes(product) ? <Image
						className={styles['add-to-cart-btn']}
						src={addedToCartImage}
						width={50}
						height={50}
						alt="added to cart"
					/> : <Image className={styles['add-to-cart-btn']} src={addToCartImage} width={50} height={50} alt="add to cart" />}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
