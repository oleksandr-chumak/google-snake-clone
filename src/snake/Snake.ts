import type { Strawberry } from "../board/Strawberry";
import type { Renderable } from "../common/Renderable";
import { MovementDirection } from "./MovementDirection";
import { MovementDirectionUtil } from "./MovementDirectionUtil";
import { SnakeHead } from "./SnakeHead";
import { SnakePart } from "./SnakePart";

export class Snake implements Renderable {

    private movementDirection: MovementDirection; 
    private parts: SnakePart[] = []

    constructor(
        startRow: number,
        startCol: number,
        initialSize: number, 
        initialMovementDirection: MovementDirection 
    ) {
        this.movementDirection = initialMovementDirection;
        this.initializeCells(startRow, startCol, initialSize);
    }

    getHead(): SnakeHead {
        const head = this.parts[0];

        if (!(head instanceof SnakeHead)) {
            throw new Error("The first element in snake parts must be a SnakeHead.");
        }

        return head;
    }

    getTail(): SnakePart {
        return this.parts[this.parts.length - 1];
    }

    getParts(): SnakePart[] {
        return this.parts;
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.parts.forEach((part) => part.render(ctx))
    }

    changeMovementDirection(movementDirection: MovementDirection): void {
        const snakePartAfterHead = this.parts[1];
        const clonedHead = this.getHead().clone();
        clonedHead.move(movementDirection);

        if(clonedHead.comparePosition(snakePartAfterHead)) {
            return;
        }

        this.movementDirection = movementDirection;
    }

    move(): void {
        const head = this.getHead();

        this.parts[0] = head.asSnakePart();
        const newHead: SnakeHead = head.clone(); 
        newHead.move(this.movementDirection)

        this.parts.pop();
        this.parts.unshift(newHead);
    }

    checkCollision(): boolean {
        const seen = new Set<string>();

        for (const part of this.parts) {
            const key = `${part.row},${part.col}`;
            if (seen.has(key)) {
                return true; 
            }
            seen.add(key);
        }

        return false;
    }

    // return true if strawberry was eaten and false if not 
    eatStrawberry(strawberry: Strawberry) {
        if(
            !strawberry ||
            !strawberry.comparePosition(this.getHead())
        ) {
            return false
        }

        const newTail = this.getTail().clone();
        newTail.move(MovementDirectionUtil.getOppositeDirection(this.movementDirection));
        this.parts.push(newTail);

        return true;
    }

    private initializeCells(startRow: number, startCol: number, size: number) {
        this.parts = [new SnakeHead(startRow, startCol)];

        let part = new SnakePart(startRow, startCol, "black");
        for (let i = 0; i < size - 1; i++) {
            part.move(MovementDirectionUtil.getOppositeDirection(this.movementDirection));
            this.parts.push(part.clone());
        }
    }

}