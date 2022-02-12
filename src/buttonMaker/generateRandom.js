import { borderStyles } from "./BorderForm";
import { textAlign } from "./TextForm";
import { iconsName } from "./IconForm";

function generateRandom() {
    const textColor = Math.floor(Math.random() * 16777216).toString(16);
    const backgroundColor = Math.floor(Math.random() * 16777216).toString(16);
    const borderColor = Math.floor(Math.random() * 16777216).toString(16);
    const borderStyle =
        borderStyles[Math.floor(Math.random() * borderStyles.length)];
    const align = textAlign[Math.floor(Math.random() * textAlign.length)];
    const icon = iconsName[Math.floor(Math.random() * iconsName.length)];
    const fontSize = Math.floor(Math.random() * 70 + 50);
    const borderWidth = Math.floor(Math.random() * 10);
    const width = Math.floor(Math.random() * 50) + 150;
    const borderRadius = Math.floor(Math.random() * 50);
    const iconWidth = Math.random() * 0.5 + 0.5;

    return {
        text: "",
        textColor: textColor,
        backgroundColor: backgroundColor,
        align: align,
        fontSize: fontSize,
        borderStyle: borderStyle,
        borderColor: borderColor,
        borderWidth: borderWidth,
        width: width,
        height: "75",
        borderRadius: borderRadius,
        icon: icon,
        iconWidth: iconWidth,
    };
}

export { generateRandom };
