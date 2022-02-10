import { ColorInput } from "./ColorInput";
import { changeForm } from "./formLogic";
import { RadioBorderStyle } from "./RadioBorderStyle";

function BorderForm({ formState, formDispatch }) {
    return (
        <form>
            <h3>Border styling</h3>
            <div>
                <p>Border style: </p>
                {[
                    "none",
                    "dotted",
                    "dashed",
                    "solid",
                    "double",
                    "groove",
                    "ridge",
                    "inset",
                    "outset",
                ].map((e) => (
                    <RadioBorderStyle
                        borderStyle={e}
                        formDispatch={formDispatch}
                        key={e}
                    />
                ))}
            </div>

            <br />

            <ColorInput
                colorName="borderColor"
                stateVariable={formState}
                formDispatch={formDispatch}
            />

            <br />
            <label htmlFor="borderWidth">
                Border width (in px):
                <input
                    type="range"
                    min="1"
                    max="20"
                    value={formState.borderWidth}
                    onChange={(e) => changeForm(e, formDispatch)}
                    className="slider"
                    id="borderWidth"
                />
                {formState.borderWidth}
            </label>

            <br />
            <label htmlFor="borderRadius">
                Border radius (in px):
                <input
                    type="range"
                    min="1"
                    max="150"
                    value={formState.borderRadius}
                    onChange={(e) => changeForm(e, formDispatch)}
                    className="slider"
                    id="borderRadius"
                />
                {formState.borderRadius}
            </label>
        </form>
    );
}

export { BorderForm };
