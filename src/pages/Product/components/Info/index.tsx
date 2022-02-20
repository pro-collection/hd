import React, { FC } from 'react';
import styles from './style.module.less';

const Info: FC = () => {
  return (
    <div className={styles.info}>
      <p className={styles.line1}>作品集</p>
      <p className={styles.line2}>个人作品集分类</p>
      <p className={styles.line3}>Personal portfolio classification</p>
    </div>
  );
};

export default Info;
