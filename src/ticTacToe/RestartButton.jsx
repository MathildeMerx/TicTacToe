import { RefreshIcon } from "@heroicons/react/solid";

function RestartButton({ setStepNumber, setBoardHistory }) {
    function handleRestartButtonClick() {
        setStepNumber(0);
        setBoardHistory(
            Array(10)
                .fill(null)
                .map((element) => Array(9).fill(null))
        );
    }

    return (
        <button className="button-icon" onClick={handleRestartButtonClick}>
            <RefreshIcon className="icon" />
            Restart
        </button>
    );
}

export { RestartButton };
