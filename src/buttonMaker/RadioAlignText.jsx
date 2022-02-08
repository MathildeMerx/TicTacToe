function RadioAlignText({ whereAlign, onClick }) {
    return (
        <>
            <input
                type="radio"
                id={whereAlign}
                name="align"
                onClick={onClick}
            />
            <label>
                {whereAlign.charAt(0).toUpperCase() + whereAlign.slice(1)}
            </label>
        </>
    );
}

export { RadioAlignText };
