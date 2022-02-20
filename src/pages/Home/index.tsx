import Header from "@/components/Header";
import React, { FC } from "react";
import styles from "./style.module.less";

const Home: FC = () => {
  return (
    <>

      <div className={styles.homeContainer}>
        <Header />
        <div className={styles.content}>我是热爱设计的胡蝶</div>
      </div>
    </>

  );
};

export default Home;
