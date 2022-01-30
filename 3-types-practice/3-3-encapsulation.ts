{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }


  //public
  //private
  //protectied
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT:number  = 7; //class level
    private coffeeBeans: number = 0; //instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMechine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater then 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots:number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = CoffeeMaker.makeMechine(30);
  maker.fillCoffeeBeans(10);
  console.log(maker);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number){
      if (num < 0) {
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
    }
  }

  const user = new User("Steve", "jobs");
  console.log(user.fullName);
  
}