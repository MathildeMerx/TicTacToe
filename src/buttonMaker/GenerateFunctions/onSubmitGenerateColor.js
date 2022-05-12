import { apiColor } from "./apiColor";

// Will modify the colors left blank
async function onSubmitGenerateColor(formState, formDispatch) {
    const newColors = await apiColor([
        formState.textColor,
        formState.borderColor,
        formState.backgroundColor,
    ]);
    // Each color chosen by the API is assigned
    formDispatch({
        type: "update",
        payload: newColors,
    });
}

export { onSubmitGenerateColor };
