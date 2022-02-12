import { QuestionOutlineIcon } from "@chakra-ui/icons";

function QuestionIcon() {
    return (
        <div className="question-icon">
            <QuestionOutlineIcon className="question-icon" />
            <p className="question-hover">
                Not decided about which colors to use? Leave blank those you're
                not sure about, and press the <i>Generate</i> button!
            </p>
        </div>
    );
}

export { QuestionIcon };
