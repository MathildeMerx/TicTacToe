import { apiPun } from "./apiPun";
import { apiColor } from "./apiColor";
import { generateRandom } from "./generateRandom";
import { onSubmitGenerateColor } from "./onSubmitGenerateColor";

//Button to generate a random button
function GenerateRandom({ formDispatch }) {
    return (
        <button
            onClick={() =>
                clickGenerateRandom(formDispatch, apiPun, onSubmitGenerateColor)
            }
        >
            Generate random
        </button>
    );
}

async function clickGenerateRandom(
    formDispatch,
    apiPun,
    onSubmitGenerateColor
) {
    const buttonText = await apiPun(formDispatch);
    const newColors = await apiColor(["", "", ""]);
    const generatedButton = {
        ...generateRandom(),
        text: buttonText,
        ...newColors,
    };

    formDispatch({
        type: "reset",
        payload: generatedButton,
    });
}

export { GenerateRandom };
