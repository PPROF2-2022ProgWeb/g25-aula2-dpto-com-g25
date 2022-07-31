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
      descripcion: `El trago de los viejos`,
      detalle: `La Hesperidina es una bebida argentina a base de corteza de naranjas amargas o agrias y dulces de frutos inmaduros. Su sabor es suave,
       dulce, y se suele mezclar con agua tónica, agua gaseosa, gaseosa de lima y limón, o como mezcla en diferentes tragos o cócteles.`
    },
    {
      id: 4,
      nombre: `Ron Havanna`,
      img:`./assets/img/ron.webp`,
      precio: 450,
      descripcion: `Oye chico`,
      detalle: `Havana Club es una marca de ron que es fabricado en Santa Cruz del Norte, Cuba. La marca fue establecida en 1934 por 
      José Arechabala S.A. y fue nacionalizada en 1960 después de la Revolución cubana.`
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
  