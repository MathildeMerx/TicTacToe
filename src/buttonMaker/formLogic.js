function changeForm(event, formDispatch) {
    formDispatch({
        type: "update",
        payload: {
            key: event.target.id,
            value: event.target.value,
        },
    });
}

function clickForm(event, formDispatch) {
    formDispatch({
        type: "update",
        payload: {
            key: event.target.name,
            value: event.target.id,
        },
    });
}

export { changeForm, clickForm };
