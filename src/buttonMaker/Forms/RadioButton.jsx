import { clickForm } from "./formLogic";

// Radio button for choosing border style
function RadioButton({ value, valueType, formDispatch }) {
    return (
        <>
            <input
                type="radio"
                id={value}
                name={valueType}
                onClick={(event) => {
                    event.preventDefault();
                    clickForm(event.target.name, event.target.id, formDispatch);
                }}
                className="radio"
            />
            <label>{value.charAt(0).toUpperCase() + value.slice(1)}</label>
        </>
    );
}

export { RadioButton };
