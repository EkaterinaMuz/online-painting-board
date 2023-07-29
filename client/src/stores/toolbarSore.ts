import { makeAutoObservable } from "mobx";
import Tool from "../tools/Tool";
import Brush from "../tools/Brush";

class ToolbarStore {
    tool: typeof Tool | null = null
    constructor() {
        makeAutoObservable(this)
    }
    setTool(tool: typeof Tool) {
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
    setLineWidth(color: string) {
        if(this.tool) {
            this.tool.lineWidth = color
        }
    }
}

export default new ToolbarStore();