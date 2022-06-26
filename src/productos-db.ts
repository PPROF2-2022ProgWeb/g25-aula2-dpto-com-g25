export interface Productos {
  id: number;
  nombre: string;
  img: string;
  precio: number;
  descripcion: string;
}

export const productos: Productos[] = [
  {
    id: 1,
    nombre: 'Fernet Stock',
    img:'./assets/img/fernet-stock.jpg',
    precio: 799,
    descripcion: 'Un fernet horrible, destapa caños'
  },
  {
    id: 2,
    nombre: 'Cerveza Diosa Tropical',
    img:'./assets/img/cerveza-diosa.jpg',
    precio: 250,
    descripcion: 'La birra de los cumbieros'
  },
  {
    id: 3,
    nombre: 'Hesperidina',
    img:'./assets/img/hesperidina.jpg',
    precio: 450,
    descripcion: 'El trago de los viejos'
  },
  {
    id: 4,
    nombre: 'Ron Havanna',
    img:'./assets/img/ron.webp',
    precio: 450,
    descripcion: 'Oye chico'
  },
  {
    id: 5,
    nombre: 'Amargo Obrero',
    img:'./assets/img/amargo-obrero.webp',
    precio: 450,
    descripcion: 'El trago del proletariado'
  },
  {
    id: 6,
    nombre: 'Campari',
    img:'./assets/img/campari.jpg',
    precio: 450,
    descripcion: 'Con pomeloooo'
  }

];
