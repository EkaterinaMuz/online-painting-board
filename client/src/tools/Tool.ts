
class Tool {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;
    static fillColor: string;
    static strokeColor: string;
    static lineWidth: string;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas?.getContext('2d')
        this.destroyTool()
    }

    set fillColor(color: string) {
        if(this.context) {
            this.context.fillStyle = color
        }
    }
    set strokeColor(color: string) {
        if(this.context) {
            this.context.strokeStyle = color
        }
    }
    set lineWidth(width: number) {
        if(this.context) {
            this.context.lineWidth = width
        }
    }

    destroyTool() {
        if (this.canvas) {
            this.canvas.onmouseup = null;
            this.canvas.onmousedown = null;
            this.canvas.onmousemove = null;
        }
        
    }
}

export default Tool;