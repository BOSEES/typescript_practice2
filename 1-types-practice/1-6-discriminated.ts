{
  /** 
   * Union Types: OR
   * */ 

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32 | 64;
  const tile: TileSize = 8;
  
  type SucessState = {
    result: "success";
    res: {
      body: string;
    }
  }
  type FailState = {
    result: "fail";
    resson: string;
  }

  type LoginState = SucessState | FailState;
  function login (): LoginState {
    return {
      result:"success",
      res: {
        body:"asdasd"
      }
    }
  }

  function printLoginState(state: LoginState): void {

    if (state.result === "success") {
      console.log("성공");
    } else {
      console.log(state.resson)
    }
  }
}