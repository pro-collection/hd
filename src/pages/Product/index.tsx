import React, { FC } from 'react';
import Header from '@/components/Header';
import styles from './style.module.less';

const Product: FC = () => {
  return (
    <div className={styles.productContainer}>
      <Header />
      <div className={styles.navigate}>
        <span>App</span>
        <span>Web</span>
        <span>平面</span>
        <span>绘画</span>
        <span>运营</span>
      </div>
    </div>
  );
};

export default Product;
