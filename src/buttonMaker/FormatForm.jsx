import { changeForm } from "./formLogic";
import { ColorInput } from "./ColorInput";

function FormatForm({ formState, formDispatch }) {
    return (
        <form>
            <h3>Display sytling</h3>

            <ColorInput
                colorName="backgroundColor"
                stateVariable={formState}
                formDispatch={formDispatch}
            />

            <br />
            <label htmlFor="width">
                Width (in px):
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
                {formState.width}
            </label>

            <br />
            <label htmlFor="height">
                Height (in px):
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
                {formState.height}
            </label>
        </form>
    );
}
export { FormatForm };
