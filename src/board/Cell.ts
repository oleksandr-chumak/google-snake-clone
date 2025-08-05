import { SimpleBoardElement } from "./SimpleBoardElement";

export class Cell extends SimpleBoardElement {

    constructor(
        public readonly row: number,
        public readonly col: number,
        public readonly color: string
    ) {
        super(row, col, color)
    }

}