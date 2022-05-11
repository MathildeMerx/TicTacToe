import { changeForm } from "./formLogic";
import { ColorInput } from "./ColorInput";

// Component used to let the user modify the format of the button
function FormatForm({ formState, formDispatch }) {
    return (
        <form>
            {/* Color input to choose the color of the background */}
            <ColorInput
                colorName="backgroundColor"
                stateVariable={formState}
                formDispatch={formDispatch}
            />

            {/* Slider to choose the width od the button */}
            <label className="form-input" htmlFor="width">
                <p>Width (in px): {formState.width}</p>
                <input
                    type="range"
                    min="0"
                    max="300"
                    step="10"
                    value={formState.width}
                    onChange={(event) => changeForm(event, formDispatch)}
                    className="slider"
                    id="width"
                />
            </label>

            {/* Slider to choose the height of the button */}
            <label className="form-input" htmlFor="height">
                <p>Height (in px): {formState.height} </p>
                <input
                    type="range"
                    min="0"
                    max="300"
                    step="10"
                    value={formState.height}
                    onChange={(event) => changeForm(event, formDispatch)}
                    className="slider"
                    id="height"
                />
            </label>
        </form>
    );
}
export { FormatForm };
