import React, { FC } from 'react';
import Header from '@/components/Header';
import styles from './style.module.less';
import BaseNavigate from '@/pages/Product/components/BaseNavigate';
import Info from '@/pages/Product/components/Info';

const Product: FC = () => {
  return (
    <div className={styles.productContainer}>
      <Header />
      <img className={styles.portfolio} src="https://cdn.jsdelivr.net/gh/pro-collection/hd/src/static/portfolio.png"
           alt="" />
      <div className={styles.content}>
        <BaseNavigate />
        <div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Product;
