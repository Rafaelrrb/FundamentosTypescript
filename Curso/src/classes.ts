interface IPerson{
  id: number;
  sayMyName(): string
}

class Person implements IPerson{
  readonly id: number;
  protected name:string;
  private age:number;

  constructor(id: number, name: string, age:number){
    this.id = id
    this.name = name
    this.age = age
  }

  sayMyName(): string{
    return this.name
  }
}

class Employee extends Person{
  constructor(id: number, name: string, age:number){
    super(id,name,age)
  }

  whoAmI(){
    return this.name
    // return this.age Não pode acessar pois é private
  }
}

const personNew = new Person(1,"A",20);

// Melhor forma de criar uma class

class PersonRefact {
  constructor( 
    readonly id: number,
    protected name:string,
    private age:number
    ){}
}