import { clickForm } from "./formLogic";

function RadioBorderStyle({ borderStyle, formDispatch }) {
    return (
        <>
            <input
                type="radio"
                id={borderStyle}
                name="borderStyle"
                onClick={(e) => clickForm(e, formDispatch)}
            />
            <label>
                {borderStyle.charAt(0).toUpperCase() + borderStyle.slice(1)}
            </label>
        </>
    );
}

export { RadioBorderStyle };
