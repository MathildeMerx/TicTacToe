import axios from "axios";

// Updates the text of the button to a bread pun from the API below
async function apiPun() {
    return axios
        .get("https://my-bao-server.herokuapp.com/api/breadpuns")
        .then((response) => response.data)
        .catch((error) => console.log(error));
}

export { apiPun };
