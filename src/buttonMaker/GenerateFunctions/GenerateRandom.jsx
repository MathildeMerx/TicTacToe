import { apiPun } from "./apiPun";
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

function clickGenerateRandom(formDispatch, apiPun, onSubmitGenerateColor) {
    formDispatch({
        type: "reset",
        payload: generateRandom(),
    });
    apiPun(formDispatch);
    onSubmitGenerateColor({}, formDispatch);
}

export { GenerateRandom };
