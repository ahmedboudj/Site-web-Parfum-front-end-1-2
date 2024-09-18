import React, { Fragment, useContext, useState } from "react";
import styles from "./Produits.module.scss";
import ProduitFavorisContext from "../../../../contexts/produitFavorisContext";
import SearchBar from "./components/SearchBar/SearchBar";
import Produit from "./components/Produit/Produit";
import useFetchData from "../../../../hooks/useFetchData";
import apiContext from "../../../../contexts/apiContext";
import { deleteProduit } from "../../../../apis";

const Produits = ({ visible }) => {
  const { BASE_URL } = useContext(apiContext);
  const [filterInput, setFilterInput] = useState("");
  const [filterBy, setFilterBy] = useState({
    byName: true,
    byDescription: false,
  });
  const produitsFavorisContext = useContext(ProduitFavorisContext);
  const [produits, setProduits, isLoading] = useFetchData(
    `${BASE_URL}/produits`
  );

  function handleInput(e) {
    const filter = e.target.value;
    setFilterInput(filter.trim().toLowerCase());
  }

  const handleFilter = (e) => {
    const byFilter = e.target.value;
    if (byFilter === "byName")
      setFilterBy({ ...filterBy, byName: e.target.checked });
    if (byFilter === "byDescription")
      setFilterBy({ ...filterBy, byDescription: e.target.checked });
  };

  const getItemSavedState = (item) => {
    const test = produitsFavorisContext.data.filter((p) => item._id === p._id);
    return test.length > 0;
  };

  const supprimerUnProduit = async (produitId) => {
    try {
      const response = await deleteProduit(produitId);
      if (response === produitId)
        setProduits(produits.filter((produit) => produit._id !== produitId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${styles.produits} ${visible ? "visible" : "hidden"}`}>
      {isLoading ? (
        <div className="d-flex flex-row justify-content-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <SearchBar
            handleInput={handleInput}
            handleFilter={handleFilter}
            filterBy={filterBy}
          />
          <div className={`${styles.grid} container`}>
            {produits
              .filter((item) => {
                if (
                  filterBy.byName === true &&
                  filterBy.byDescription === false
                )
                  return item.name.trim().toLowerCase().includes(filterInput);
                if (
                  filterBy.byName === false &&
                  filterBy.byDescription === true
                )
                  return item.description
                    .trim()
                    .toLowerCase()
                    .includes(filterInput);
                return (
                  item.description.trim().toLowerCase().includes(filterInput) ||
                  item.name.trim().toLowerCase().includes(filterInput)
                );
              })
              .map((item) => (
                <Fragment key={item._id}>
                  <Produit
                    data={item}
                    saved={getItemSavedState(item)}
                    supprimerUnProduit={supprimerUnProduit}
                  />
                </Fragment>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Produits;
