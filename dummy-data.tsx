// Dummy Datas

import { icons, images } from "./constants";
import { CategoryData, CurrentLocation, Restaurant, Menu } from "./types";

export const initialCurrentLocation: CurrentLocation = {
  streetName: 'Kuching',
  gps: {
    latitude: 1.5496614931250685,
    longitude: 110.36381866919922,
  },
};

export const categoryData: CategoryData[] = [
  {
    id: 1,
    name: "Chorizos",
    icon: icons.chorizo,
  },
  {
    id: 2,
    name: "Cortes De Carne",
    icon: icons.carne,
  },
  {
    id: 3,
    name: "Cortes de Pescado",
    icon: icons.pescado,
  },
  {
    id: 4,
    name: "Ensaladas",
    icon: icons.salad,
  },
  {
    id: 5,
    name: "Entradas",
    icon: icons.entrada,
  },
  {
    id: 6,
    name: "Hamburguesas",
    icon: icons.hamburger,
  },
  {
    id: 7,
    name: "Parrillas",
    icon: icons.parrilla,
  },
  {
    id: 8,
    name: "Piqueos",
    icon: icons.piqueos,
  },
  {
    id: 9,
    name: "Postres",
    icon: icons.postre,
  },
  {
    id: 10,
    name: "Sopas",
    icon: icons.sopa,
  },
];

// price rating
export const affordable = 1;
export const fairPrice = 2;
export const expensive = 3;

