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
      descripcion: `Un fernet horrible, destapa caños`,
      detalle: `Fernet Stock es un licor o aguardiente aromatizado, color caramelo y gusto amargo elaborado en Italia, Argentina y República Checa, 
      con un contenido en alcohol de 40 a 41 %, elaborado a partir de una mezcla de 14 hierbas diferentes originarias de los Alpes y 
      del entorno mediterráneo.`
    },
    {
      id: 2,
      nombre: `Cerveza Diosa Tropical`,
      img:`./assets/img/cerveza-diosa.jpg`,
      precio: 250,
      descripcion: `¡Cumbia nena!`,
      detalle: `La Diosa Tropical fue una marca de cerveza elaborada por Isenbeck destinado para el consumo del público aficionado
      a la bailanta y la cumbia. `
    },
    {
      id: 3,
      nombre: `Hesperidina`,
      img:`./assets/img/hesperidina.jpg`,
      precio: 450,
      descripcion: `El trago de los viejos`,
      detalle: `La Hesperidina es una bebida argentina a base de corteza de naranjas amargas o agrias y dulces de frutos inmaduros los cuales tienen
       gran contenido de flavonoides (hesperidina, neohesperidina y narangina). Su sabor es suave, dulce, y se suele mezclar con agua tónica,
        agua gaseosa, gaseosa de lima y limón, o como mezcla en diferentes tragos o cócteles.`
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
      detalle: `El Amargo Obrero es una bebida inventada en la ciudad de Rosario, Santa Fe, en el año 1888, como una mezcla de hierbas aromáticas 
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
  