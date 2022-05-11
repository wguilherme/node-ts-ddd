import {
  IsInt, IsNotEmpty, IsPositive, IsString, Length
} from 'class-validator';

export class Carro {

  @IsInt()
  @IsPositive()
  id: number;

  @IsNotEmpty()
  @Length(3, 50)
  marca: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  modelo: string;

  @IsNotEmpty()
  cor: string;

  constructor(id: number, marca: string, modelo: string, cor: string){
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
  }

}