import { queryAnswer } from "./apiQuery";

// Will modify the colors left blank
async function onSubmitGenerateColor(formState, formDispatch) {
    const newColors = await queryAnswer([
        formState.textColor,
        formState.borderColor,
        formState.backgroundColor,
    ]);

    for (const [colorType, colorValue] of Object.entries(newColors)) {
        // Each color chosen by the API is assigned
        formDispatch({
            type: "update",
            payload: {
                key: colorType,
                value: colorValue,
            },
        });
    }
}

export { onSubmitGenerateColor };
