// Function modifying the relevant values when a user updates an input field
function updateForm(key, value, formDispatch) {
    formDispatch({
        type: "update",
        payload: { [key]: value },
    });
}

export { updateForm };
