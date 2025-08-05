import { Cell } from "./Cell";
import type { Renderable } from "../common/Renderable"
import { SimpleBoardElement } from "./SimpleBoardElement";

export class Board implements Renderable {

    public readonly cells: Cell[][] = []
    public readonly rowsCount: number;
    public readonly colsCount: number;
    
    constructor(
        public readonly boardWidth: number, 
        public readonly boardHeight: number
    ) {
        if (this.boardWidth % SimpleBoardElement.SIZE > 0) {
            throw new Error("Unable to initialize cells. Board width is not fully divisible by cell size: " + SimpleBoardElement.SIZE);
        }

        if (this.boardHeight % SimpleBoardElement.SIZE > 0) {
            throw new Error("Unable to initialize cells. Board height is not fully divisible by cell size: " + SimpleBoardElement.SIZE);
        }

        this.rowsCount = this.boardHeight / SimpleBoardElement.SIZE;
        this.colsCount = this.boardWidth / SimpleBoardElement.SIZE;

        this.initializeCells();
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.cells.forEach((row) => {
            row.forEach((cell) => cell.render(ctx));
        });
    }

    private initializeCells() {

        for(let ri = 0; ri <= this.rowsCount; ri++) {
            const row = [];
            for(let ci = 0; ci <= this.colsCount; ci++) {
                row.push(new Cell(
                    ri, 
                    ci, 
                    (ri % 2 === ci % 2) ? "#aad750" : "#a2d148" 
                ))
            }
            this.cells.push(row);
        }
    }

}