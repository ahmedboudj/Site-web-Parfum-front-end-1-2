import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ handleInput, handleFilter, filterBy }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className={styles.searchContainer}>
      <div className={`container ${styles.searchBarContainer}`}>
        <div
          className={`d-flex justify-content-center align-items-center ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass fa-xl mr-15"></i>
          <input
            onChange={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Rechercher"
          />
          <i
            onClick={() => setShowFilter(!showFilter)}
            className={`fa-solid fa-xl fa-filter ${styles.filterIcon}`}
          ></i>
        </div>
        <div
          className={`${styles.filterContainer} ${
            showFilter ? styles.visible : styles.hidden
          }`}
        >
          <div
            className={`filter d-flex justify-content-center ${styles.filter}`}
          >
            <div className="mx-10">
              <input
                type="checkbox"
                id="byName"
                name="byName"
                value="byName"
                defaultChecked={filterBy.byName}
                onChange={handleFilter}
              />
              <label htmlFor="byName">Par nom</label>
            </div>
            <div className="mx-10">
              <input
                type="checkbox"
                id="byNote"
                name="byNote"
                value="byNote"
                defaultChecked={filterBy.byNote}
                onChange={handleFilter}
              />
              <label htmlFor="byNote">Par note</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
