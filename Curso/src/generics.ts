// poder receber mais de 1 generic <T,Y,Z>
const returnValue = <T>(value: T): T => value

//<string, number, boolean>
const message = returnValue<string>("Ola")
const count = returnValue<number>(5)

function getFirstValueFromArray<T>(array: T[]){
  return array[0]
}

const arrayString = getFirstValueFromArray<string>(["1","2"])
const arrayNumber = getFirstValueFromArray<number>([3,4])

// Promises

const returnPromise = async (): Promise<number> =>{
  return 5
}

// Classes

class GenericNumber<T>{
  zeroValue: T
  sum: (x:T,y:T) => T

  constructor(zeroValue: T, sum: (x:T,y:T) => T){
    this.zeroValue = zeroValue
    this.sum = sum
  }
}

const myGenericNumber = new GenericNumber<number>(0,(x: number,y: number)=>{
  return x + y
})