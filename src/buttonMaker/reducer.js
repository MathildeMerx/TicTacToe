// Reducer function to modify the button state
function reducer(state, { type, payload }) {
    switch (type) {
        case "update":
            return { ...state, ...payload };
        case "reset":
            return payload;
        default:
            throw new Error(
                `Unexpected action type: ${type} when trying to modify ${payload.key}.`
            );
    }
}

export { reducer };
