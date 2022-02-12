import { changeForm } from "./formLogic";
import { ColorInput } from "./ColorInput";

function FormatForm({ formState, formDispatch }) {
    return (
        <form>
            <ColorInput
                colorName="backgroundColor"
                stateVariable={formState}
                formDispatch={formDispatch}
            />

            <label className="form-input" htmlFor="width">
                <p>Width (in px): {formState.width}</p>
                <input
                    type="range"
                    min="0"
                    max="300"
                    step="10"
                    value={formState.width}
                    onChange={(e) => changeForm(e, formDispatch)}
                    className="slider"
                    id="width"
                />
            </label>

            <label className="form-input" htmlFor="height">
                <p>Height (in px): {formState.height} </p>
                <input
                    type="range"
                    min="0"
                    max="300"
                    step="10"
                    value={formState.height}
                    onChange={(e) => changeForm(e, formDispatch)}
                    className="slider"
                    id="height"
                />
            </label>
        </form>
    );
}
export { FormatForm };
