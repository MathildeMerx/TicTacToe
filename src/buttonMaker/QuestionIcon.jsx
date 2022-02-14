import { QuestionOutlineIcon } from "@chakra-ui/icons";

// A hoverable icon to explain how the "Generate colors" button works
function QuestionIcon() {
    return (
        <div className="question-icon">
            <QuestionOutlineIcon className="question-icon" />
            <p className="question-hover">
                Not decided about which colors to use? Leave blank those you're
                not sure about, press the <i>Generate</i> button and let
                colormind API decide for you!
            </p>
        </div>
    );
}

export { QuestionIcon };
