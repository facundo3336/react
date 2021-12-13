const data = [
  {
    id: "1",
    category: "1",
    title: "Mario Party Superstars",
    price: "U$S59.99",
    pictureUrl: "https://m.media-amazon.com/images/I/81N4N3CyByL._SY445_.jpg",
    description:
      "La serie de Mario Party™ está de regreso con cinco tableros clásicos de los juegos para la consola Nintendo 64.",
  },
  {
    id: "2",
    category: "1",
    title: "Mario Odyssey",
    price: "U$S49.99",
    pictureUrl:
      "https://s3.gaming-cdn.com/images/products/2618/orig/juego-nintendo-super-mario-odyssey-switch-cover.jpg",
    description:
      "Es un videojuego de plataformas de mundo abierto para Nintendo Switch que se lanzó en Japón y los EEUU",
  },
  {
    id: "3",
    category: "1",
    title: "Pokemon Escudo",
    price: "U$S57.99",
    pictureUrl:
      "https://swordshield.pokemon.com/assets/img/common/packshot/es-es/ex_packshot_shield.png",
    description:
      "Pokémon Espada y Escudo son videojuegos de rol con elementos de aventura con perspectiva aérea.",
  },
  {
    id: "4",
    category: "2",
    title: "GFORCE G210",
    price: "U$S126",
    pictureUrl:
      "https://www.macrotech.com.uy/imgs/productos/productos34_6838.jpg",
    description: `- NVIDIA GeForce 210 GPU
      - High speed 1024MB DDR3
      - Low profile with VGA/DVI/HDMI edition
      - PCI Express 2.0 x16 bus interface
      
      `,
  },
  {
    id: "5",
    category: "3",
    title: "Amazing Spider Man",
    price: "U$S28.99",
    pictureUrl:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2015/03/458992-10-portadas-mas-polemicas-comic.jpg?itok=5vkZiL09",
    description: `"Un día más" o "El Mefistazo", como popularmente se conoce,fue una de las historias más criticables y controvertidas de Spider-man. `,
  },
  {
    id: "6",
    category: "3",
    title: "Alf",
    price: "U$S38.99",
    pictureUrl:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2015/03/458984-10-portadas-mas-polemicas-comic.jpg?itok=zirvD7NO",
    description: `En número 48 de los cómics de Alf se las trae. Los autores querían haber hecho un chiste gráfico con el juego de palabras.`,
  },
  {
    id: "7",
    category: "4",
    title: "Ps5",
    price: "U$S900",
    pictureUrl:
      "https://static.turbosquid.com/Preview/2020/06/24__13_54_48/hero.0001.jpg17DB3807-6507-47AA-A635-AF6AD66EBF49Large.jpg",
    description: `El auténtico corazón de esta consola, el circuito integrado que aglutina tanto la CPU como la GPU, ha salido de los laboratorios de una AMD que parece estar en mejor forma que nunca.`,
  },
  {
    id: "8",
    category: "4",
    title: "Xbox Series X",
    price: "U$S900",
    pictureUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_679037-MLA45731824836_042021-V.webp",
    description: `La Xbox Series X es la consola inicial de la octava generación de consolas de videojuegos, la cual fue lanzada a finales de Noviembre de 2020 y trae consigo un espectacular hardware`,
  },
];

export function getItems(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId === undefined) {
        resolve(data);
      }
      const categoryItems = data.filter((product) => {
        if (product.category !== categoryId) {
          return false;
        }
        return true;
      });
      resolve(categoryItems);
    }, 2000);
  });
}

export function getItem(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        data.find((product) => {
          if (product.id === id) {
            return true;
          }
        })
      );
    }, 2000);
  });
}
