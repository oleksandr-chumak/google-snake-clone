import type { Clonable } from "../common/Clonable";
import { SnakePart } from "./SnakePart";

export class SnakeHead extends SnakePart implements Clonable<SnakeHead> {

    constructor(row: number, col: number) {
        super(row, col, "blue");
    }

    asSnakePart(): SnakePart {
        return new SnakePart(this.row, this.col, "black");
    }

    clone(): SnakeHead {
        return new SnakeHead(this.row, this.col);
    }

}