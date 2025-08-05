import { MovementDirection } from "./MovementDirection";

export class MovementDirectionUtil {

    static getOppositeDirection(direction: MovementDirection): MovementDirection {
        switch (direction) {
            case MovementDirection.UP:
                return MovementDirection.DOWN;
            case MovementDirection.DOWN:
                return MovementDirection.UP;
            case MovementDirection.LEFT:
                return MovementDirection.RIGHT;
            case MovementDirection.RIGHT:
                return MovementDirection.LEFT;
        }
    }

}