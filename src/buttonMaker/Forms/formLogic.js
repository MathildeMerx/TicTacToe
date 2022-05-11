// Function modifying the relevant values when a user updates a text or slider field
function changeForm(event, formDispatch) {
    formDispatch({
        type: "update",
        payload: {
            key: event.target.id,
            value: event.target.value,
        },
    });
}

// Function modifying the relevant values when a user updates a radio button
function clickForm(event, formDispatch) {
    event.preventDefault();
    formDispatch({
        type: "update",
        payload: {
            key: event.target.name,
            value: event.target.id,
        },
    });
}

export { changeForm, clickForm };
