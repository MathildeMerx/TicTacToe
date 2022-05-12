import axios from "axios";

//Function returning color suggestions
//(based on those the user didn't fill in)
async function apiColor(colors) {
    //Number of colors the user wants the API to suggest
    const nbUnknownColors = colors.filter((x) => !x).length;

    //The 3 colors to be used for the button
    //(both those the user filled in and those suggested by the API)
    let newColors = {
        textColor: colors[0],
        borderColor: colors[1],
        backgroundColor: colors[2],
    };

    //index to be defined later
    //`colorToAPI` will be given to the API for it to infer other color(s)
    //`colorFromAPI` will be the color infered by the API
    let index, colorToAPI, colorFromAPI;

    /*eslint no-fallthrough: "off"*/
    switch (nbUnknownColors) {
        //If no color is filled in, we generate a random background color.
        //Then go to case 2
        case 3:
            newColors.backgroundColor = Math.floor(
                Math.random() * 16777216
            ).toString(16);
        //If one color is filled in, we first determine which one it is
        case 2:
            index = uniqueColor(Object.values(newColors), true);
            //If the border color is filled in, the API will choose a text color
            //(in monochorme tone)
            if (index === 1) {
                colorToAPI = newColors.borderColor;
                newColors.textColor = await axios
                    .get(
                        `https://www.thecolorapi.com/scheme?hex=${colorToAPI}&mode=monochrome&count=1`
                    )
                    .then((response) => response.data.colors[0].hex.clean)
                    .catch((error) => console.log(error));

                //Else, we use either the text or the background color to determine the other one
                //(in complement tone - to make sure the text stands out well)
            } else {
                colorToAPI =
                    index === 0
                        ? newColors.textColor
                        : newColors.backgroundColor;
                colorFromAPI = await axios
                    .get(
                        `https://www.thecolorapi.com/scheme?hex=${colorToAPI}&mode=complement&count=1`
                    )
                    .then((response) => response.data.colors[0].hex.clean)
                    .catch((error) => console.log(error));

                if (index === 0) {
                    newColors.backgroundColor = colorFromAPI;
                } else {
                    newColors.textColor = colorFromAPI;
                }
            }
        //If one color wasn't filled in, we determine which one it is with index
        case 1:
            index = uniqueColor(Object.values(newColors), false);
            //If the border color is missing, the API will choose a monochrome one
            //based on the text color
            if (index === 1) {
                colorToAPI = newColors.textColor;
                newColors.borderColor = await axios
                    .get(
                        `https://www.thecolorapi.com/scheme?hex=${colorToAPI}&mode=monochrome&count=1`
                    )
                    .then((response) => response.data.colors[0].hex.clean)
                    .catch((error) => console.log(error));

                //Else, we use either the text or the background color to determine the other one
                //(in complement tone - to make sure the text stands out well)
            } else {
                colorToAPI =
                    index === 2
                        ? newColors.textColor
                        : newColors.backgroundColor;
                colorFromAPI = await axios
                    .get(
                        `https://www.thecolorapi.com/scheme?hex=${colorToAPI}&mode=complement&count=1`
                    )
                    .then((response) => response.data.colors[0].hex.clean)
                    .catch((error) => console.log(error));

                if (index === 0) {
                    newColors.textColor = colorFromAPI;
                } else {
                    newColors.backgroundColor = colorFromAPI;
                }
            }

        default:
            break;
    }
    return newColors;
}

export { apiColor };

//this function returns the index of the unique element of `colors` to be defined
//(if `existing`), else the index of the unique element to be undefined
function uniqueColor(colors, existing) {
    return existing ? colors.findIndex((x) => x) : colors.findIndex((x) => !x);
}
