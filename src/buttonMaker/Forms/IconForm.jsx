import * as allIcons from "@chakra-ui/icons";
import "../buttonMaker.css";
import { changeForm, clickForm } from "./formLogic";

// A module of all the availabe icons
//Icon and createIcon are removed because they're not icons
//(only ways to create new icons provided by Chakra UI)
let { Icon, createIcon, ...iconsModule } = allIcons;

// A list of all the icon names
let iconsName = Object.keys(iconsModule).map((e) => e);

// A dropdown button for the user to pick their icon
function DropdownItem({ iconName, Icon, formDispatch }) {
    return (
        <button
            name={"icon"}
            id={iconName.replace(/\s/g, "")}
            onClick={(event) => {
                event.preventDefault();
                clickForm(event.target.name, event.target.id, formDispatch);
            }}
        >
            <Icon className="icon-dropdown" />
            {iconName}
        </button>
    );
}

// A function to make the icon names more pleasant to read
function pascalToSpaces(expression) {
    return (
        expression
            // Look for lower-case letters followed by upper-case letters
            .replace(/([a-z\d])([A-Z])/g, "$1 $2")
            // Look for lower-case letters followed by numbers
            .replace(/([a-zA-Z])(\d)/g, "$1 $2")
            .replace(/^./, function (str) {
                return str.toUpperCase();
            })
            // Remove any white space left around the word
            .trim()
    );
}

function IconForm({ formState, formDispatch }) {
    // Making an object of the module of the icons
    let iconsObject = Object.fromEntries(
        Object.keys(iconsModule).map((iconName) => [
            pascalToSpaces(iconName),
            iconsModule[iconName],
        ])
    );

    // The user-friendly name of each icon
    let iconKeys = Object.keys(iconsObject).map((iconName) =>
        pascalToSpaces(iconName)
    );

    // What to show in the dropdown menu when it's not dropped
    let MenuIcon = iconsModule[formState.icon];
    return (
        <form className="tab-form">
            <div className="form-input">
                <p>Choose your icon:</p>

                <div className="dropdown">
                    <button>
                        <MenuIcon /> {pascalToSpaces(formState.icon)}
                    </button>

                    {/* Dropdown menu to choose the icon */}
                    <div className="dropdown-content">
                        {iconKeys.map((iconName) => (
                            <DropdownItem
                                iconName={iconName}
                                Icon={iconsObject[iconName]}
                                formDispatch={formDispatch}
                                key={iconName}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Slider to choose the size of the icon */}
            <label className="form-input" htmlFor="borderWidth">
                <p>
                    Icon width (in %): {Math.floor(formState.iconWidth * 100)}
                </p>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={formState.iconWidth}
                    onChange={(event) =>
                        changeForm(
                            event.target.id,
                            event.target.value,
                            formDispatch
                        )
                    }
                    className="slider"
                    id="iconWidth"
                />
            </label>
        </form>
    );
}

export { IconForm, iconsName };
