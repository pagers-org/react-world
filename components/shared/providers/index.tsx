import type { PropsWithChildren } from "react";

import type { ComponentWithChildren } from "lib/hoc/with-combine";
import { withCombine } from "lib/hoc/with-combine";

import { SWRProvider } from "./swr-provider";

const providers: ComponentWithChildren[] = [SWRProvider];

export const Providers = ({ children }: PropsWithChildren) => withCombine(providers, children);
