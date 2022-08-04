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
      detalle: `Fernet Stock es un licor o aguardiente aromatizado, color caramelo y gusto amargo  elaborado en Italia, Argentina
      y República Checa, con un contenido en alcohol de 40 a 41 %, elaborado a partir de una mezcla de 14 hierbas diferentes originarias de los Alpes
       y del entorno mediterráneo. Una variante menos amarga y alcoholizada es comercializada desde 1997 con el nombre Fernet Stock Citrus.
     El Stock fue inventado por la empresa Camis & Stock Company, fundada en 1884 por Lionello Stock en la ciudad italiana de Trieste, 
     entonces parte del Imperio austrohúngaro y fabricado en la factoría de esta ciudad para su comercialización, a partir de 1927. La empresa fue 
     objeto de varios procesos de nacionalización y durante la Segunda Guerra Mundial, requisada por las autoridades en aplicación de las leyes 
     antisemitas del régimen nacionalsocialista. La producción también se amplió a la fábrica de Plzeň-Božkov, en la República Checa donde alcanzó 
     gran difusión popularidad tras la Revolución de Terciopelo.`
    },
    {
      id: 2,
      nombre: `Cerveza Diosa Tropical`,
      img:`./assets/img/cerveza-diosa.jpg`,
      precio: 250,
      descripcion: `¡Cumbia nena!`,
      detalle: `La Diosa Tropical fue una marca de cerveza elaborada por Isenbeck destinado para el consumo del público aficionado a la bailanta y la cumbia.
      Fue lanzada a fines del año 1999 En el programa bailantero Siempre Sábado (Que luego pasa a llamarse Pasión de Sábado) Donde era fuertemente publicitada.
      Las imágenes de la marca fueron Marixa Balli y Mónica Ayos, después de una campaña de incógnito que duró más de tres meses.
      Destinada a un público de nivel económico bajo, salió a la venta con un coste de 75 centavos de peso el litro, uno de los más baratos del mercado 
      de entonces.`
    },
    {
      id: 3,
      nombre: `Hesperidina`,
      img:`./assets/img/hesperidina.jpg`,
      precio: 450,
      descripcion: `El trago de los viejos`,
      detalle: `La Hesperidina es una bebida argentina a base de corteza de naranjas amargas o agrias y dulces de frutos inmaduros los cuales tienen gran
       contenido de flavonoides (hesperidina, neohesperidina y narangina).1​ Su creador fue el estadounidense Melville Sewell Bagley, fundador de la empresa
        argentina Bagley, en 1864. Hoy se sigue produciendo y consumiendo en Argentina. Su sabor es suave, dulce, y se suele mezclar con agua tónica, 
        agua gaseosa, gaseosa de lima y limón, o como mezcla en diferentes tragos o cócteles. Se le reconocen efectos antioxidantes y otros propios de los 
        flavonoides que contiene.`
    },
    {
      id: 4,
      nombre: `Ron Havanna`,
      img:`./assets/img/ron.webp`,
      precio: 450,
      descripcion: `Oye chico`,
      detalle: `Havana Club es una marca de ron que es fabricado en Santa Cruz del Norte, Cuba. La marca fue establecida en 1934 por José Arechabala S.A. 
      y fue nacionalizada en 1960 después de la Revolución cubana. Desde 1993 es producido por el consorcio Havana Club Internacional, el cual es un 
      empresa conjunta entre Pernod Ricard y el gobierno cubano.
      `
    },
    {
      id: 5,
      nombre: `Amargo Obrero`,
      img:`./assets/img/amargo-obrero.webp`,
      precio: 450,
      descripcion: `El trago del proletariado`,
      detalle: `El Amargo Obrero es una bebida inventada en la ciudad de Rosario, Santa Fe, en el año 1888, como una mezcla de hierbas aromáticas serranas. 
      Lo que lo postula como una “bebida del pueblo” es su finalidad original: erigirse en reacción amarga ante las bebidas dulces que tomaban las clases 
      burguesas. Dicen que sus creadores eran adeptos al, por entonces muy presente, anarcosindicalismo y que era tomado por el peronismo porque, 
      desde su etiqueta, alude a las raíces del movimiento obrero.`
    },
    {
      id: 6,
      nombre: `Campari`,
      img:`./assets/img/campari.jpg`,
      precio: 450,
      descripcion: `Con naranja`,
      detalle: `Campari es una bebida alcohólica de grado medio, tonificante y refrescante, calificable como aperitivo, de característico color rojo 
      y sabor amargo. La marca es propiedad del Grupo Campari. `
    },
    {
      id: 7,
      nombre: `Vinysoda`,
      img:`./assets/img/vinysoda.jpg`,
      precio: 450,
      descripcion: `Con un susto de soda`,
      detalle: `Elaborado con uvas bonarda producidas en la provincia vitivinícola de Mendoza y fusionado con agua gasificada, 
      Vinysoda es presentado en packaging lata de 473 cc. Únicos en el mercado pero no en tus origenes, en aquellos recuerdos de tu infancia,
       así es como nace Vinysoda, una marca joven y canchera 100% esencia argentina.`
    }
  
  ];
  