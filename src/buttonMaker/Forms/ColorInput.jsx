import { changeForm } from "./formLogic";

// Component enabling the user to choose a color
function ColorInput({ colorName, stateVariable, formDispatch }) {
    return (
        <label className="form-input" htmlFor={colorName}>
            {/* Displays the color the modify */}
            <p>
                {colorName.charAt(0).toUpperCase() + colorName.slice(1, -5)}{" "}
                color (between <i>000000</i> and <i>ffffff</i>
                ):
            </p>

            <div className="color-picker">
                {/* Input where the user can fill in their color */}
                <input
                    className="color-input"
                    type="text"
                    id={colorName}
                    value={stateVariable[colorName]}
                    onChange={(event) =>
                        changeForm(
                            event.target.id,
                            event.target.value,
                            formDispatch
                        )
                    }
                />

                {/* Display of the chosen color */}
                <div
                    className="color-display"
                    style={{
                        backgroundColor: `#${stateVariable[colorName]}`,
                    }}
                ></div>
            </div>
        </label>
    );
}

export { ColorInput };
