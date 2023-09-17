import { useState } from "react";

import {
  tabContainer,
  tabItemText,
  tabItem,
  expandedIconContainer,
  expandedIconButton,
  expandedIcon,
  container,
} from "./Tab.css";
import SvgIcon from "../SvgIcon";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import useHasScroll from "@/hooks/useHasScroll";

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
  const [isExpanded, setIsExpanded] = useState(false);

  const { elementRef, hasScroll } = useHasScroll<HTMLUListElement>();

  const onTabClick = (index: number) => {
    setClickedTab(index);
    callbacks && callbacks(index);
  };

  // 조건부 바인딩을 제외한 2개 이상의 클래스를 바인딩해야할 경우 함수로 분리
  const tabClasses = () => {
    const cn = [tabContainer, containerStyle];

    if (isExpanded) {
      cn.push("expanded");
    }

    return cn.join(" ");
  };

  return (
    <div className={container}>
      <ul ref={elementRef} className={tabClasses()}>
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
      {hasScroll && (
        <div
          className={expandedIconContainer}
          onClick={() => {
            setIsExpanded(prev => !prev);
          }}
        >
          <a className={`${expandedIconButton}  ${isExpanded ? "active" : ""}`}>
            <SvgIcon className={`${expandedIcon}`} src={ChevronDownIcon.src} id="chevron-down-icon"></SvgIcon>
          </a>
        </div>
      )}
    </div>
  );
};

export default Tab;
