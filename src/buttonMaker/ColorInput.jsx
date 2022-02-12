import { changeForm } from "./formLogic";

function ColorInput({ colorName, stateVariable, formDispatch }) {
    return (
        <label className="form-input" htmlFor={colorName}>
            <p>
                {colorName.charAt(0).toUpperCase() + colorName.slice(1, -5)}{" "}
                color (between <i>000000</i> and <i>ffffff</i>
                ):
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <input
                    className="color-input"
                    type="text"
                    id={colorName}
                    value={stateVariable[colorName]}
                    onChange={(e) => changeForm(e, formDispatch)}
                />
                <div
                    style={{
                        backgroundColor: `#${stateVariable[colorName]}`,
                        height: "16px",
                        width: "16px",
                        borderStyle: "solid",
                        borderWidth: "2px",
                        borderColor: "white",
                    }}
                ></div>
            </div>
        </label>
    );
}

export { ColorInput };
