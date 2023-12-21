import Dexie, { Table } from "dexie";
import { Parabola } from "./paraboras.model";

export class AppDB extends Dexie {
  parabola!: Table<Parabola, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(2).stores({
      parabola: 'id, titulo, descripcion,img'
    });
    this.on('populate', () => this.populate());
  }

  async populate() {

    await db.parabola.bulkAdd([
      {
        id: 1,
        titulo: 'La parábola del sembrador',
        descripcion: 'La parábola del sembrador es una de las parábolas bíblicas más citadas y compartidas. Encontramos el texto de la parábola en Mateo 13:3-23, Marcos 4:1-20, Lucas 8:4-15.  Esta parábola presenta diferentes formas en las que las personas reaccionan frente al mensaje del Evangelio. Nos muestra la importancia de tener un corazón receptivo al escuchar la Palabra de Dios. Cuando alguien recibe el mensaje de Dios con un corazón abierto y preparado, la semilla de la Palabra crece y da frutos',
        img:'01.jpg'
      },
      {
        id: 2,
        titulo: 'La parábola del buen pastor',
        descripcion: 'Podemos leer el texto de la parábola en Juan 10:1-18. En esta parábola vemos a Jesús como el buen pastor que guía y cuida de sus ovejas. Jesús busca siempre el bienestar de ellas. </br> La parábola presenta el contraste entre los asalariados y ladrones y Jesús. Los asalariados y los ladrones solo desean hurtar, matar y destruir. Pero Jesús, es el pastor amoroso que estuvo dispuesto a dar su vida por amor a sus ovejas.',
        img:'02.jpg'
      },
      {
        id: 3,
        titulo: 'La parábola del buen samaritano',
        descripcion: 'El tema central de esta parábola es que el amor de Dios en nuestros corazones vence todo prejuicio y nos mueve a la acción. Encontramos el relato en Lucas 10:25-37.</br>La parábola nos presenta a un hombre herido en medio de un camino y la reacción de los que pasaban cerca de él. La persona menos esperada fue la que tuvo compasión del herido. Jesús nos llama a vivir vidas llenas de amor y compasión frente a las necesidades de los que nos rodean.',
        img:'03.jpg'
      },
      {
        id: 4,
        titulo: 'La parábola del trigo y la cizaña',
        descripcion: 'Esta parábola, la cual encontramos en Mateo 13:24-30, nos habla sobre la realidad que vivimos. En este mundo conviven los hijos del reino y los hijos del maligno. Sin embargo, en el final de los tiempos, los grupos serán separados y cada uno irá a su destino eterno.',
        img:'04.jpg'
      },
    ]);
  }
}

export const db = new AppDB();

/*

La parábola del hijo pródigo
Esta parábola habla sobre el inmenso amor de Dios por cada uno de los seres humanos. Encontramos el texto en Lucas 15:11-32. Con este relato aprendemos que no importa cuán lejos nos hayamos apartado de nuestro Padre celestial, él está con sus brazos abiertos, dispuesto a recibirnos. Él perdona siempre al que se le acerca con corazón arrepentido.

Lee la explicación de esta parábola y lo que podemos aprender con ella: La parábola del hijo pródigo.
*/