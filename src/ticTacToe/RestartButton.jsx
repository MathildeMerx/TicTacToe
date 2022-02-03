import { RefreshIcon } from "@heroicons/react/solid";

function handleRestartButtonClick(setStepNumber, setBoardHistory) {
    setStepNumber(0);
    setBoardHistory(
        Array(10)
            .fill(null)
            .map((e) => Array(9).fill(null))
    );
}

function RestartButton({ setStepNumber, setBoardHistory }) {
    return (
        <button
            className="button-icon"
            onClick={() =>
                handleRestartButtonClick(setStepNumber, setBoardHistory)
            }
        >
            <RefreshIcon className="icon" />
            Restart
        </button>
    );
}

export { RestartButton };
