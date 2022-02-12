import axios from "axios";

function apiPun(formDispatch) {
    axios
        .get("https://my-bao-server.herokuapp.com/api/breadpuns")
        .then((response) => {
            formDispatch({
                type: "update",
                payload: { key: "text", value: response.data },
            });
        })
        .catch((error) => console.log(error));
}

export { apiPun };
