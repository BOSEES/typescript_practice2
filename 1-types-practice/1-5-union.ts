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
    res: {
      body: string;
    }
  }
  type FailState = {
    resson: string;
  }

  type LoginState = SucessState | FailState;
  function login (): LoginState {
    return {
      res: {
        body:"asdasd"
      }
    }
  }

  function printLoginState(state: LoginState): void {
    if ("res" in state) {
      console.log("성공");
    } else {
      console.log("실패");
    }
  }
}