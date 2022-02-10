import { ColorInput } from "./ColorInput";
import { changeForm } from "./formLogic";
import { RadioAlignText } from "./RadioAlignText";

function TextForm({ formState, formDispatch }) {
    return (
        <form>
            <h3>Text styling</h3>
            <label htmlFor="text">
                Button text: <br />
                <input
                    type="text"
                    id="text"
                    value={formState.text}
                    onChange={(e) => changeForm(e, formDispatch)}
                    placeholder=""
                />
            </label>

            <br />
            <ColorInput
                colorName="textColor"
                stateVariable={formState}
                formDispatch={formDispatch}
            />

            <br />
            <div>
                <p>Align text: </p>
                {["left", "center", "right"].map((e) => (
                    <RadioAlignText
                        whereAlign={e}
                        formDispatch={formDispatch}
                        key={e}
                    />
                ))}
            </div>

            <br />
            <label htmlFor="fontSize">
                Font size (in %):
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
                {formState.fontSize}
            </label>
        </form>
    );
}

export { TextForm };
