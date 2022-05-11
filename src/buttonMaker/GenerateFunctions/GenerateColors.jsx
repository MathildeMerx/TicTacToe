import { onSubmitGenerateColor } from "./onSubmitGenerateColor";
import { QuestionIcon } from "./QuestionIcon";

//Button to generate colors
function GenerateColors({ formState, formDispatch }) {
    return (
        <div>
            <button
                onClick={() => onSubmitGenerateColor(formState, formDispatch)}
            >
                Generate colors
            </button>
            <QuestionIcon />
        </div>
    );
}

export { GenerateColors };
