// Function modifying the relevant values when a user updates a text or slider field
function changeForm(key, value, formDispatch) {
    formDispatch({
        type: "update",
        payload: {
            key: key,
            value: value,
        },
    });
}

// Function modifying the relevant values when a user updates a radio button
function clickForm(key, value, formDispatch) {
    formDispatch({
        type: "update",
        payload: {
            key: key,
            value: value,
        },
    });
}

export { changeForm, clickForm };
