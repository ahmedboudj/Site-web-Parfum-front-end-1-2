import React, { useContext, useState } from "react";
import styles from "../../Produits.module.scss";
import ProduitFavorisContext from "../../../../../../contexts/produitFavorisContext";
import { NavLink } from "react-router-dom";

const Produit = ({ data, saved, supprimerUnProduit }) => {
  const { _id, image, name, description, price } = data;
  const produitFavorisContext = useContext(ProduitFavorisContext);

  const handleClickSaved = (item) => {
    produitFavorisContext.setData(item);
  };

  const [addedToCart, setAddedToCart] = useState(false);

  const handleAjouterAuPanier = () => {
    console.log("Produit ajouté au panier :", data);
    setAddedToCart(!addedToCart);
  };

  return (
    <div onClick={() => handleClickSaved(data)} className={`${styles.produit}`}>
      <div
        className={styles.delete_edit}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <i
          onClick={() => supprimerUnProduit(_id)}
          className={`${styles.fa_trash} fa-solid fa-trash`}
        ></i>
        <NavLink to={`/admin/edit/${_id}`}>
          <i className={`${styles.fa_pen} fa-solid fa-pen-to-square`}></i>
        </NavLink>
      </div>
      <div className="hover_opacity">
        <div>
          <img src={image} alt={name} />
        </div>
        <div className={styles.description_produit}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{price} $</p>
          {/* Bouton "Add to Cart" avec gestion de l'état de la classe CSS */}
          <button
            onClick={handleAjouterAuPanier}
            className={`${styles.btn_ajouter_panier} ${
              addedToCart ? styles.btn_added_to_cart : ""
            }`}
          >
            {addedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produit;
