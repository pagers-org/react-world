"use client";

import type { PropsWithChildren } from "react";

import type { SWRConfiguration } from "swr";
import { SWRConfig } from "swr";

const config: SWRConfiguration = {
  revalidateOnMount: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
};

export const SWRProvider = ({ children }: PropsWithChildren) => {
  return <SWRConfig value={config}>{children}</SWRConfig>;
};
