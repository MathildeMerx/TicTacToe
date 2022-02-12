import { ColorInput } from "./ColorInput";
import { changeForm } from "./formLogic";
import { RadioBorderStyle } from "./RadioBorderStyle";

const borderStyles = [
    "none",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
];

function BorderForm({ formState, formDispatch }) {
    return (
        <form className="tab-form">
            <div className="form-input">
                <p>Border style: {formState.borderStyle}</p>
                <p style={{ maxWidth: "50%", textAlign: "right" }}>
                    {borderStyles.map((e) => (
                        <RadioBorderStyle
                            borderStyle={e}
                            formDispatch={formDispatch}
                            key={e}
                        />
                    ))}
                </p>
            </div>
            <ColorInput
                colorName="borderColor"
                stateVariable={formState}
                formDispatch={formDispatch}
            />

            <label className="form-input" htmlFor="borderWidth">
                <p>Border width (in px): {formState.borderWidth}</p>
                <input
                    type="range"
                    min="1"
                    max="20"
                    value={formState.borderWidth}
                    onChange={(e) => changeForm(e, formDispatch)}
                    className="slider"
                    id="borderWidth"
                />
            </label>

            <label className="form-input" htmlFor="borderRadius">
                <p>Border radius (in px): {formState.borderRadius}</p>
                <input
                    type="range"
                    min="1"
                    max="150"
                    value={formState.borderRadius}
                    onChange={(e) => changeForm(e, formDispatch)}
                    className="slider"
                    id="borderRadius"
                />
            </label>
        </form>
    );
}

export { BorderForm, borderStyles };
