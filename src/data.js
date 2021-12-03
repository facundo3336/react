export function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          title: "Mario Party Superstars",
          price: "U$S59.99",
          pictureUrl:
            "https://m.media-amazon.com/images/I/81N4N3CyByL._SY445_.jpg",
          description:
            "La serie de Mario Party™ está de regreso con cinco tableros clásicos de los juegos para la consola Nintendo 64.",
        },
        {
          id: 2,
          title: "Mario Odyssey",
          price: "U$S49.99",
          pictureUrl:
            "https://s3.gaming-cdn.com/images/products/2618/orig/juego-nintendo-super-mario-odyssey-switch-cover.jpg",
          description:
            "es un videojuego de plataformas de mundo abierto para Nintendo Switch que se lanzó en Japón y los EEUU",
        },
        {
          id: 3,
          title: "Pokemon Escudo",
          price: "U$S57.99",
          pictureUrl:
            "https://swordshield.pokemon.com/assets/img/common/packshot/es-es/ex_packshot_shield.png",
          description:
            "Pokémon Espada y Escudo son videojuegos de rol con elementos de aventura con perspectiva aérea.",
        },
      ];
      resolve(data);
    }, 2000);
  });
}
