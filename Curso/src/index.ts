// Tipos Básicos
const age: number = 5;
const firstName: string = "Rafael";
const isValid: boolean = false;

let idk: any =5; // tipo genérico pode assumir outros tipos
idk = true
idk = "12"

const ids: number[] = [1,2,3,4,5]
const booleans: boolean[] = [true,false]
const names: string[] = ["A","B"]

// Tupla
const person: [number,string] = [1,"A"];
// Lista de tuplas
const people: [number,string][] = [[1,"A"],[2,"B"]];

// Intersections
//  define mais de um tipo para a variavel 
const productId: string|number = 1

// Enum 
enum Direction {
  Up=1,
  Down = 2,
  left = 'Esquerda'
}

const direction = Direction.Up

// Type Assertions
// mudar o tipo da variavel 
const productName: any = 'Boné'

// let itemId = productName as string;
let itemId = <string>productName