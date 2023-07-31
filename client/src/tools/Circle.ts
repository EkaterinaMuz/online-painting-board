import Tool from "./Tool";

class Circle extends Tool {
    mouseDown = false;
    mouseUp = false;
    startX = 0;
    startY = 0;
    saved: string | null = null;

    constructor(canvas: HTMLCanvasElement) {
        super(canvas)
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
                const radius = Math.sqrt(width**2 + height**2)
                this.draw(this.startX, this.startY, radius)
                
            }
        }
    }

    draw(x: number, y: number, radius: number) {
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
                this.context?.arc(x, y, radius, 0, Math.PI * 2)
                this.context?.fill()
                this.context?.stroke()
            }
            
        }
    }
}

export default Circle;