import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import arrow from '../assets/icons/flechita.svg';
import styles from "../styles/MyOrder.module.scss";
import Link from "next/link"

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className={styles.MyOrder}>
			<div className={styles["title-container"]}>
				<Image src={arrow} width={30} height={30} alt="arrow" />
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles["my-order-content"]}>
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link  className={styles["primary-button"]} href="checkout">
					Checkout
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;
