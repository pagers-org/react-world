import { useState } from "react";

import { tabContainer, tabItemText, tabItem } from "./Tab.css";

interface Tab {
  text: string;
  id?: string;
}

interface Props {
  tabArr: Tab[];
  defaultTab?: number;
  callbacks?: (index: number) => void;
  containerStyle?: string;
}

const Tab = ({ tabArr, containerStyle = "", defaultTab, callbacks }: Props) => {
  const [clickedTab, setClickedTab] = useState(defaultTab);

  const onTabClick = (index: number) => {
    setClickedTab(index);
    callbacks && callbacks(index);
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
