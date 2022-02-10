import axios from "axios";
import { hexToRGB, RGBToHex } from "./colorEncoding";

function queryAnswer(colors, formDispatch) {
    let dictColors = { 0: "textColor", 1: "backgroundColor", 2: "borderColor" };

    let colorInput = Array(colors.length).fill("N");
    let nbKnownColors = 0;
    let unknownColors = [];

    for (let i = 0; i < colors.length; i++) {
        if (colors[i]) {
            colorInput[nbKnownColors] = hexToRGB(colors[i]);
            nbKnownColors += 1;
        } else {
            unknownColors.push(i);
        }
    }

    console.log(`Unknown colors: ${unknownColors}`);

    var data = {
        model: "default",
        input: colorInput,
    };

    axios
        .post("http://colormind.io/api/", JSON.stringify(data))
        .then((response) => {
            console.log(
                `The input was: ${colorInput}, the response is: ${response.data.result}`
            );
            for (let i = 0; i < unknownColors.length; i++) {
                console.log(`index: ${colors.length - nbKnownColors + i}`);
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
