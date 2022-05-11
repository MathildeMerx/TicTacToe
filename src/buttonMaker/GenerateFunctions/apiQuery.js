import axios from "axios";
import { hexToRGB, RGBToHex } from "./colorEncoding";

// Updates the colors the user hasn't filled in to those suggested by the aPI below
function queryAnswer(colors, formDispatch) {
    // Order in which the colors were given as inputs
    let dictColors = ["textColor", "borderColor", "backgroundColor"];

    //We fill with "N"s here because that's the way of telling the API
    //a color isn't filled in
    let colorInput = Array(colors.length).fill("N");
    let nbKnownColors = 0;
    let unknownColors = [];

    for (let i = 0; i < colors.length; i++) {
        // If a color was chosen by the user, it is added to the input which will be
        // fed to the API
        if (colors[i]) {
            colorInput[nbKnownColors] = hexToRGB(colors[i]);
            nbKnownColors += 1;
        }

        // If a color was left blank by the user, it'll have to be chosen by the API
        else {
            unknownColors.push(i);
        }
    }

    // The aPI will return a color based on the ML model "flower_photography" and the input "colorInput"
    var data = {
        model: "default",
        input: colorInput,
    };

    // API call
    axios
        .post("http://colormind.io/api/", JSON.stringify(data))

        .then((response) => {
            for (let i = 0; i < unknownColors.length; i++) {
                // Each color chosen by the API is assigned
                formDispatch({
                    type: "update",
                    payload: {
                        key: dictColors[unknownColors[i]],
                        value: RGBToHex(
                            response.data.result[nbKnownColors + i]
                        ),
                    },
                });
            }
        })

        .catch((error) => console.log(error));
}

export { queryAnswer };
