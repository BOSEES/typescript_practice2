{

  // Javascript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // Typescript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // Javascript
  // function jsFetchNum(id) {
  //   //code...
  //   //code...
  //   //code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   })
  // }

  // TypeScript
  // function fetchNum(id: string): Promise<number> {
  //   //code...
  //   //code...
  //   //code...
  //   return new Promise((resolve, reject) => {
  //     resolve(123)
  //   })
  // }

  // Optional parameter
  function printName(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("Steve", "Jobs");
  printName("duddlf2", undefined);
  printName("duddlf",undefined);

  //Default Parameter

  function printMessage(message: string = "default message") {
    console.log(message);
  }

  printMessage("asdasd");

  // Rest Parameter
  function addNumbers(...nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0);
  }

  console.log(addNumbers(1, 2));
}