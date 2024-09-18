import React, { Fragment } from "react";
import parse from "html-react-parser";
import { accueil } from "../../../../data/data";
import styles from "./Accueil.module.scss";

const Accueil = ({ handleDecouvrir }) => {
  const { image, description } = accueil;
  return (
    <div className={styles.root}>
      {" "}
      
      <ImageAccueil image={image} />
      <DescriptionAccueil
        description={description}
        handleDecouvrir={handleDecouvrir}
      />
    </div>
  );
};

export const ImageAccueil = ({ image }) => {
  const { url, alt } = image;
  return (
    <div className={styles.image_accueil}>
      <img src={url} alt={alt} className={styles.image} />
    </div>
  );
};

export const DescriptionAccueil = ({ description, handleDecouvrir }) => {
  const { titre, texte, bouton } = description;
  return (
    <div className={`${styles.text_accueil} ${styles.m20} ${styles.p20}`}>
      <div>
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>{titre}</h1>
        {parse(texte)}
        <a
          onClick={handleDecouvrir}
          className={`hover_opacity ${styles.decouvrir}`}
          href={bouton.url}
          style={{ marginTop: "15px" }}
        >
          {bouton.texte}
        </a>
      </div>
    </div>
  );
};

export default Accueil;
