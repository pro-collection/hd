import React, { FC } from 'react';
import styles from "./style.module.less";
import { useNavigate } from "react-router";

const Header: FC = () => {
  const history = useNavigate()

  const push = () => {
    history('/home')
  }
  return (
    <header className={styles.header}>
      <span onClick={push}>首页</span>
      <span>简历</span>
      <span>作品</span>
      <span>联系方式</span>
    </header>
  );
};

export default Header;
