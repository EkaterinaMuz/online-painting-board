import { makeAutoObservable } from "mobx";
import Tool from "../tools/Tool";

class ToolbarStore {
    tool: Tool | null = null
    constructor() {
        makeAutoObservable(this)
    }
    setTool(tool: Tool) {
        this.tool = tool
    }
    setFillColor(color: string) {
        if(this.tool) {
            this.tool.fillColor = color
        }
    }
    setStrokeColor(color: string) {
        if(this.tool) {
            this.tool.strokeColor= color
        }
    }
    setLineWidth(width: string) {
        if(this.tool) {
            this.tool.lineWidth = +width
        }
    }
}

export default new ToolbarStore();