// Type
type Order = {
  productId: string
  price: number
}
type User ={
  firstName: string
  age: number
  email: string
  password?: string
  // ? define que algo é opcional
  orders: Order[]
  register?(): string
}

const user: User = {
  firstName:"A",
  age:20,
  email:"A",
  orders:[{
    productId:"A", 
    price:1
  },
  {
    productId:"A", 
    price:1
  }],
  register() {
    return "foi"
  }
}

const printLog = (message: string) =>{
  console.log(message)
}
printLog(user.password!)
// ! remove o erro afirmando que ela existe

// Unions
type Author = {
  books: string[]
}
// une 2 tipos
const author: Author & User = {
  books:[],
  firstName:"A",
  age:20,
  email:"A",
  orders:[]
}

// Interfaces
// Mesmo efeito que Type porem tem algumas funcionalidades a mais 
interface UserInterface {
  readonly firstName: string
  age: number
}
// readonly define que não pode ser alterado o conteudo depois de criado o objeto
const criateUser: UserInterface ={
  firstName:"A",
  age:20,
}

//criateUser.firstName = "C"

interface AuthorInterface {
  books: string[]
}

const newAuthor: UserInterface | AuthorInterface = {
  firstName:"A",
  age:20,
  books:[]
}

// o type consegue fazer mas interface não
type Grade = number | string
const grade: Grade= 1;