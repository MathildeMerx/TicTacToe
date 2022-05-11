import { ButtonPreview } from "./ButtonPreview";
import { GenerateButtons } from "./GenerateFunctions/GenerateButtons";

function ButtonViewer({ formState, formDispatch }) {
    return (
        <aside className="button-viewer">
            <p> The button you are making is: </p>

            <ButtonPreview formState={formState} />

            <GenerateButtons
                formDispatch={formDispatch}
                formState={formState}
            />
        </aside>
    );
}

export { ButtonViewer };
