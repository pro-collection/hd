import Header from "@/components/Header";
import React, { FC } from "react";
import styles from "./style.module.less";

const Home: FC = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
    </div>
  );
};

export default Home;
