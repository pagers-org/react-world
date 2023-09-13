import { activeTabStyle, inactiveTabStyle } from "./styles/tabs.css";
import { useTabsStore, useTagsStore } from "@/stores/useStore";

interface TabsProps {
  tabs: (string | undefined)[];
}

const Tabs = ({ tabs }: TabsProps) => {
  return <ul className="flex">{tabs.map((tab) => tab && <Tab key={tab} text={tab} />)}</ul>;
};
export default Tabs;

interface TabProps {
  text: string;
}

const Tab = ({ text }: TabProps) => {
  const { setSelectedTag } = useTagsStore();
  const { activeTab, setActiveTab } = useTabsStore();
  const handleClick = () => {
    if (text !== activeTab) {
      setSelectedTag("");
    }
    setActiveTab(text);
  };

  return (
    <li onClick={handleClick} className={activeTab === text ? activeTabStyle : inactiveTabStyle}>
      {text}
    </li>
  );
};
