import { Board } from "./board/Board";
import { StrawberryFactory } from "./board/StrawberryFactory";
import { CanvasUtil } from "./common/CanvasUtil";
import { MovementDirection } from "./snake/MovementDirection";
import { Snake } from "./snake/Snake";

const CANVAS_ID = 'app'; 
const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 1200;

const canvas = CanvasUtil.getCanvas(CANVAS_ID)
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const ctx = CanvasUtil.getCanvasContext(canvas);

const board = new Board(CANVAS_WIDTH, CANVAS_HEIGHT);
const snake = new Snake(4, 3, 5, MovementDirection.RIGHT)
let strawberry = StrawberryFactory.create(board, snake); 

function renderAllEntities() {
  board.render(ctx);
  strawberry.render(ctx);
  snake.render(ctx);
}

addEventListener("keydown", (event) => {
  switch(event.code) {
    case "KeyW":
      snake.changeMovementDirection(MovementDirection.UP);
      break;
    case "KeyS":
      snake.changeMovementDirection(MovementDirection.DOWN);
      break;
    case "KeyA":
      snake.changeMovementDirection(MovementDirection.LEFT);
      break;
    case "KeyD":
      snake.changeMovementDirection(MovementDirection.RIGHT);
      break;
  }
})

renderAllEntities()

setInterval(() => {
  snake.move()

  if(snake.checkCollision()) {
    alert("Game over!")
  }

  if(
    snake.getHead().col < 0 || snake.getHead().col >= board.colsCount || 
    snake.getHead().row < 0 || snake.getHead().row  >= board.rowsCount
  ) {
    alert("Game over!")
  }

  if(snake.eatStrawberry(strawberry)) {
    strawberry = StrawberryFactory.create(board, snake);
  }

  renderAllEntities()
}, 200)
