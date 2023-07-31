import Tool from "./Tool";

class Line extends Tool {
    currentX = 0
    currentY = 0
    saved: string | null = null;
    mouseDown = false;
    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
        this.listen()
    }
    listen() {
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseDownHandler(event: MouseEvent) {
        this.mouseDown = true
        const target = event.target as HTMLCanvasElement
        this.currentX = event.pageX - target?.offsetLeft
        this.currentY = event.pageY - target.offsetTop
        this.context?.beginPath()
        this.context?.moveTo(this.currentX, this.currentY)
        this.saved = this.canvas.toDataURL() 
    }

    mouseUpHandler() {
        this.mouseDown = false
    }

    mouseMoveHandler(e: MouseEvent) {
        if(this.mouseDown) {
            const target = e.target as HTMLCanvasElement
            this.draw(e.pageX-target.offsetLeft, e.pageY-target.offsetTop)
        }
    }
    
    draw(x: number, y: number) {
        if(this.context) {  
            const image = new Image()
            if(this.saved) {
                image.src = this.saved
            }
            image.onload = () => {
                const canvasWidth = this.canvas.width
                const canvasHeight = this.canvas.height
                this.context?.clearRect(0, 0, canvasWidth, canvasHeight)
                this.context?.drawImage(image, 0, 0, canvasWidth, canvasHeight)
                this.context?.beginPath()
                this.context?.moveTo(this.currentX, this.currentY)
                this.context?.lineTo(x, y)
                this.context?.stroke()
            }
        }

    }
}

export default Line;