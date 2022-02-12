function TabContent({ children, tabIndex, activeTabIndex }) {
    if (tabIndex === activeTabIndex) {
        return children;
    } else {
        return null;
    }
}

export { TabContent };
