import { styleVariants, style, keyframes } from "@vanilla-extract/css";

const pulse = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.5,
  },
});

export const base = style({
  backgroundColor: "#0000001c",
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const skeleton = styleVariants({
  circular: [
    base,
    {
      borderRadius: "99%",
      height: 48,
    },
  ],

  rounded: [
    base,
    {
      borderRadius: 12,
      height: 80,
      width: "100%",
    },
  ],
  rectangular: [
    base,
    {
      width: "100%",
      height: 48,
    },
  ],
  text: [
    base,
    {
      width: 80,
      height: 24,
    },
  ],
});
