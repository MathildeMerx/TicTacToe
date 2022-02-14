// Returns the RGB encoding of the hex-encoded input
function hexToRGB(hexNumber) {
    let res = Array(3).fill(null);
    let decNumber = Number(`0x${hexNumber}`);

    res[0] = (decNumber >> 16) & 255;
    res[1] = (decNumber >> 8) & 255;
    res[2] = decNumber & 255;

    return res;
}

function intToHex(intNumber) {
    var res = intNumber.toString(16);
    return res.length === 1 ? "0" + res : res;
}

// Returns the hex encoding of the RGB-encoded input
function RGBToHex(RGBNumber) {
    const redChanel = intToHex(RGBNumber[0]);
    const greenChanel = intToHex(RGBNumber[1]);
    const blueChanel = intToHex(RGBNumber[2]);

    return intToHex(redChanel + greenChanel + blueChanel);
}

export { hexToRGB, RGBToHex };
