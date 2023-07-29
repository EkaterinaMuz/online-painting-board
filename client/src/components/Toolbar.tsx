import canvasStore from "../stores/canvasStore";
import toolbarSore from "../stores/toolbarSore";
import "../styles/toolbar.scss";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";

function Toolbar() {
    const onChangeColor: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        toolbarSore.setFillColor(event.target.value)
        // toolbarSore.setStrokeColor(event.target.value)
    }

    return (
        <div className="toolbar">
            <button className="toolbar__button brush" onClick={() => toolbarSore.setTool(new Brush(canvasStore.canvas))}></button>
            <button className="toolbar__button square" onClick={() => toolbarSore.setTool(new Rect(canvasStore.canvas))}></button>
            <button className="toolbar__button circle"></button>
            <button className="toolbar__button eraser"></button>
            <button className="toolbar__button line"></button>
            <div className="toolbar__button color">
                <input id="fill-color" onChange={onChangeColor} type="color" />
            </div>
            <button className="toolbar__button undo" onClick={() => canvasStore.undo()}></button>
            <button className="toolbar__button redo" onClick={() => canvasStore.redo()}></button>
            <button className="toolbar__button save"></button>
        </div>
    )
}

export default Toolbar;
