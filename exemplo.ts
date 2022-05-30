// tipagem explicita
function users(user: string | null,numero: number)  {
  console.log(`${user ?? "usuario Padrão"} ${numero} \n`)
 }

 users("Rafael", 12)

 //---------------------------------------------------------

 // any quebra a tipagem permitindo que receba qualquer tipo
 let info: any;

 info = [1,2]
 info = "Rafael"
 info = true;
 info = 10.50;

 function sum(a: any, b: any){
   console.log (a + b +'\n');
 }

 sum(1,2)
 sum('1',2)

 //---------------------------------------------------------

 // IMPLÍCITA
 let nome = "Rafael"
 //nome = 10; por inferencia o tipo já foi definido com string

 // EXPLICITA
 let name2: string = "Rafael"

 /* Tipos primitivos
      Boolean
      String
      Number
    
    Arrays
      Os 2 tipos de declaração tem o mesmo efeito 
      let numbers: number[];
      let users: Array<string>;
 */

//---------------------------------------------------------

 // tipagem em funções caso não seja usado ele faz isso por inferecia de acordo como o tipo do return
 function mensagens(mensagem: string): string{
   return mensagem
 }

 console.log(mensagens("ola \n"));

 //---------------------------------------------------------

 // operador de Union ( | ) aceita mais de um tipo 

 function printUserId(id: number | string){
   console.log(`O ID é ${id} \n`)
 }

 printUserId(2);
 printUserId('1')

 //---------------------------------------------------------

 /*GENERICS aceita qualquer tipagem mas a partir do moneto que for definido uma ela não pode mudar
  S => state
  T => type
  K => key
  V => value
  E => element

  no exemplo usamos o <T> do lado do useState logo na criação definimos o tipo useState<string>()

  <T extends number | string > vc pode definir mais opções de tipos mais ainda respeitando que depois de definido o tipo vai ser sempre 1 só

  <T extends number | string = number> caso não seja definido um tipo na criação do objeto vc obriga por padrão ele ser o tipo number com o = number
 */

function useState<T>(){
  //let state: number | string
  let state: T;

  function get(){
    return state
  }

  function set(newState: T){
    state = newState
  }

  return {get , set}
}

let newState = useState<string>();

newState.get()
//newState.set(123)
newState.set("123")

//---------------------------------------------------------

// Usando TYPE pra criar um tipo novo para reaproveitar

type IdType = string | number | undefined;

let UserId: IdType;
let adminId: IdType;

//---------------------------------------------------------

// TYPE ASSERTIONS

type UserResponse = {
  id: number;
  name: string;
  avatar: string;
}
let userResponse = {} as UserResponse;

//---------------------------------------------------------

// Type para OBJETOS

type Point = {
  x: number;
  y: number;
}

function printCoord(points: Point){
  console.log(`O eixo x é : ${points.x} \n`)
  console.log(`O eixo y é : ${points.y} \n`)
}

printCoord({x:2,y:3})

//---------------------------------------------------------

// PROPRIEDADE OPCIONAL
// a (?) define que a prorpriedade é opcional isAdmin?: boolean;

type User = { 
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean;
}

let newUser: User = {
  name: 'Rafa',
  email: 'Rafa@gamil.com',
  age: 30
}
console.log(newUser)

//---------------------------------------------------------

//INTERSECÇÃO DE TIPOS

type Personagem = {
  id: number;
  name: string;
}

type Char ={
  nickname: string;
  level: number;
}

type PlayerInfo = Personagem & Char;
let player: PlayerInfo = {
  id: 1,
  name: 'Rafa',
  level: 1,
  nickname: 'Rafa'
}

console.log('\n')
console.log(player)

//---------------------------------------------------------

// INTERFACE

interface User2 {
  id: number;
  name: string;
}

let newUser2: User2 = {
  name: 'Bruno',
  id: 1
}

console.log('\n')
console.log(newUser2)

//---------------------------------------------------------

// Diferença de TYPE e INTERFACE
// os 2 define tipagem 
// type e mais simples

type UserType = {
  id: number;
  name: string;
}

type TPayment = {
  method: string;
}

type TAccount = UserType & TPayment

interface UserInter {
  id: number;
  name: string;
}

interface IPayment {
  method: string;
}

interface IAccount extends UserInter, IPayment {}