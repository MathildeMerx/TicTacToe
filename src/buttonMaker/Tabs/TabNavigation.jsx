import { ButtonTabNav } from "./ButtonTabNav";

// Navigation between the different tabs
function TabNavigation({ activeTabIndex, setActiveTabIndex }) {
    return (
        <nav className="tab-nav">
            {["Text", "Border", "Format", "Icon"].map((element, index) => (
                <ButtonTabNav
                    key={index}
                    index={index}
                    activeTabIndex={activeTabIndex}
                    setActiveTabIndex={setActiveTabIndex}
                    tabName={element}
                />
            ))}
        </nav>
    );
}

export { TabNavigation };
