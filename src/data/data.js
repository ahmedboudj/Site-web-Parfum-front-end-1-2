export const parfums = [
  {
    _id: 1,
    name: "Collection X Masculine ",
    image: "http://localhost:5000/assets/images/parfums/produit1.avif",
    description: " boisé-épicé",
    price: 495,
  },
  {
    _id: 2,
    name: "Collection C Woody Leather",
    image: "http://localhost:5000/assets/images/parfums/produit2.avif",
    description: "chaude et boisée",
    price: 565,
  },
  {
    _id: 3,
    name: "Iconic Masculine 20e anniversaire",
    image: "http://localhost:5000/assets/images/parfums/produit3.avif",
    description: "Boisé, mystérieusement profond",
    price: 620,
  },
  {
    _id: 4,
    name: " Crown Collection Town & Country",
    image: "http://localhost:5000/assets/images/parfums/produit4.avif",
    description: "Boisé, Ambré,  bergamote",
    price: 640,
  },
  {
    _id: 5,
    name: "ambre blonde Noble XXI Art Deco",
    image: "http://localhost:5000/assets/images/parfums/produit5.avif",
    description: "Boisé, Ambré,  florales",
    price: 790,
  },
  {
    _id: 6,
    name: "Collection 1872 Masculine Edition ",
    image: "http://localhost:5000/assets/images/parfums/produit6.avif",
    description: "boisé de cèdre et d'encens",
    price: 495,
  },
  {
    _id: 7,
    name: "Addictive Arts Jump Up And Kiss Me Hedonistic",
    image: "http://localhost:5000/assets/images/parfums/produit7.avif",
    description: "ambré , boisée,  cuir fumé",
    price: 800,
  },
  {
    _id: 8,
    name: "Crown Collection Matsukita",
    image: "http://localhost:5000/assets/images/parfums/produit8.avif",
    description: "Florales, Boisé",
    price: 640,
  },
  {
    _id: 9,
    name: "Original Collection NO1 Masculine Edition",
    image: "http://localhost:5000/assets/images/parfums/produit10.avif",
    description: "Boisé, Ambré",
    price: 1215,
  },
];

export const accueil = {
  image: {
    url: "http://localhost:5000/assets/images/logo1.jpg",
    alt: "Nos parfums",
  },
  description: {
    titre: "L'ART SUBLIME DE LA PARFUMERIE DE LUXE",
    texte: `<p>
    Clive Christian est une maison de parfums britannique de luxe renommée pour ses fragrances opulentes et son artisanat exquis. 
    Fondée par Clive Christian OBE,
    la marque est célèbre pour la création de certains des parfums les plus chers et exclusifs au monde. 
  </p>
  <p>
  Les parfums Clive Christian sont connus pour leur complexité et leur profondeur, 
  offrant souvent des notes florales riches, 
  orientales et boisées. 
  La marque propose plusieurs collections de fragrances, 
  dont la célèbre collection "No.1", 
  souvent considérée comme le parfum le plus cher du monde.
  </p>
  <p>
  En plus des parfums, 
  Clive Christian propose également des fragrances d'intérieur luxueuses, 
  des bougies et des produits de bain, 
  reflétant tous l'engagement de la marque envers la qualité et le luxe. 
  Les parfums Clive Christian sont recherchés par les connaisseurs et les collectionneurs, 
  représentant l'apogée de l'élégance et de la sophistication dans le monde de la parfumerie.
  </p>`,
    bouton: {
      lien: "#",
      texte: "About us",
    },
  },
};

export const users = [
  {
    _id: 1,
    email: "lamimoza01@hotmail.fr",
    password: "123",
    fullName: "Ahmed Boudj",
  },
  {
    _id: 2,
    email: "boudj@hotmail.fr",
    password: "123",
    fullName: "Boudj boudji",
  },
];
// data.js

export const authenticateUser = (email, password) => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};
