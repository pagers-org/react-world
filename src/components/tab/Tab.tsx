import { useState } from "react";

import { tabContainer, tabItemText, tabItem } from "./Tab.css";

interface Tab {
  text: string;
  id?: string;
}

interface Props {
  tabArr: Tab[];
  topBorder?: boolean;
  tabMargin?: number;
  defaultTab?: number;
  currentTab?: number;
  callbacks?: () => void;
  rootStyles?: string;
  containerStyle?: string;
}

const Tab = ({ tabArr, containerStyle = "", defaultTab, callbacks }: Props) => {
  const [clickedTab, setClickedTab] = useState(defaultTab);

  const onTabClick = (index: number) => {
    setClickedTab(index);
    callbacks && callbacks();
  };

  return (
    <ul className={`${tabContainer} ${containerStyle}`}>
      {tabArr.map((tab, index) => (
        <li
          key={index}
          id={tab.id}
          className={`${tabItem} ${clickedTab === index ? "active" : ""}`}
          onClick={() => {
            onTabClick(index);
          }}
        >
          <span className={tabItemText}>{tab.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tab;
