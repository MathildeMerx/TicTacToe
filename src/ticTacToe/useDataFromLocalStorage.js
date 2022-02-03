import { useEffect, useState } from "react";

//Uses local storage to store a state
function useDataFromLocalStorage(variableName, initialValue) {
    const [variable, setVariable] = useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(variableName);
        return JSON.parse(valueInLocalStorage) ?? initialValue;
    });

    useEffect(
        () =>
            window.localStorage.setItem(variableName, JSON.stringify(variable)),
        [variable, variableName]
    );

    return [variable, setVariable];
}

export { useDataFromLocalStorage };
