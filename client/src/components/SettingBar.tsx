import toolbarSore from "../stores/toolbarSore";
import "../styles/toolbar.scss";

const SettingBar = () => {
    return (
        <div className="settings">
            <label htmlFor="line-width">Толщина линии</label>
            <input
                onChange={e => toolbarSore.setLineWidth(e.target.value)}
                id="line-width"
                type="number"
                defaultValue={1}
                min={1}
                max={50} />
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input
                onChange={e => toolbarSore.setStrokeColor(e.target.value)}
                id="stroke-color"
                type="color"
            />
        </div>
    )
}

export default SettingBar;