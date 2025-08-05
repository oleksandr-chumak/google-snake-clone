import { MovementDirection } from "./MovementDirection";
import { SimpleBoardElement } from "../board/SimpleBoardElement";
import type { Clonable } from "../common/Clonable";

export class SnakePart extends SimpleBoardElement implements Clonable<SnakePart> {

    constructor(
        public row: number,
        public col: number,
        public color: string
    ) {
        super(row, col, color)
    }

    move(direction: MovementDirection): void {
        switch (direction) {
            case MovementDirection.UP:
                this.row -= 1;
                break;
            case MovementDirection.DOWN:
                this.row += 1;
                break;
            case MovementDirection.LEFT:
                this.col -= 1;
                break;
            case MovementDirection.RIGHT:
                this.col += 1;
                break;
        }
    }

    clone(): SnakePart {
        return new SnakePart(this.row, this.col, this.color)
    }

}