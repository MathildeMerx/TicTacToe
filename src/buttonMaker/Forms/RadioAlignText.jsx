import { clickForm } from "./formLogic";

// Radio button for choosing text alignment
function RadioAlignText({ whereAlign, formDispatch }) {
    return (
        <>
            <input
                type="radio"
                id={whereAlign}
                name="align"
                onClick={(event) => clickForm(event, formDispatch)}
            />
            <label>
                {whereAlign.charAt(0).toUpperCase() + whereAlign.slice(1)}
            </label>
        </>
    );
}

export { RadioAlignText };
