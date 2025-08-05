import type { Renderable } from "../common/Renderable";

export class SimpleBoardElement implements Renderable {

    public static readonly SIZE = 40;

    constructor(
        public readonly row: number,
        public readonly col: number,
        public readonly color: string
    ) {}

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.col * SimpleBoardElement.SIZE,
            this.row * SimpleBoardElement.SIZE,
            SimpleBoardElement.SIZE,
            SimpleBoardElement.SIZE,
        )
    }

    comparePosition(element: SimpleBoardElement): boolean {
        return this.row === element.row && this.col === element.col;
    }

}