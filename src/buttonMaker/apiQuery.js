import axios from "axios";
import { hexToRGB, RGBToHex } from "./colorEncoding";

function queryAnswer(color, formDispatch) {
    var data = {
        model: "default",
        input: [hexToRGB(color), "N", "N", "N", "N"],
    };

    axios
        .post("http://colormind.io/api/", JSON.stringify(data))
        .then((response) => {
            formDispatch({
                type: "update",
                payload: {
                    key: "backgroundColor",
                    value: RGBToHex(response.data.result[1]),
                },
            });
        })
        .catch((error) => console.log(error));
}

export { queryAnswer };
