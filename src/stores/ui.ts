import { atom, onMount, computed } from "nanostores";

import { BREAKPOINTS } from "@/constants/ui";

export const windowWidth = atom(0);
export function setWindowWidth(width: number) {
  windowWidth.set(width);
}

onMount(windowWidth, () => {
  windowWidth.set(window.innerWidth);

  window.addEventListener("resize", () => {
    windowWidth.set(window.innerWidth);
  });

  return () => {
    window.removeEventListener("resize", () => {
      windowWidth.set(window.innerWidth);
    });
  };
});

export const breakPoint = computed(windowWidth, width => {
  if (width >= BREAKPOINTS.XL) return "xl";
  if (width >= BREAKPOINTS.LG) return "lg";
  if (width >= BREAKPOINTS.MD) return "md";
  if (width >= BREAKPOINTS.SM) return "sm";
  return "xs";
});

export const isMobile = computed(breakPoint, breakPoint => {
  if (["xl", "lg"].indexOf(breakPoint) === -1) {
    return true;
  }

  return false;
});
