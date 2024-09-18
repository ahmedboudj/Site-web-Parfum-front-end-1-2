import React, { useState } from "react";
import styles from "./Home.module.scss";
import Produits from "./components/Produits/Produits";
import Accueil from "./components/Accueil/Accueil";

const Home = ({ produits, accueil }) => {
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.homeContainer}>
      {" "}
      {/* Ajout d'une classe CSS pour le conteneur principal */}
      <div className={`container mt-50 ${styles.content}`}>
        <Accueil handleDecouvrir={handleVisible} />
      </div>
      <Produits visible={visible} />
    </div>
  );
};

export default Home;
