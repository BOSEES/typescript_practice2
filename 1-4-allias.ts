{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text  = "string";
  const address: Text = "korea";
  type Num = number;

  type Student = {
    name: string;
    age: number;
  }

  const student: Student = {
    name: "duddl",
    age: 12
  }

  /**
   * string Literal Types
   */

   type Name = "name";
   let duddlfName: Name;
   duddlfName = "name";
   type JSON = "json";
   const json: JSON = "json";

   type Boal = true;
   const isCat: Boal = true;
   
}