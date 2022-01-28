{
  /**
   * javascript
   * primitive : number, string, boolean, bigint, simbol, null, undifined
   * object: funtion, array...
   */

  //number
  const num:number = -6;

  //  string
  const str:string = "hello";

  // boolean
  const boal:boolean = false;

  // undefined
  let name:undefined //쓰레기
  let age: number | undefined
  age = 12
  age = undefined

  function find(): number | null {
    return "asd"
  }

  //null
  let person: null;
  let person2: string | null
  
  person2 = "asdasd";
  person2 = null


  //nuknown 쓰레기
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any 쓰레기
  let anyting:any = 123;
  anyting = "asdasd";

  // void
  function Print(): void {
    console.log("hello");
    return;
  }

  let unusable: void = undefined;

  // never 함수가 어떠한것도 리턴하지 않을떄
  function throwError(message: stirng): never {
    throw new Error(message);
  }

  let obj: object; //쓰레기
  function acceptSomeObject(obj: object) {

  }

  
}