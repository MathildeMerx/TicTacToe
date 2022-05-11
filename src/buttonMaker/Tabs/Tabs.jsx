import { useState } from "react";
import { AllTabsContent } from "./AllTabsContent";
import { TabNavigation } from "./TabNavigation";

function Tabs({ formState, formDispatch }) {
    // Tells which tab the user currently uses
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return (
        <div>
            <TabNavigation
                activeTabIndex={activeTabIndex}
                setActiveTabIndex={setActiveTabIndex}
            />

            <AllTabsContent
                activeTabIndex={activeTabIndex}
                formState={formState}
                formDispatch={formDispatch}
            />
        </div>
    );
}

export { Tabs };
