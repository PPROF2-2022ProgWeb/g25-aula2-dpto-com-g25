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
  