"use client";

import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

export default function Hydrate(props: HydrateProps) {
  return <RQHydrate {...props} />;
}
