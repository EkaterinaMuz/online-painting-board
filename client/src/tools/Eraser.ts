import Brush from "./Brush"

class Eraser extends Brush {
    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
    }
    draw(x: number, y: number) {
        if(this.context) {
            this.context.strokeStyle = '#FFFFFF'
            this.context.lineTo(x, y)
            this.context.stroke()
        }

    }
}

export default Eraser;