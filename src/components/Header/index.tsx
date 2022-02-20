import React, { FC } from 'react';
import styles from "./style.module.less";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <span>首页</span>
      <span>简历</span>
      <span>作品</span>
      <span>联系方式</span>
    </header>
  );
};

export default Header;
