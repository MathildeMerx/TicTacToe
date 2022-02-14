import { ColorInput } from "./ColorInput";
import { changeForm } from "./formLogic";
import { RadioBorderStyle } from "./RadioBorderStyle";

// All possible border styles
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
            {/* Radio button  to choose the border style */}
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

            {/* Color input to choose the border color */}
            <ColorInput
                colorName="borderColor"
                stateVariable={formState}
                formDispatch={formDispatch}
            />

            {/* Slider to choose the border width */}
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

            {/* Slider to choose the border radius */}
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
