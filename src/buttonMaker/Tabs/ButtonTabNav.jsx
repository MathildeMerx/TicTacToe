function ButtonTabNav({ index, activeTabIndex, setActiveTabIndex, tabName }) {
    return (
        <button
            className={activeTabIndex === index ? "tab-active" : "tab-inactive"}
            onClick={() => setActiveTabIndex(index)}
        >
            {tabName}
        </button>
    );
}

export { ButtonTabNav };
