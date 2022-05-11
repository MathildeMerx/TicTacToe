import { clickForm } from "./formLogic";

// Radio button for choosing border style
function RadioBorderStyle({ borderStyle, formDispatch }) {
    return (
        <>
            <input
                type="radio"
                id={borderStyle}
                name="borderStyle"
                onClick={(event) => clickForm(event, formDispatch)}
                className="radio"
            />
            <label>
                {borderStyle.charAt(0).toUpperCase() + borderStyle.slice(1)}
            </label>
        </>
    );
}

export { RadioBorderStyle };
