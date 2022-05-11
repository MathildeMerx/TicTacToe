import { borderStyles } from "../Forms/BorderForm";
import { textAlign } from "../Forms/TextForm";
import { iconsName } from "../Forms/IconForm";

// Generates a random button
function generateRandom() {
    // For each field, a random relevant value is generated
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
        align: align,
        fontSize: fontSize,
        borderStyle: borderStyle,
        borderWidth: borderWidth,
        width: width,
        height: "75",
        borderRadius: borderRadius,
        icon: icon,
        iconWidth: iconWidth,
    };
}

export { generateRandom };
