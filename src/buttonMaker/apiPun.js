import axios from "axios";

// Updates the text of the button to a bread pun from the API below
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
