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
      descripcion: `El trago del proletariado`,
      detalle: `Amargo Obrero es una bebida inventada en la ciudad de Rosario, Santa Fe, en el año 1888, como una mezcla de hierbas aromáticas 
      serranas. Lo que lo postula como una “bebida del pueblo” es su finalidad original: erigirse en reacción amarga ante las bebidas dulces que 
      tomaban las clases burguesas. `
    },
    {
      id: 6,
      nombre: `Campari`,
      img:`./assets/img/campari.jpg`,
      precio: 450,
      descripcion: `Con naranja`,
      detalle: `Campari es una bebida alcohólica de grado medio, tonificante y refrescante, calificable como aperitivo, de característico color rojo 
      y sabor amargo.`
    }
  
  ];
  