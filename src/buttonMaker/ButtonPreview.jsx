import * as allIcons from "@chakra-ui/icons";

// Preview of the button
function ButtonPreview({ formState }) {
    // Component of the icon
    const Icon = allIcons[formState.icon];

    return (
        <button
            style={{
                color: `#${formState.textColor}`,
                backgroundColor: `#${formState.backgroundColor}`,
                textAlign: `${formState.align}`,
                fontSize: `${formState.fontSize}%`,
                borderStyle: `${formState.borderStyle}`,
                borderWidth: `${formState.borderWidth}px`,
                borderColor: `#${formState.borderColor}`,
                width: `${formState.width}px`,
                height: `${formState.height}px`,
                borderRadius: `${formState.borderRadius}px`,
                margin: "64px auto",
                display: "block",
            }}
        >
            <Icon
                style={{
                    paddingRight: "0.75em",
                    width: `${formState.iconWidth}em`,
                }}
            />
            {formState.text}
        </button>
    );
}

export { ButtonPreview };