export const restaurantData: Restaurant[] = [
  {
    id: 1,
    name: 'Chorizos',
    rating: 4.8,
    categories: [1],
    priceRating: affordable,
    photo: images.ChorizoArgentino, //Cambiar img
    duration: '30 - 45 min',
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
    courier: {
      avatar: images.avatar_1,
      name: 'Amy',
    },
    menu: [
      {
        menuId: 1,
        name: 'Chorizo de Casa',
        photo: images.ChorizoArgentino,
        description: 'Dos chorizos artesanales tradicional tipo argentino',
        calories: 200,
        price: 15.99,
      },
      {
        menuId: 2,
        name: 'Chorizo de Mermelada de Ají Limo ',
        photo: images.ChorizoMermeladaAji,
        description: 'Dos chorizos artesanales de la Raza Duroc',
        calories: 250,
        price: 24.99,
      },
      {
        menuId: 3,
        name: 'Chorizo Parrillero',
        photo: images.ChorizoParrillero,
        description: 'Dos chorizos artesanales de la Raza Duroc',
        calories: 194,
        price: 24.99,
      },
      
    ],
  },
  {
    id: 2,
    name: 'Cortes de Carne',
    rating: 4.8,
    categories: [2],
    priceRating: expensive,
    photo: images.BifeAncho,
    duration: '15 - 20 min',
    location: {
      latitude: 1.556306570595712,
      longitude: 110.35504616746915,
    },
    courier: {
      avatar: images.avatar_2,
      name: 'Jackson',
    },
    menu: [
      {
        menuId: 4,
        name: 'Bife Ancho',
        photo: images.BifeAncho,
        description: 'Acompáñalo con papas fritas o una pasta al escoger',
        calories: 48.99,
        price: 48.99,
      },
      {
        menuId: 5,
        name: 'Bife Angosto',
        photo: images.BifeAngosto,
        description:
          'Acompáñalo con papas fritas o una pasta al escoger',
        calories: 250,
        price: 48.99,
      },
      {
        menuId: 6,
        name: 'Cowboy Steak',
        photo: images.ComboySteak,
        description: 'Acompáñalo con papas fritas o una pasta al escoger',
        calories: 100,
        price: 48.99,
      },
      {
        menuId: 7,
        name: 'Lomo Fino ',
        photo: images.LomoFino,
        description: 'Acompáñalo con papas fritas o una pasta al escoger',
        calories: 100,
        price: 48.99,
      },
      {
        menuId: 8,
        name: 'Picaña ',
        photo: images.Picaña,
        description: 'Acompáñalo con papas fritas o una pasta al escoger',
        calories: 100,
        price: 48.99,
      },
      {
        menuId: 9,
        name: 'Toma hawk ',
        photo: images.LomoFino,
        description: 'corte que demora 30 minutos, término medio y para dos personas a más, el corte proviene del Ribeye con hueso muy recomendado',
        calories: 100,
        price: 111.99,
      },
    ],
  },
  {
    id: 3,
    name: 'Cortes de Pescado',
    rating: 4.8,
    categories: [3],
    priceRating: expensive,
    photo: images.FileteDeTrucha,
    duration: '20 - 25 min',
    location: {
      latitude: 1.5238753474714375,
      longitude: 110.34261833833622,
    },
    courier: {
      avatar: images.avatar_3,
      name: 'James',
    },
    menu: [
      {
        menuId: 10,
        name: 'Filete de Pez Espada',
        photo: images.FileteDePezEspada,
        description: '200 gr de filete a la parrilla, Mix de lechugas o papas fritas',
        calories: 100,
        price: 34.99,
      },
      {
        menuId: 11,
        name: 'Filete de Salmon Grillado',
        photo: images.FileteDeSalmon,
        description: 'Salmón grillado (250 gr), mix de lechugas o papas fritas',
        calories: 100,
        price: 41.99,
      },
      {
        menuId: 12,
        name: 'Filete de Trucha',
        photo: images.FileteDeTrucha,
        description: 'Trucha grillado (250 gr), mix de lechugas o papas fritas',
        calories: 100,
        price: 39.99,
      },
      {
        menuId: 13,
        name: 'Pulpo a la Parrilla',
        photo: images.PulpoALaParrilla,
        description: 'Nuestro pulpo 400 gr, lo bañamos con una salsa Anticuchera y a la parrilla',
        calories: 100,
        price: 54.99,
      },
    ],
  },
  {
    id: 4,
    name: 'Ensaladas',
    rating: 4.8,
    categories: [4],
    priceRating: expensive,
    photo: images.CesarDePollo,
    duration: '10 - 15 min',
    location: {
      latitude: 1.5578068150528928,
      longitude: 110.35482523764315,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'Ahmad',
    },
    menu: [
      {
        menuId: 14,
        name: 'Cesars con Pollo',
        photo: images.CesarDePollo,
        description: 'Mix de lechugas, pollo grillado, croutones, queso parmesano, vinagreta Cesar.',
        calories: 100,
        price:24.99,
      },
    ],
  },
  {
    id: 5,
    name: 'Entradas',
    rating: 4.8,
    categories: [5],
    priceRating: affordable,
    photo: images.MollejasALaParrilla,
    duration: '15 - 20 min',
    location: {
      latitude: 1.558050496260768,
      longitude: 110.34743759630511,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'Muthu',
    },
    menu: [
      {
        menuId: 15,
        name: 'Anticuchos de Corazón',
        photo: images.AnticuchosDeCorazon,
        description: 'De corazón, ahumado y grillados, papas doradas, choclo',
        calories: 200,
        price: 21.99,
      },
      {
        menuId: 16,
        name: 'Champiñones Salteados',
        photo: images.ChampiñonesSalteados,
        description: 'En un sartén directo a la brasa del carbón con mantequilla y sal de maras',
        calories: 300,
        price: 21.99,
      },
      {
        menuId: 17,
        name: 'Mollejas a la Parrilla',
        photo: images.MollejasALaParrilla,
        description: 'Con toque de limón.',
        calories: 300,
        price: 21.99,
      },
      
    ],
  },
  {
    id: 6,
    name: 'Hamburguesas',
    rating: 4.9,
    categories: [6],
    priceRating: affordable,
    photo: images.HamburguesaClasica,
    duration: '35 - 40 min',
    location: {
      latitude: 1.5573478487252896,
      longitude: 110.35568783282145,
    },
    courier: {
      avatar: images.avatar_1,
      name: 'Jessie',
    },
    menu: [
      {
        menuId: 18,
        name: 'Hamburguesa Clasica',
        photo: images.HamburguesaClasica,
        description: 'Un Blend de Bife ancho, Pecho de res, Asado de tira Nacional, en pan papa Amarilla, lechuga, tomate y salsa especial.',
        calories: 100,
        price: 20.99,
      },
      {
        menuId: 19,
        name: 'Hamburguesa Parrillera',
        photo: images.HamburguesaParrillera,
        description: 'Un blend de bife ancho, pecho de res, asado de tira nacional, en pan papa amarilla, chorizo, tomate, chimichurri de perejil y salsa especial',
        calories: 100,
        price: 25.99,
      },
      {
        menuId: 20,
        name: 'Hamburguesa de Pollo Crispy',
        photo: images.HamburguesaPolloCrispy,
        description: 'Pierna de pollo sazonado con especies orientales frito en alta temperatura acompañado de pan de brioche',
        calories: 300,
        price: 17.99,
      },
      {
        menuId: 21,
        name: 'Hamburguesa Queso y Tocino',
        photo: images.HamburguesaQuesoYTocino,
        description: 'Un Blend de Bife ancho, Pecho de res, Asado de tira Nacional, en pan papa Amarilla, tocino Crocante, bañada con salsa de Queso Cheddar, lechuga, tomate y salsa especial',
        calories: 300,
        price: 22.99,
      },
      {
        menuId: 22,
        name: 'Hamburguesa TaytaFe',
        photo: images.HamburguesaTaytafe,
        description: 'Un Blend de bife ancho, Pecho de res, asado de tira nacional, en pan papa amarilla, tocino, bañada en salsa de queso cheddar, Lechuga, tomate y salsa especial.',
        calories: 300,
        price: 31.99,
      },
      {
        menuId: 23,
        name: 'Hamburguesa de Asado de Tira Americana (200 gr)',
        photo: images.HamburguesaTiraAmericana,
        description: 'En nuestro pan de casa Brioch con chia, tocino artesanal, nuestra Salsa especial y bañada con su salsa de queso cheddar.',
        calories: 300,
        price: 34.99,
      },
    ],
  },

  {
    id: 7,
    name: 'Parrillas',
    rating: 4.8,
    categories: [7],
    priceRating: expensive,
    photo: images.ParrillaTaytaFe,
    duration: '10 - 15 min',
    location: {
      latitude: 1.5578068150528928,
      longitude: 110.35482523764315,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'Ahmad',
    },
    menu: [
      {
        menuId: 24,
        name: 'Parrilla Nacional',
        photo: images.ParrillaNacional,
        description: 'Lomo fino de res (200 gr), Bife angosto (200 gr), Picaña (200 gr), Bife ancho (200 gr), ensalada y papas fritas.',
        calories: 100,
        price:111.99,
      },
      {
        menuId: 25,
        name: 'Parrilla Personal',
        photo: images.ParrillaPersonal,
        description: 'Lomo fino de res o bife (250 gr), Chuleta de cerdo, Chorizo de casa, ensalada y papas fritas.',
        calories: 100,
        price:56.99,
      },
      {
        menuId: 26,
        name: 'Parrilla TaytaFe',
        photo: images.ParrillaTaytaFe,
        description: 'Lomo fino de res o Bife (250 gr), chuleta de cerdo (2), pechuga de pollo (2), anticuchos (2), chorizo de casa (2), ensaladas y papas fritas.',
        calories: 100,
        price:101.99,
      },
      {
        menuId: 27,
        name: 'Pechuga de Pollo a la Parrilla',
        photo: images.PechudaDePolloALaParrilla,
        description: 'Filete de pollo a la parrilla acompañados con papas fritas',
        calories: 100,
        price:31.99,
      },
      {
        menuId: 28,
        name: 'Pechuga de pollo a la parrilla bañado en salsa de Champiñones',
        photo: images.PechudaDePolloALaParrillaConSalsaDeChampiñones,
        description: 'Acompañados con papas frita.',
        calories: 100,
        price:35.99,
      },
    ],
  },
  {
    id: 8,
    name: 'Piqueos',
    rating: 4.8,
    categories: [8],
    priceRating: expensive,
    photo: images.AlitasALaBBQ,
    duration: '10 - 15 min',
    location: {
      latitude: 1.5578068150528928,
      longitude: 110.35482523764315,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'Ahmad',
    },
    menu: [
      {
        menuId: 29,
        name: 'Alitas a la Barbecue',
        photo: images.AlitasALaBBQ,
        description: 'Alitas crocantes bañadas con salsa BBQ de casa y Acompañada con papas   fritas',
        calories: 100,
        price:15.99,
      },
      {
        menuId: 30,
        name: 'Alitas Bufalo',
        photo: images.AlitasBufalo,
        description: 'Alitas crocantes bañadas con salsa Bufalo de casa y Acompañada con papas fritas',
        calories: 100,
        price:16.99,
      },
      {
        menuId: 31,
        name: 'Alitas de Sauco',
        photo: images.AlitasDeSauco,
        description: 'Alitas crocantes bañadas con salsa de sauco con toque picante   y Acompañada con papas fritas',
        calories: 100,
        price:16.99,
      },
      {
        menuId: 32,
        name: 'Chanchito a la Barbecue',
        photo: images.ChanchitoALaBBQ,
        description: 'Panceta de cerdo, cocida en su propia grasa por 6 horas y luego llevada a la parrilla, bañada con salsa BBQ de casa y acompañadas con papas fritas',
        calories: 100,
        price:27.99,
      },
    ],
  },
  {
    id: 9,
    name: 'Postres',
    rating: 4.8,
    categories: [9],
    priceRating: expensive,
    photo: images.EsferaDeChocolate,
    duration: '10 - 15 min',
    location: {
      latitude: 1.5578068150528928,
      longitude: 110.35482523764315,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'Ahmad',
    },
    menu: [
      {
        menuId: 33,
        name: 'Esfera de Chocolate',
        photo: images.EsferaDeChocolate,
        description: 'Rellena con fresa, helado de lúcuma (temporada), espuma de quinua, bañado con tofee.',
        calories: 100,
        price:21.99,
      },
      {
        menuId: 34,
        name: 'Tiramisu Clasico',
        photo: images.Tiramisu,
        description: 'Café con cacao y bizcocho',
        calories: 100,
        price:14.99,
      },
    ],
  },
  {
    id: 10,
    name: 'Sopas',
    rating: 4.8,
    categories: [10],
    priceRating: expensive,
    photo: images.DietaDePollo,
    duration: '10 - 15 min',
    location: {
      latitude: 1.5578068150528928,
      longitude: 110.35482523764315,
    },
    courier: {
      avatar: images.avatar_4,
      name: 'Ahmad',
    },
    menu: [
      {
        menuId: 35,
        name: 'Caldo de Gallina',
        photo: images.CaldoDeGallina,
        description: 'Gallina del valle, papas, huevos y su menjunje de cebolla china, rocoto, cancha y limón',
        calories: 100,
        price:17.99,
      },
      {
        menuId: 36,
        name: 'Dieta de Pollo',
        photo: images.DietaDePollo,
        description: 'Pollo en dados, fondo de pollo y fideo de ángel.',
        calories: 100,
        price:17.99,
      },
      {
        menuId: 37,
        name: 'Sopa Wantan',
        photo: images.SopaWantan,
        description: 'Con pollo, cerdo, huevo de codorniz, verduras chinas y wantanes',
        calories: 100,
        price:17.99,
      },
    ],
  },
];

export const categoriesMap: {[key: number]: string} = categoryData.reduce(
  (categoryMap, category: CategoryData) =>
    (categoryMap = {
      ...categoryMap,
      [category.id]: category.name,
    }),
  {},
);

export const restaurantsWithCategories: Restaurant[] = restaurantData.map((restaurant) => ({
  ...restaurant,
  categoryNames: restaurant.categories.map(
    (category: number) => categoriesMap[category],
  ),
}));

const getAllMenu = () => {
  const rrr: Menu[] = [];
  restaurantData.map((res: Restaurant) => res.menu.map((m: Menu) => rrr.push(m)));
  return rrr;
};

export const allMenu = {
  id: 1,
  name: "All",
  rating: 4.8,
  categories: [5],
  priceRating: affordable,
  photo: images.burger_restaurant_1,
  duration: "30 - 45 min",
  location: {
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  },
  courier: {
    avatar: images.avatar_1,
    name: "Amy",
  },
  menu: getAllMenu(),
};
