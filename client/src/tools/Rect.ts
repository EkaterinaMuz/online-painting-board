import Tool from "./Tool";

class Rect extends Tool {
    mouseDown;
    mouseUp;
    startX;
    startY;
    saved: unknown;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
        this.mouseDown = false;
        this.mouseUp = false;
        this.startX = 0;
        this.startY = 0;
        this.saved = null;
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
            this.startX = event.pageX - target?.offsetLeft
            this.startY = event.pageY - target.offsetTop
        }   
        this.saved = this.canvas.toDataURL()
    }
    mouseMoveHandler(event: MouseEvent) {
        if(this.mouseDown) {
            if(this.context) {
                const target = event.target as HTMLCanvasElement
                const currentX = event.pageX - target?.offsetLeft
                const currentY = event.pageY - target.offsetTop
                const width = currentX - this.startX
                const height = currentY - this.startY
                this.draw(this.startX, this.startY, width, height)
                
            }
        }
    }

    draw(x: number, y: number, width: number, height: number) {
        if(this.context) {
            this.context.rect(x, y, width, height)
            this.context.fill()
            this.context.stroke()
        }
    }
}

export default Rect;