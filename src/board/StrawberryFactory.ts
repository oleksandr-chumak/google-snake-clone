import type { Snake } from "../snake/Snake";
import type { Board } from "./Board";
import type { Cell } from "./Cell";
import { Strawberry } from "./Strawberry";

export class StrawberryFactory {

    static create(board: Board, snake: Snake): Strawberry {
        const available: Cell[] = [];

        const snakeParts = new Set(
            snake.getParts().map(p => `${p.row},${p.col}`)
        );

        for (let row = 0; row < board.rowsCount; row++) {
            for (let col = 0; col < board.colsCount; col++) {
                if (!snakeParts.has(`${row},${col}`)) {
                    available.push(board.cells[row][col]);
                }
            }
        }

        if (available.length === 0) {
            throw new Error("No available cells to place the strawberry.");
        }

        const randomIndex = this.getRandomInt(0, available.length);
        const { row, col } = available[randomIndex];

        return new Strawberry(row, col);
    }

    private static getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

}