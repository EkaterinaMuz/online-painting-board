/* eslint-disable @typescript-eslint/no-unsafe-call */
import { makeAutoObservable } from "mobx";

class CanvasStore {
    canvas: null | HTMLCanvasElement = null
    undoList: string[] = []
    redoList: string[] = []

    constructor() {
        makeAutoObservable(this)
    }
    setCanvas(canvas: null | HTMLCanvasElement) {
        this.canvas = canvas
    }

    pushToUndo(data: string) {
        this.undoList.push(data)
    }
    pushToRedo(data: string) {
        this.redoList.push(data)
    }
    undo() {
        if(this.canvas) {
            const context = this.canvas.getContext('2d')
            const canvasWidth = this.canvas.width
            const canvasHeight = this.canvas.height
            if(this.undoList.length > 0) {
                const deleteItemURL = this.undoList.pop()
                this.redoList.push(this.canvas.toDataURL())
                const image = new Image()
                if(deleteItemURL) {
                    image.src = deleteItemURL
                }
                image.onload = () => {
                    context?.clearRect(0, 0, canvasWidth, canvasHeight)
                    context?.drawImage(image, 0, 0, canvasWidth, canvasHeight)
                }
            } else {
                context?.clearRect(0, 0, canvasWidth, canvasHeight)
            
            }
        }
    }
    redo() {
        if(this.canvas) {
            const context = this.canvas.getContext('2d')
                const canvasWidth = this.canvas.width
                const canvasHeight = this.canvas.height
                if(this.redoList.length > 0) {
                    const returnItemURL = this.redoList.pop()
                    this.undoList.push(this.canvas.toDataURL())
                    const image = new Image()
                    if(returnItemURL) {
                        image.src = returnItemURL
                    }
                    image.onload = () => {
                        context?.clearRect(0, 0, canvasWidth, canvasHeight)
                        context?.drawImage(image, 0, 0, canvasWidth, canvasHeight)
                    }
                } 
        }
    }
}

export default new CanvasStore();