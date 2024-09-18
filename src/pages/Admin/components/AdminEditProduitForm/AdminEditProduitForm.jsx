import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../../Admin.module.scss";
import { useLoaderData } from "react-router-dom";
import { updateProduit } from "../../../../apis/produits";

const AdminEditProduitForm = () => {
  const produit = useLoaderData();
  const [success, setSuccess] = useState(false);

  let defaultValues = {
    name: produit ? produit.name : "",
    description: produit ? produit.description : "",
    image: produit ? produit.image : "",
    price: produit ? produit.price : "",
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
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues, resolver: yupResolver(schema) });

  const submit = async (values) => {
    try {
      const response = await updateProduit(values, produit._id);
      if (response) setSuccess(true);
    } catch (error) {
      setError("submit", { type: "generic", message: error.message });
    }
  };

  return (
    <div className={styles.add_product_form}>
      <h2>Modifier un Parfum</h2>
      <form onSubmit={handleSubmit(submit)} action="">
        <div>
          <label htmlFor="name">Le nom du Parfum :</label>
          <input type="text" {...register("name")} />
          {errors?.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="description">La description du Parfum :</label>
          <input type="text" {...register("description")} />
          {errors?.description && (
            <span className="error">{errors.description.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="image">l'image du Parfum :</label>
          <input type="text" {...register("image")} />
          {errors?.image && (
            <span className="error">{errors.image.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="price">Le prix du Parfum :</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { valueAsNumber: true })}
            defaultValue={defaultValues.price}
          />
          {errors?.price && (
            <span className="error">{errors.price.message}</span>
          )}
        </div>

        <button disabled={isSubmitting} type="submit" className="decouvrir">
          SAUVEGARDER
        </button>
        <div>
          {errors?.submit && (
            <span className="error">{errors.submit.message}</span>
          )}
          {success && (
            <span className="success">
              Votre Parfum a été modifier avec succès !
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdminEditProduitForm;
