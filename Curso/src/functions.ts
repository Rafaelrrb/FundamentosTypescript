const sum = (x: number ,y: number): number | string=>{
  return (x + y).toString()
}
const value = sum(1,2)

const log = (message: string):void =>{
  console.log(message)
}

// Interface em funções
interface MathFunc {
  (x: number, y: number): number;
}

const sumInterface: MathFunc = (x: number ,y: number): number=>{
  return x + y
}

