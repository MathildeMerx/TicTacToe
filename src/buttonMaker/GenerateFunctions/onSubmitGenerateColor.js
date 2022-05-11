import { queryAnswer } from "./apiQuery";

// Will modify the colors left blank
function onSubmitGenerateColor(formState, formDispatch) {
    queryAnswer(
        [formState.textColor, formState.borderColor, formState.backgroundColor],
        formDispatch
    );
}

export { onSubmitGenerateColor };
