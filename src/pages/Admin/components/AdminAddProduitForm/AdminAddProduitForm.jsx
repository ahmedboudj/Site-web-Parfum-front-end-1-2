import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../../Admin.module.scss";
import { postProduit } from "../../../../apis/produits";

const AdminAddProduitForm = () => {
  const [success, setSuccess] = useState(false);

  const defaultValues = {
    name: "",
    description: "",
    image: "",
    price: "",
  };

  const schema = yup.object({
    name: yup
      .string()
      .required("Le nom du produit est requis !")
      .min(1, "Nom trop court."),
    description: yup
      .string()
      .required("La description du produit est requise !")
      .min(5, "Description trop courte."),
    image: yup
      .string()
      .required("L'URL de l'image du produit est requise !")
      .min(5, "URL de l'image invalide."),
    price: yup
      .number()
      .required("Le prix du produit est requis !")
      .positive("Le prix doit être un nombre positif.")
      .min(0.01, "Le prix doit être au moins de 0,01."),
  });

  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues, resolver: yupResolver(schema) });

  const submit = async (values) => {
    try {
      const response = await postProduit(values);
      if (response) {
        setSuccess(true);
        reset(defaultValues);
      }
    } catch (error) {
      setError("submit", { type: "generic", message: error.message });
    }
  };

  return (
    <div className={styles.add_product_form}>
      <h2>Ajouter un Parfum +</h2>
      <form onSubmit={handleSubmit(submit)} action="">
        <div>
          <label htmlFor="name">Le nom du Parfum : </label>
          <input type="text" {...register("name")} />
          {errors?.name && (
            <span style={{ color: "red" }}> {errors.name.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="description">La description du Parfum : </label>
          <input type="text" {...register("description")} />
          {errors?.description && (
            <span style={{ color: "red" }}> {errors.description.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="image">l'image du Parfum : </label>
          <input type="text" {...register("image")} />
          {errors?.image && (
            <span style={{ color: "red" }}> {errors.image.message}</span>
          )}
        </div>
        {/* Ajout du champ d'entrée pour le prix */}
        <div>
          <label htmlFor="price">Le prix du Parfum : </label>
          <input type="number" step="0.01" {...register("price")} />
          {errors?.price && (
            <span style={{ color: "red" }}> {errors.price.message}</span>
          )}
        </div>
        <button disabled={isSubmitting} type="submit" className="decouvrir">
          Sauvegarder
        </button>
        <div>
          {errors?.submit && (
            <span style={{ color: "red" }}> {errors.submit.message}</span>
          )}
          {success && (
            <span style={{ color: "green", fontWeight: "bold" }}>
              Votre Parfum a ete ajouter avec success !
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduitForm;
