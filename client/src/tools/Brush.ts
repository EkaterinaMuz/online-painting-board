import Tool from "./Tool";

class Brush extends Tool {
    mouseDown;
    mouseUp;
    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
        this.mouseDown = false;
        this.mouseUp = false;
        this.listen()
    }
    listen() {
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        
    }
    mouseUpHandler() {
        this.mouseDown = false
    }
    mouseDownHandler(event: MouseEvent) {
        this.mouseDown = true
        this.context?.beginPath()
        if(event && this.context) {
            const target = event.target as HTMLCanvasElement
            this.context.moveTo(event.pageX - target?.offsetLeft, event.pageY - target.offsetTop)
        }   
    }
    mouseMoveHandler(event: MouseEvent) {
        if(this.mouseDown) {
            if(this.context) {
                const target = event.target as HTMLCanvasElement
                this.draw(event.pageX - target?.offsetLeft, event.pageY - target.offsetTop)
            }
        }
    }

    draw(x: number, y: number) {
        this.context?.lineTo(x, y)
        this.context?.stroke()

    }
}

export default Brush;