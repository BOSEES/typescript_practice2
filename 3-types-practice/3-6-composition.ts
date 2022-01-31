{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }


  //public
  //private
  //protectied
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT:number  = 7; //class level
    private coffeeBeans: number = 0; //instance (object) level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMechine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater then 0");
      }
      this.coffeeBeans += beans;
    }
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}`);
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots:number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    clean() {
      console.log("clean in the mechine");
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {

    constructor(beans: number, private Serial: string) {
      super(beans);
    }

    private steamMilk() {
      console.log("steaming some milk... ");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    
    hasSugar(): void {
      console.log("sugar...");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.hasSugar();
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }

  class SweetCaffeLatteMachine {
    
  }

  const machines: Array<CoffeeMaker> = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(15, "123123"),
    new SweetCoffeeMaker(15),
    new CoffeeMachine(23),
    new CaffeLatteMachine(23, "333333"),
    new SweetCoffeeMaker(23),
  ]

  machines.forEach(machine => {
    console.log("--------------------");
    machine.makeCoffee(2);
  })
}