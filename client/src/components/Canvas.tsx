import { useRef, useEffect } from 'react';
import '../styles/canvas.scss';
import { observer } from 'mobx-react-lite';
import canvasStore from '../stores/canvasStore';
import toolbarSore from '../stores/toolbarSore';
import Brush from '../tools/Brush';

const Canvas = observer(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            canvasStore.setCanvas(canvasRef.current);
            toolbarSore.setTool(new Brush(canvasRef.current))
        }
    }, [])

    const onMouseDown = () => {
        canvasStore.pushToUndo(canvasRef.current?.toDataURL())
    }

    return (
        <div className="canvas">
            <canvas onMouseDown={onMouseDown} ref={canvasRef} width={800} height={500}></canvas>
        </div>
    )
})

export default Canvas;
