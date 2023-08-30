import React from 'react';
import styles from './HomeImage.module.scss';

function HomeImage() {
	return (
		<div className={styles.allimage}>
			<img
				className={styles.first_fullImg}
				src="//cb.scene7.com/is/image/Crate/cb_dHP_08242023_CBCC_Hero?wid=1440&amp;qlt=80&amp;op_sharpen=1"
				alt=""
				width="100%"
			/>
			<img
				className={styles.second_fullImg}
				src="//cb.scene7.com/is/image/Crate/cb_dHP_08242023_FurniturePromo?wid=1440&amp;qlt=80&amp;op_sharpen=1"
				alt=""
				width="100%"
			/>
		</div>
	);
}

export default HomeImage;
