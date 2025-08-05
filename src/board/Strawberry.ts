import { SimpleBoardElement } from "./SimpleBoardElement";

export class Strawberry extends SimpleBoardElement {

    constructor(public readonly row: number, public readonly col: number) {
        super(row, col, "red")
    }

}