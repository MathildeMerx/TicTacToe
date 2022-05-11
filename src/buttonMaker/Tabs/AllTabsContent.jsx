import { BorderForm } from "../Forms/BorderForm";
import { FormatForm } from "../Forms/FormatForm";
import { IconForm } from "../Forms/IconForm";
import { TabContent } from "./TabContent";
import { TextForm } from "../Forms/TextForm";

function AllTabsContent({ activeTabIndex, formState, formDispatch }) {
    return (
        <div className="tab-content">
            {/* Tab to modify the text of the button */}
            <TabContent tabIndex={0} activeTabIndex={activeTabIndex}>
                <TextForm formState={formState} formDispatch={formDispatch} />
            </TabContent>

            {/* Tab to modify the border of the button */}
            <TabContent tabIndex={1} activeTabIndex={activeTabIndex}>
                <BorderForm formState={formState} formDispatch={formDispatch} />
            </TabContent>

            {/* Tab to modify the format of the button */}
            <TabContent tabIndex={2} activeTabIndex={activeTabIndex}>
                <FormatForm formState={formState} formDispatch={formDispatch} />
            </TabContent>

            {/* Tab to modify the icon of the button */}
            <TabContent tabIndex={3} activeTabIndex={activeTabIndex}>
                <IconForm formState={formState} formDispatch={formDispatch} />
            </TabContent>
        </div>
    );
}

export { AllTabsContent };
