/**
 * Let's make a calculator 🧮
 */

{

  type Operater = "add" | "substract" | "multiply" | "divide" | "remainder" ;


  const calculate = (operater: Operater, int1: number, int2: number): number | Error =>  {
    switch (operater) {
      case "add" :
        return int1 + int2;
      case "substract" :
        return int1 - int2;
      case "multiply" :
        return int1 * int2;
      case "divide" :
        if (int1 <= 0) return Infinity;
        else return int1 / int2;
      case "remainder" :
        return int1 % int2;
      default:
        throw new Error("asdasd");
    }
  }

  console.log(calculate('add', 1, 3)); // 4
  console.log(calculate('substract', 3, 1)); // 2
  console.log(calculate('multiply', 4, 2)); // 8
  console.log(calculate('divide', 4, 2)); // 2
  console.log(calculate('remainder', 5, 2)); // 1

}