import { ColorInput } from "./ColorInput";
import { changeForm } from "./formLogic";
import { RadioAlignText } from "./RadioAlignText";

const textAlign = ["left", "center", "right"];

function TextForm({ formState, formDispatch }) {
    return (
        <form className="tab-form">
            <label className="form-input" htmlFor="text">
                <p>Button text:</p>
                <input
                    type="text"
                    id="text"
                    value={formState.text}
                    onChange={(e) => changeForm(e, formDispatch)}
                />
            </label>
            <ColorInput
                colorName="textColor"
                stateVariable={formState}
                formDispatch={formDispatch}
            />

            <div className="form-input">
                <p>Align text: {formState.align} </p>
                <p>
                    {textAlign.map((e) => (
                        <RadioAlignText
                            whereAlign={e}
                            formDispatch={formDispatch}
                            key={e}
                        />
                    ))}
                </p>
            </div>

            <label className="form-input" htmlFor="fontSize">
                <p>Font size (in %): {formState.fontSize}</p>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={formState.fontSize}
                    onChange={(e) => changeForm(e, formDispatch)}
                    className="slider"
                    id="fontSize"
                />
            </label>
        </form>
    );
}

export { TextForm, textAlign };
