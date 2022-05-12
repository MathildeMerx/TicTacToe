import { ColorInput } from "./ColorInput";
import { updateForm } from "./formLogic";
import { RadioButton } from "./RadioButton";

// Possible alignment styles
const textAlign = ["left", "center", "right"];

function TextForm({ formState, formDispatch }) {
    return (
        <form className="tab-form">
            {/* Text input to choose the text of the button */}
            <label className="form-input" htmlFor="text">
                <p>Button text:</p>
                <input
                    type="text"
                    id="text"
                    value={formState.text}
                    onChange={(event) =>
                        updateForm(
                            event.target.id,
                            event.target.value,
                            formDispatch
                        )
                    }
                />
            </label>

            {/* Text input to choose the color of the text of the button */}
            <ColorInput
                colorName="textColor"
                stateVariable={formState}
                formDispatch={formDispatch}
            />

            {/* Radio button to choose the alignement of the text of the button */}
            <div className="form-input">
                <p>Align text: {formState.align} </p>
                <p>
                    {textAlign.map((alignStyle) => (
                        <RadioButton
                            value={alignStyle}
                            valueType="align"
                            formDispatch={formDispatch}
                            key={alignStyle}
                        />
                    ))}
                </p>
            </div>

            {/* Slider to choose the font size of the text of the button */}
            <label className="form-input" htmlFor="fontSize">
                <p>Font size (in %): {formState.fontSize}</p>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={formState.fontSize}
                    onChange={(event) =>
                        updateForm(
                            event.target.id,
                            event.target.value,
                            formDispatch
                        )
                    }
                    className="slider"
                    id="fontSize"
                />
            </label>
        </form>
    );
}

export { TextForm, textAlign };
