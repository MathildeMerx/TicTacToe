import { GenerateColors } from "./GenerateColors";
import { GenerateRandom } from "./GenerateRandom.jsx";

function GenerateButtons({ formDispatch, formState }) {
    return (
        <div className="button-line">
            <GenerateRandom formDispatch={formDispatch} />
            <GenerateColors formDispatch={formDispatch} formState={formState} />
        </div>
    );
}

export { GenerateButtons };
