import React, { FC } from 'react';
import styles from './style.module.less';

// https://cdn.jsdelivr.net/gh/pro-collection/hd/src/static/home_base.jpg
const BaseNavigate: FC = () => {
  return (
    <div className={styles.baseNavigate}>
      <img
        className={styles.imgContainer}
        src="https://cdn.jsdelivr.net/gh/pro-collection/hd/src/static/product_element_1.png" alt=""
      />
      <div className={styles.navigate}>
        <span className="nav1">App</span>
        <span className="nav2">Web</span>
        <span className="nav3">平面</span>
        <span className="nav4">绘画</span>
        <span className="nav5">运营</span>
      </div>
    </div>
  );
};

export default BaseNavigate;
