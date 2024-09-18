import { useContext } from "react";
import styles from "./HeaderMenu.module.scss";
import ProduitFavorisContext from "../../../../contexts/produitFavorisContext";
import ProduitsFavoris from "../ProduitsFavoris/ProduitsFavoris";
import Payment from "./Payment";

function HeaderMenu() {
  const produitsFavorisContext = useContext(ProduitFavorisContext);

  const handlePayerClick = () => {
    // Rediriger l'utilisateur vers la page Payment
    window.location.href = "/payment";
  };

  return (
    <ul className={`${styles.menuContainer} border p-20`}>
      {produitsFavorisContext.data.length > 0 ? (
        <>
          {produitsFavorisContext.data.map((favoris) => (
            <li key={favoris._id}>
              <ProduitsFavoris produit={favoris} />
            </li>
          ))}

          <li>
            <button className={styles.payerButton} onClick={handlePayerClick}>
              Commande
            </button>
          </li>
        </>
      ) : (
        <li>Aucun produit ajouté au panier</li>
      )}
    </ul>
  );
}

export default HeaderMenu;
