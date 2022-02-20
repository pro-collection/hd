import React, { FC } from 'react';
import Header from '@/components/Header';
import styles from './style.module.less';
import BaseNavigate from '@/pages/Product/components/BaseNavigate';

const Product: FC = () => {
  return (
    <div className={styles.productContainer}>
      <Header />
      <BaseNavigate />
    </div>
  );
};

export default Product;
