import { QueryClient } from "@tanstack/query-core";
// eslint-disable-next-line import/named
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
