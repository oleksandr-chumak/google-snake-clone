
export class CanvasUtil {

    static getCanvas(id: string): HTMLCanvasElement {
        const canvas = document.getElementById(id);

        if (!canvas) {
            throw new Error("Unable to find an element with the id: " + id);
        }

        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error("Element with id '" + id + "' is not an instance of HTMLCanvasElement.");
        }

        return canvas;
    }

    static getCanvasContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
        const ctx = canvas.getContext("2d");

        if (!ctx) {
            throw new Error("Unable to get 2D rendering context from canvas.");
        }

        return ctx;
    }

}
