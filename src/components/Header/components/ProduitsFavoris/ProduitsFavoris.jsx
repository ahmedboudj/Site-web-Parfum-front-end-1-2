import React, { useContext } from "react";
import styles from "../../../../pages/Home/components/Produits/Produits.module.scss";
import ProduitFavorisContext from "../../../../contexts/produitFavorisContext";

const ProduitsFavoris = ({ produit }) => {
  const { image, name, _id } = produit;
 

  return (
    <div
      className={`${styles.produitsFavoris} d-flex flex-row justify-content-center align-items-center`}
    >
      <img className="mr-10" src={image} alt={name} />
      <span className="flex-fill">{name}</span>
    
    </div>
  );
};

export default ProduitsFavoris;
