import React from "react";
import styles from "../LoadingScreen/LoadingScreen.module.scss";

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
