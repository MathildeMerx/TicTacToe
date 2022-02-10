import { clickForm } from "./formLogic";

function RadioAlignText({ whereAlign, formDispatch }) {
    return (
        <>
            <input
                type="radio"
                id={whereAlign}
                name="align"
                onClick={(e) => clickForm(e, formDispatch)}
            />
            <label>
                {whereAlign.charAt(0).toUpperCase() + whereAlign.slice(1)}
            </label>
        </>
    );
}

export { RadioAlignText };
