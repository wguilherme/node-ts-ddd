export class Carro{

  id: number;
  marca: string;
  modelo: string;
  cor: string;

  constructor(id: number, marca: string, modelo: string, cor: string){
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
  }
}
