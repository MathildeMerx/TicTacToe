import * as allIcons from "@chakra-ui/icons";
import "./buttonMaker.css";
import { changeForm, clickForm } from "./formLogic";

let { Icon, createIcon, ...iconsModule } = allIcons;

let iconsName = Object.keys(iconsModule).map((e) => e);

function DropdownItem({ iconName, Icon, formDispatch }) {
    return (
        <button
            name={"icon"}
            id={iconName.replace(/\s/g, "")}
            onClick={(e) => clickForm(e, formDispatch)}
        >
            <Icon /> &nbsp;
            {iconName}
        </button>
    );
}

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
    let iconsObject = Object.fromEntries(
        Object.keys(iconsModule).map((e) => [pascalToSpaces(e), iconsModule[e]])
    );
    let iconKeys = Object.keys(iconsObject).map((e) => pascalToSpaces(e));
    let MenuIcon = iconsModule[formState.icon];
    return (
        <form className="tab-form">
            <div className="form-input">
                <p>Choose your icon:</p>
                <div className="dropdown">
                    <button>
                        <MenuIcon /> {pascalToSpaces(formState.icon)}
                    </button>
                    <div className="dropdown-content">
                        {iconKeys.map((iconName) => {
                            return (
                                <DropdownItem
                                    iconName={iconName}
                                    Icon={iconsObject[iconName]}
                                    formDispatch={formDispatch}
                                    key={iconName}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
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
                    onChange={(e) => changeForm(e, formDispatch)}
                    className="slider"
                    id="iconWidth"
                />
            </label>
        </form>
    );
}

export { IconForm, iconsName };
