export interface Productos {
    id: number;
    nombre: string;
    img: string;
    precio: number;
    descripcion: string;
    detalle: string;
  }
  
  export const productos: Productos[] = [
    {
      id: 1,
      nombre: `Fernet Stock`,
      img:`./assets/img/fernet-stock.jpg`,
      precio: 799,
      descripcion: `Bad but cheap Fernet`,
      detalle: `Fernet Stock is a flavored liquor, caramel-colored and bitter taste made in Italy, Argentina and Czech Republic, 
      with an alcohol content of 40% to 41%, made from a blend of 14 different herbs from the Alps and the Mediterranean Sea area.`
    },
    {
      id: 2,
      nombre: `Diosa Tropical Beer`,
      img:`./assets/img/cerveza-diosa.jpg`,
      precio: 250,
      descripcion: `Cumbia babe!`,
      detalle: `Diosa Tropical was a brand of beer brewed by Isenbeck for the consumption of the public fond of tropical dancing and cumbia. `
    },
    {
      id: 3,
      nombre: `Hesperidina`,
      img:`./assets/img/hesperidina.jpg`,
      precio: 450,
      descripcion: `The drink of the elderly`,
      detalle: `Hesperidin is an Argentine drink based on the rind of bitter or sour oranges and sweets of immature fruits. Its flavor is mild, sweet, and is usually mixed with tonic water, carbonated water, lime and lemon soda, or as a mixture in different drinks or cocktails.`
    },
    {
      id: 4,
      nombre: `Ron Havanna`,
      img:`./assets/img/ron.webp`,
      precio: 450,
      descripcion: `Havana Club`,
      detalle: `Havana Club is a brand of rum that is manufactured in Santa Cruz del Norte, Cuba. The brand was established in 1934 by 
      José Arechabala S.A. and was nationalized in 1960 after the Cuban Revolution.`
    },
    {
      id: 5,
      nombre: `Amargo Obrero`,
      img:`./assets/img/amargo-obrero.webp`,
      precio: 450,
      descripcion: `The drink of the proletariat`,
      detalle: `Amargo Obrero It is a drink invented in the city of Rosario, Santa Fe, in 1888, as a mixture of aromatic herbs
      serranas. What postulates it as a "drink of the people" is its original purpose: to set itself up as a bitter reaction to the sweet drinks that
      took the bourgeois classes. `
    },
    {
      id: 6,
      nombre: `Campari`,
      img:`./assets/img/campari.jpg`,
      precio: 450,
      descripcion: `With orange`,
      detalle: `Campari is a medium-grade alcoholic beverage, invigorating and refreshing, classifiable as an aperitif, with a characteristic red color
      and bitter taste.`
    }
  
  ];
  